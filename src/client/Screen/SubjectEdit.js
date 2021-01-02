import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import SubjectActions from "../redux/actions/SubjectActions";
import ClassActions from "../redux/actions/ClassActions";
import TeacherActions from "../redux/actions/TeacherActions";

// END IMPORT ACTIONS

/** APIs

* actionsSubject.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSubject.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSubject.create
*	@description CRUD ACTION create
*
* actionsClass.findByclassSubject
*	@description CRUD ACTION findByclassSubject
*	@param Objectid key - Id of model to search for
*
* actionsTeacher.findBysubjectId
*	@description CRUD ACTION findBysubjectId
*	@param Objectid key - Id of model to search for
*

**/


class SubjectEdit extends Component {
  
  // Init subject
  constructor(props) {
    super(props);
    this.state = {
      subject: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsSubject.loadSubject(itemId);
        this.props.actionsClass.findByclassSubject(itemId);
        this.props.actionsTeacher.findBysubjectId(itemId);
      } else {
        this.setState({
          subject: {}
        });
      }
      
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      subject: {}
    });
    this.props.actionsSubject.reset();
  }

  // Insert props subject in state
  componentWillReceiveProps(props) {
    this.setState({
      subject: props.subject
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.subject._id) {
      // Edit
      this.props.actionsSubject.saveSubject(this.state.subject).then(data => {
        this.props.navigation.navigate("SubjectList");
      });
    } else {
      // Create
      this.props.actionsSubject.createSubject(this.state.subject).then(data => {
        this.props.navigation.navigate("SubjectList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Subject</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel>
              <Label>
                SubjectCode
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.subject, { subjectCode: value }))
                }
                value={this.state.subject.subjectCode && this.state.subject.subjectCode.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                SubjectName
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.subject, { subjectName: value }))
                }
                value={this.state.subject.subjectName && this.state.subject.subjectName.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Class */}

          
          {/* External relation with Teacher */}

          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsSubject: bindActionCreators(SubjectActions, dispatch),
    actionsClass: bindActionCreators(ClassActions, dispatch),
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
  };
};

// Validate types
SubjectEdit.propTypes = { 
  actionsSubject: PropTypes.object.isRequired,
  actionsClass: PropTypes.object.isRequired,
  actionsTeacher: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    subject: state.SubjectEditReducer.subject,
    listClass: state.SubjectEditReducer.listClass,
    listTeacher: state.SubjectEditReducer.listTeacher
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});

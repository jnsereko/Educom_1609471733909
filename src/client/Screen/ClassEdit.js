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
  Picker,
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

// END IMPORT ACTIONS

/** APIs

* actionsSubject.list
*	@description CRUD ACTION list
*
* actionsClass.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClass.create
*	@description CRUD ACTION create
*
* actionsClass.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/


class ClassEdit extends Component {
  
  // Init class
  constructor(props) {
    super(props);
    this.state = {
      class: {},
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
        this.props.actionsClass.loadClass(itemId);
      } else {
        this.setState({
          class: {}
        });
      }
      
      this.props.actionsSubject.loadSubjectList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      class: {}
    });
    this.props.actionsClass.reset();
  }

  // Insert props class in state
  componentWillReceiveProps(props) {
    this.setState({
      class: props.class
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
    if (this.state.class._id) {
      // Edit
      this.props.actionsClass.saveClass(this.state.class).then(data => {
        this.props.navigation.navigate("ClassList");
      });
    } else {
      // Create
      this.props.actionsClass.createClass(this.state.class).then(data => {
        this.props.navigation.navigate("ClassList");
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
            <Title>Detail Class</Title>
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
                ClassCode
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.class, { classCode: value }))
                }
                value={this.state.class.classCode && this.state.class.classCode.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                ClassName
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.class, { className: value }))
                }
                value={this.state.class.className && this.state.class.className.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* Relation 1:m classSubject with Subject */}
          
          <Item stackedLabel>
            <Label >
              ClassSubject
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.class.classSubject }
              value={this.state.class.classSubject }
              onValueChange={value =>
                this.setState(Object.assign(this.state.class, { classSubject: value }))
              }
            >
              {this.props.listSubject &&
                this.props.listSubject.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          

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
  };
};

// Validate types
ClassEdit.propTypes = { 
  actionsSubject: PropTypes.object.isRequired,
  actionsClass: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    class: state.ClassEditReducer.class,
    listSubject: state.ClassEditReducer.listSubject
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});

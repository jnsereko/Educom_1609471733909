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
  DatePicker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import TeacherActions from "../redux/actions/TeacherActions";
import SubjectActions from "../redux/actions/SubjectActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeacher.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTeacher.create
*	@description CRUD ACTION create
*
* actionsTeacher.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSubject.list
*	@description CRUD ACTION list
*

**/


class TeacherEdit extends Component {
  
  // Init teacher
  constructor(props) {
    super(props);
    this.state = {
      teacher: {},
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
        this.props.actionsTeacher.loadTeacher(itemId);
      } else {
        this.setState({
          teacher: {}
        });
      }
      
      this.props.actionsSubject.loadSubjectList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      teacher: {}
    });
    this.props.actionsTeacher.reset();
  }

  // Insert props teacher in state
  componentWillReceiveProps(props) {
    this.setState({
      teacher: props.teacher
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
    if (this.state.teacher._id) {
      // Edit
      this.props.actionsTeacher.saveTeacher(this.state.teacher).then(data => {
        this.props.navigation.navigate("TeacherList");
      });
    } else {
      // Create
      this.props.actionsTeacher.createTeacher(this.state.teacher).then(data => {
        this.props.navigation.navigate("TeacherList");
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
            <Title>Detail Teacher</Title>
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
                Address
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { address: value }))
                }
                value={this.state.teacher.address && this.state.teacher.address.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Administration
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { administration: value }))
                }
                value={this.state.teacher.administration && this.state.teacher.administration.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Contact
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { contact: value }))
                }
                value={this.state.teacher.contact && this.state.teacher.contact.toString()}
              />
            </Item>
          
            <Item stackedLabel>
              <Label>
                Dob
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.teacher.dob }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.teacher, { dob: value }))
                }
              />
            </Item>
            
            
            <Item floatingLabel>
              <Label>
                Email
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { email: value }))
                }
                value={this.state.teacher.email && this.state.teacher.email.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                FirstName
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { firstName: value }))
                }
                value={this.state.teacher.firstName && this.state.teacher.firstName.toString()}
              />
            </Item>
          
            <Item stackedLabel>
              <Label>
                Gender
              </Label>
              <Picker
                mode="dropdown"
                iosHeader="Select a value"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                selectedValue={this.state.teacher.gender }
                value={this.state.teacher.gender }
                onValueChange={value =>
                  this.setState(Object.assign(this.state.teacher, { gender: value }))
                }
              >
                <Picker.Item label="FEMALE" value="FEMALE" />
                <Picker.Item label="MALE" value="MALE" />
              </Picker>
            </Item>
            
            <Item floatingLabel>
              <Label>
                LastName
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { lastName: value }))
                }
                value={this.state.teacher.lastName && this.state.teacher.lastName.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Nin
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.teacher, { nin: value }))
                }
                value={this.state.teacher.nin && this.state.teacher.nin.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* Relation 1:m subjectId with Subject */}
          
          <Item stackedLabel>
            <Label >
              SubjectId
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.teacher.subjectId }
              value={this.state.teacher.subjectId }
              onValueChange={value =>
                this.setState(Object.assign(this.state.teacher, { subjectId: value }))
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
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
    actionsSubject: bindActionCreators(SubjectActions, dispatch),
  };
};

// Validate types
TeacherEdit.propTypes = { 
  actionsTeacher: PropTypes.object.isRequired,
  actionsSubject: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    teacher: state.TeacherEditReducer.teacher,
    listSubject: state.TeacherEditReducer.listSubject
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});

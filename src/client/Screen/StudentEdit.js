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
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.create
*	@description CRUD ACTION create
*
* actionsStudent.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/


class StudentEdit extends Component {
  
  // Init student
  constructor(props) {
    super(props);
    this.state = {
      student: {},
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
        this.props.actionsStudent.loadStudent(itemId);
      } else {
        this.setState({
          student: {}
        });
      }
      
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      student: {}
    });
    this.props.actionsStudent.reset();
  }

  // Insert props student in state
  componentWillReceiveProps(props) {
    this.setState({
      student: props.student
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
    if (this.state.student._id) {
      // Edit
      this.props.actionsStudent.saveStudent(this.state.student).then(data => {
        this.props.navigation.navigate("StudentList");
      });
    } else {
      // Create
      this.props.actionsStudent.createStudent(this.state.student).then(data => {
        this.props.navigation.navigate("StudentList");
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
            <Title>Detail Student</Title>
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
                  this.setState(Object.assign(this.state.student, { address: value }))
                }
                value={this.state.student.address && this.state.student.address.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Contact
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.student, { contact: value }))
                }
                value={this.state.student.contact && this.state.student.contact.toString()}
              />
            </Item>
          
            <Item stackedLabel>
              <Label>
                Dob
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.student.dob }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.student, { dob: value }))
                }
              />
            </Item>
            
            
            <Item floatingLabel>
              <Label>
                Email
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.student, { email: value }))
                }
                value={this.state.student.email && this.state.student.email.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                FirstName
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.student, { firstName: value }))
                }
                value={this.state.student.firstName && this.state.student.firstName.toString()}
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
                selectedValue={this.state.student.gender }
                value={this.state.student.gender }
                onValueChange={value =>
                  this.setState(Object.assign(this.state.student, { gender: value }))
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
                  this.setState(Object.assign(this.state.student, { lastName: value }))
                }
                value={this.state.student.lastName && this.state.student.lastName.toString()}
              />
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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
StudentEdit.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    student: state.StudentEditReducer.student
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});

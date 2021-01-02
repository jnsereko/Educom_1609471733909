// Dependencies
import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

// Screens
import LoginScreen from "./Screen/LoginScreen";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";
import ChangePwd from "./Screen/ChangePwd";

/* START MY SCREENS IMPORT */

import ClassEdit from "./Screen/ClassEdit";
import ClassList from "./Screen/ClassList";
import StudentEdit from "./Screen/StudentEdit";
import StudentList from "./Screen/StudentList";
import SubjectEdit from "./Screen/SubjectEdit";
import SubjectList from "./Screen/SubjectList";
import TeacherEdit from "./Screen/TeacherEdit";
import TeacherList from "./Screen/TeacherList";

/* END MY SCREENS IMPORT */

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AppNavigator = createStackNavigator(
      {
        Login: { screen: LoginScreen },
        Home: { screen: Home },
        Profile: { screen: Profile },
        ChangePwd: { screen: ChangePwd },

        /* START MY SCREENS */

    ClassEdit: { screen: ClassEdit },
    ClassList: { screen: ClassList },
    StudentEdit: { screen: StudentEdit },
    StudentList: { screen: StudentList },
    SubjectEdit: { screen: SubjectEdit },
    SubjectList: { screen: SubjectList },
    TeacherEdit: { screen: TeacherEdit },
    TeacherList: { screen: TeacherList },
    
     /* END MY SCREENS */
      },
      {
        initialRouteName: this.props.user ? "Home" : "Login",
        headerMode: "none"
      }
    );

    const AppContainerRouter = createAppContainer(AppNavigator);

    return <AppContainerRouter />;
  }
}

export default AppContainer;

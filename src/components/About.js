import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  //     console.log("Parent componentDidMount");
  // }
  render() {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-3xl p-3">About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="text-center text-xl font-bold p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p className="text-center">This is the learning course.</p>
        <ProfileClass name={"Aman"} />
      </div>
    );
  }
}

export default About;

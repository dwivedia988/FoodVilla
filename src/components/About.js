import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt-32">
        <div className="max-w-2xl mx-auto shadow-xl mb-16">
          <h1 className="text-center font-bold text-3xl p-3">About Us</h1>
          <UserContext.Consumer>
            {({ user }) => (
              <h4 className="text-center text-xl font-bold p-10">
                {user.name} - {user.email}
              </h4>
            )}
          </UserContext.Consumer>
          <ProfileClass name={"Aman"} />
        </div>
        <div className="flex mb-20">
          <div className="ml-48 pt-5">
            <h1 className="font-bold text-7xl text-gray-600 w-[430px]">
              Welcome to The world of Tasty Fresh Food
            </h1>
            <h4 className="text-gray-600 text-lg">
              "Better you will feel if you eat a FoodVilla healthy meal"
            </h4>
          </div>
          <div className="mx-48">
            <img
              src="https://foodfire-app.netlify.app/burger-image.ec55d069.png"
              alt="Food Image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;

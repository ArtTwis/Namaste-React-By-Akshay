import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Components/Profile";

const AboutUs1 = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* <Outlet /> */}
      <ProfileFunctional name="Twinkle Goyal" />
      <ProfileClass name="Twinkle Goyal" />
    </div>
  );
};

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <Outlet /> */}
        <Profile name="Twinkle Goyal" />
      </div>
    );
  }
}

export default AboutUs;

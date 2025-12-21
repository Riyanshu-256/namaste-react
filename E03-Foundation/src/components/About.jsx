import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Riyanshu-Class"}
          location={"Koderma-Class"}
          contact={"*******681"}
        />
        <UserClass
          name={"Sourav-Class"}
          location={"Dhanbad-Class"}
          contact={"*******581"}
        />
        <UserClass
          name={"Kavita-Class"}
          location={"Kolkata-Class"}
          contact={"*******481"}
        />
      </div>
    );
  }
}

export default About;

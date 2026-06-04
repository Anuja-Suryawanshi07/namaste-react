import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }
  render() {
        console.log("Parent Render")
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is About page</h2>
        <UserClass name={"Anuja Surya(Class)"} location={"Navi Mumbai"} />
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This is About page</h2>
//             <User name={"Anuja Surya(function)"} location={"Latur"}/>
//             <UserClass name={"Anuja Surya(Class)"} location={"Navi Mumbai"} />
//         </div>
//     );
// };
export default About;

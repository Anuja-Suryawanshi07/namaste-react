import User from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <h2>This is About page</h2>
            <User name={"Anuja Surya(function)"} location={"Latur"}/>
            <UserClass name={"Anuja Surya(Class)"} location={"Navi Mumbai"} />
        </div>
    );
};
export default About;
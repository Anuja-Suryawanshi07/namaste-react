import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            count: 0,
            count2: 0,
        }
    }

    render() {
            const {name, location} = this.props
            const {count, count2} = this.state
        return(
            <div className="user-card">
                <h1>Count: {this.state.count}  Count2: {this.state.count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @anujamay07</h4>
                <button onClick={() =>
                     this.setState({
                        count: count + 1,
                        count2: count + 2,
                        })}>
                    Increment Count
                </button>

            </div>
        );
    }
}
export default UserClass;
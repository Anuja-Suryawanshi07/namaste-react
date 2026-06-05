import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Default",
                avatar_url:"http://xyz.com"
            }
        }
        //console.log(this.props.name +"Child Constructor")
    }

     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Anuja-Suryawanshi07");
        const json = await data.json();
        console.log(json);
        //console.log(this.props.name +"Child ComponentDidMount");
        this.setState({
            userInfo:json
        })
    }
    render() {
        //console.log(this.props.name +"Child Render")
            const {name, location, avatar_url} = this.state.userInfo;
           
        return(
            <div className="user-card">
                <img src= {avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @anujamay07</h4>                
            </div>
        );
    }
}
export default UserClass;
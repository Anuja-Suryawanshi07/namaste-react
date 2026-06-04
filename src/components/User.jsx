import { useState } from "react";

const User =({name, location}) =>{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)
    return(
        <div className="user-card">
            <h1>Count: {count} Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @anujamay07</h4>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount2(count2 + 10)}>Increment Count2</button>
        </div>
        
    )
}
export default User;
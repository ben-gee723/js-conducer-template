// 11. import useConext, useState and Context to be used
import React, { useContext, useState } from "react";
import AppContext from "../conducers/index";

function UserDashboard() {
    // 12. Set-Up useContext
    const { userState, userDispatch } = useContext(AppContext);
    // 13. Set-up required useStates to edit information
    const [newData, setNewData] = useState(userState);

    const onChange = (e) => {
        setNewData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    // console.log(data ? data : "empty")

    return (
        <>
            <p>Hello World</p>
            <p>Name: {userState.name} </p> <input type="text" name="name" onChange={(e) => onChange(e)} />
            <p>Email: {userState.email} </p> <input type="text" name="email" onChange={(e) => onChange(e)} />
            <button onClick={() => userDispatch({ type: 'UPDATE', data: newData })} >Update</button>
        </>
    )
}
export default UserDashboard;
import React from "react"

function UserPage(props){
    // console.log(props.location.state)
    return<>
    <h1>User page</h1>
    <h1>hiii {props.location.state.firstName}</h1>
    </>;
}
export default UserPage;
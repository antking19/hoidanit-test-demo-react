import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Marcus", age: 31 },
            { id: 2, name: "Cheung", age: 16 },
            { id: 3, name: "Cuong", age: 33 },
        ],
    };

    handleAddUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        });
    };

    render() {
        return (
            <div>
                <AddUserInfor handleAddUser={this.handleAddUser} />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;

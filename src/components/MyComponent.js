import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Marcus", age: 31 },
            { id: 2, name: "Cheung", age: 16 },
            { id: 3, name: "Cuong", age: 33 },
        ],
    };

    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const listUserArray = [
        { id: 1, name: "Marcus", age: 31 },
        { id: 2, name: "Cheung", age: 16 },
        { id: 3, name: "Cuong", age: 33 },
    ];

    const [listUser, setListUser] = useState(listUserArray);

    const handleAddUser = (userObj) => {
        setListUser([userObj, ...listUser]);
    };

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter((user) => user.id !== userId);
        setListUser(listUserClone);
    };

    return (
        <div>
            <AddUserInfor handleAddUser={handleAddUser} />
            <br />
            <DisplayInfor
                listUsers={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
};

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Marcus", age: 31 },
//             { id: 2, name: "Cheung", age: 16 },
//             { id: 3, name: "Cuong", age: 33 },
//         ],
//     };

//     handleAddUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers],
//         });
//     };

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <AddUserInfor handleAddUser={this.handleAddUser} />
//                 <br />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

export default MyComponent;

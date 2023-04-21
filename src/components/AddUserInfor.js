import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("Hoi Dan IT");
    const [age, setAge] = useState("");

    const handleOnchangeName = (event) => {
        setName(event.target.value);
    };

    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        });
    };

    return (
        <>
            My name is {name}, I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Name: </label>
                <input
                    type="text"
                    onChange={(event) => handleOnchangeName(event)}
                    value={name}
                />

                <label>Age: </label>
                <input
                    type="text"
                    onChange={(event) => handleOnchangeAge(event)}
                    value={age}
                />
                <button>Submit</button>
            </form>
        </>
    );
};

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         address: "Hoi Dan IT",
//         age: "",
//     };

//     handleOnchangeName = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             name: event.target.value,
//         });
//     };

//     handleOnchangeAge = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             age: event.target.value,
//         });
//     };

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddUser({
//             id: Math.floor(Math.random() * 100 + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age,
//         });
//     };

//     render() {
//         return (
//             <>
//                 My name is {this.state.name}, I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Name: </label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnchangeName(event)}
//                         value={this.state.name}
//                     />

//                     <label>Age: </label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnchangeAge(event)}
//                         value={this.state.age}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </>
//         );
//     }
// }

export default AddUserInfor;

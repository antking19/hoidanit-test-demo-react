import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: "Hoi Dan IT",
        age: "",
    };

    handleOnchangeName = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    };

    handleOnchangeAge = (event) => {
        // console.log(event.target.value);
        this.setState({
            age: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age,
        });
    };

    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Name: </label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                        value={this.state.name}
                    />

                    <label>Age: </label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                        value={this.state.age}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;

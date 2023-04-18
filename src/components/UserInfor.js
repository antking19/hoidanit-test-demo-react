import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
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
        console.log(this.state);
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
                    />

                    <label>Age: </label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;

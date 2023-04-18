import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
    };

    // handleClick(event) {
    //     console.log("Hello ", this.state.name);

    //     this.setState({
    //         name: "Cuong",
    //         age: Math.floor(Math.random() * 100 + 1),
    //     });
    // }

    // handleOnMouseOver(event) {
    //     console.log(event.target);
    // }

    handleOnchange = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value,
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
                {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button
                    onClick={(event) => {
                        this.handleClick(event);
                    }}
                >
                    Click me
                </button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnchange(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;

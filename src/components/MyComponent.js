import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
    };

    handleClick(event) {
        console.log("Hello ", this.state.name);

        this.setState({
            name: "Cuong",
            age: Math.floor(Math.random() * 100 + 1),
        });
    }

    handleOnMouseOver(event) {
        console.log(event.target);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button
                    onClick={(event) => {
                        this.handleClick(event);
                    }}
                >
                    Click me
                </button>
            </div>
        );
    }
}

export default MyComponent;

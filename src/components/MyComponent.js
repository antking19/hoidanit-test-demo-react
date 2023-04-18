import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
    };

    handleClick() {
        console.log("Hello Guys");
    }

    handleOnMouseOver(event) {
        console.log(event.target);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;

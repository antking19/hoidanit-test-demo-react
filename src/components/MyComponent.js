import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
    };

    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age}
            </div>
        );
    }
}

export default MyComponent;

import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowHide: true,
    };

    handleShowHide = () => {
        this.setState({
            isShowHide: !this.state.isShowHide,
        });
    };

    render() {
        const { listUsers } = this.props;

        return (
            <div>
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowHide
                            ? "Hide list user:"
                            : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowHide && (
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div
                                    key={user.id}
                                    className={user.age > 18 ? "green" : "red"}
                                >
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfo;

import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
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
            <div className="display-infor-container">
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowHide
                            ? "Hide list user:"
                            : "Show list user:"}
                    </span>
                </div>
                {/* <img src={logo} /> */}
                {this.state.isShowHide && (
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div
                                    key={user.id}
                                    className={user.age > 18 ? "green" : "red"}
                                >
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <button
                                        onClick={() =>
                                            this.props.handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                    <hr />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        );
    }
}

export default DisplayInfor;

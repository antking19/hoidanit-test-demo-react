import React, { useState } from "react";
import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//     constructor(props) {
//         console.log("Constructor 1");
//         super(props);

//         this.state = {
//             isShowHide: true,
//         };
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowHide: !this.state.isShowHide,
//         });
//     };

//     componentDidMount() {
//         console.log("componentDidMount");
//         setTimeout(() => {
//             document.title = "Marcus & Hoi Dan IT";
//         }, 3000);
//     }

//     componentDidUpdate(prevProps) {
//         console.log(this.props, prevProps);
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length === 5) {
//                 alert("You got 5 users");
//             }
//         }
//     }

//     render() {
//         console.log("Render");
//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-container">
//                 <div>
//                     <span onClick={() => this.handleShowHide()}>
//                         {this.state.isShowHide
//                             ? "Hide list user:"
//                             : "Show list user:"}
//                     </span>
//                 </div>
//                 {/* <img src={logo} /> */}
//                 {this.state.isShowHide && (
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div
//                                     key={user.id}
//                                     className={user.age > 18 ? "green" : "red"}
//                                 >
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <button
//                                         onClick={() =>
//                                             this.props.handleDeleteUser(user.id)
//                                         }
//                                     >
//                                         Delete
//                                     </button>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser && (
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
                                        props.handleDeleteUser(user.id)
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
};

export default DisplayInfor;

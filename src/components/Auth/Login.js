import { useState } from "react";
import "./Login.scss";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        alert("login");
    };

    return (
        <div>
            <div className="login-container">
                <div className="header text-end m-3">
                    Don't have an account yet?{" "}
                    <button className="btn btn-outline-dark">Sign up</button>
                </div>
                <div className="login-content col-2 mx-auto">
                    <div className="title text-center">
                        <h2>Hoi Dan IT</h2>
                        <h5 className="fw-normal my-4">Hello, who's this?</h5>
                    </div>
                    <div className="content-form">
                        <div className="login-form">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password, please!"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </div>
                            <span>Forgot password?</span>
                            <div className="mt-3 text-center d-grid">
                                <button
                                    className="btn btn-dark"
                                    onClick={() => handleLogin()}
                                >
                                    Login in to Hoi Dan IT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

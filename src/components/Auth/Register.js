import { useState } from "react";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import "./Register.scss";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error("Invalid Email");
            return;
        }

        if (!password) {
            toast.error("Invalid Password");
            return;
        }

        const data = await postRegister(email, password, username);
        console.log(data);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login");
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <div className="register-container">
            <div className="register-content mt-5">
                <div className="text-center">
                    <h2>Hoi Dan IT</h2>
                    <h5 className="fw-normal my-4">Register Page</h5>
                </div>
            </div>
            <div className="content-form col-2 mx-auto">
                <div className="register-form">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="inputRegisterPassword">
                            <input
                                type={`${isShowPassword ? "text" : "password"}`}
                                className="form-control registerPassword"
                                placeholder="Enter password, please!"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                            <span
                                className="registerEyesPassword"
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            >
                                {isShowPassword ? (
                                    <HiOutlineEye />
                                ) : (
                                    <HiOutlineEyeOff />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </div>
                    <div className="d-grid mt-4">
                        <button
                            className="btn btn-dark"
                            onClick={() => {
                                handleRegister();
                            }}
                        >
                            Register
                        </button>
                        <button
                            className="btn btn-outline-primary mt-4"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            &#60;&#60; Go Back Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

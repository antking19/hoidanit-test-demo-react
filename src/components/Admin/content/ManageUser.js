import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="user-content">
                <div>
                    <button
                        className="btn btn-primary btn-add-new"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div>
                    <TableUser />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    );
};

export default ManageUser;

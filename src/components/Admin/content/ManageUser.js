import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    // componentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        }
    };

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
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    );
};

export default ManageUser;

import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
// import TableUser from "./TableUser";
import {
    getAllUsers,
    getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserWithPaginate from "./TableUserWithPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 6;

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [listUsers, setListUsers] = useState([]);

    // componentDidMount
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        }
    };

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        console.log(res);
        if (res && res.EC === 0) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    };

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    };

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
        console.log("delete");
    };

    const resetUpdateData = () => {
        setDataUpdate({});
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}

                    <TableUserWithPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    resetUpdateData={resetUpdateData}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    dataUpdate={dataUpdate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ManageUser;

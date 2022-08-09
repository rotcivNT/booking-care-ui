import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiLogOut, FiEdit3, FiTrash } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

import classNames from 'classnames/bind';
import styles from './UserManager.module.scss';
import UserModal from './UserModal';
const cx = classNames.bind(styles);

function UserManager() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        update: false,
    });
    const fetchUser = async () => {
        const userData = await axios.get(
            'http://localhost:8080/api/get-all-user',
        );
        setUsers(userData.data);
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const handleAddNewUser = async (data) => {
        const res = await axios.post(
            'http://localhost:8080/api/create-user',
            data,
        );
        if (res.data.data && res.data.data.errCode === 0) {
            fetchUser();
        }
        setOpen(false);
    };
    const handleDeleteUser = async (id) => {
        const res = await axios.delete(
            `http://localhost:8080/api/delete-user/${id}`,
            { id: id },
        );
        if (res.data.data && res.data.data.errCode === 0) {
            fetchUser();
        }
    };
    const handleClickUpdateBtn = (userEdit) => {
        setOpen(true);
        setUserInfo((pre) => ({
            ...pre,
            update: true,
            ...userEdit,
            password: 'hashCode',
        }));
    };
    const handleUpdateUser = async (id, data) => {
        const res = await axios.put(
            `http://localhost:8080/api/update-user/${id}`,
            data,
        );
        if (res.data.data && res.data.data.errCode === 0) {
            fetchUser();
        }
        setOpen(false);
        setUserInfo({
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            update: false,
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <span>Hệ thống</span>
                <FiLogOut className={cx('icon')} />
            </div>
            <h3 className={cx('title')}>Quản Lý User</h3>
            <div className={cx('create-btn')}>
                <button onClick={() => setOpen(true)}>Creat New User</button>
            </div>
            <UserModal
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                handleAddNewUser={handleAddNewUser}
                handleUpdateUser={handleUpdateUser}
                isOpen={open}
                handleToggle={() => setOpen(false)}
            />
            <div className={cx('table-user')}>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>
                                    <div className={cx('actions')}>
                                        <FiEdit3
                                            onClick={() =>
                                                handleClickUpdateBtn(user)
                                            }
                                        />
                                        <FiTrash
                                            onClick={() =>
                                                handleDeleteUser(user.id)
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserManager;

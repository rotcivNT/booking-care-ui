import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from 'reactstrap';

import classNames from 'classnames/bind';
import styles from '../UserManager.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserModal({
    userInfo,
    setUserInfo,
    isOpen,
    handleToggle,
    handleAddNewUser,
    handleUpdateUser,
}) {
    const handleOnChange = (type, value) => {
        setUserInfo((pre) => {
            return {
                ...pre,
                [type]: value,
            };
        });
    };
    return (
        <Modal size="xl" centered={true} isOpen={isOpen} toggle={handleToggle}>
            <ModalHeader toggle={handleToggle}>Create Form</ModalHeader>
            <ModalBody>
                <form className={cx('form')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="email">Email</label>
                        <Input
                            required
                            bsSize="lg"
                            id="email"
                            type="email"
                            placeholder="Email..."
                            value={userInfo.email}
                            onChange={(e) =>
                                handleOnChange('email', e.target.value)
                            }
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Password</label>
                        <Input
                            required
                            bsSize="lg"
                            id="password"
                            type="password"
                            placeholder="Password..."
                            value={userInfo.password}
                            onChange={(e) =>
                                handleOnChange('password', e.target.value)
                            }
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="first-name">First Name</label>
                        <Input
                            required
                            bsSize="lg"
                            id="first-name"
                            type="text"
                            placeholder="First Name..."
                            value={userInfo.firstName}
                            onChange={(e) =>
                                handleOnChange('firstName', e.target.value)
                            }
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="last-name">Last Name</label>
                        <Input
                            required
                            bsSize="lg"
                            id="last-name"
                            type="text"
                            placeholder="Last Name..."
                            value={userInfo.lastName}
                            onChange={(e) =>
                                handleOnChange('lastName', e.target.value)
                            }
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="address">Address</label>
                        <Input
                            required
                            bsSize="lg"
                            id="address"
                            type="text"
                            placeholder="Address..."
                            value={userInfo.address}
                            onChange={(e) =>
                                handleOnChange('address', e.target.value)
                            }
                        />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                {!userInfo.update ? (
                    <div>
                        <Button
                            onClick={() => handleAddNewUser(userInfo)}
                            size="lg"
                            color="primary"
                        >
                            Create
                        </Button>{' '}
                    </div>
                ) : (
                    <div>
                        <Button
                            size="lg"
                            color="primary"
                            onClick={() =>
                                handleUpdateUser(userInfo.id, userInfo)
                            }
                        >
                            Save
                        </Button>{' '}
                    </div>
                )}
                <Button size="lg" onClick={handleToggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default UserModal;

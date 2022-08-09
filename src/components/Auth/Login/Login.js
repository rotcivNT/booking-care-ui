import { useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        email: '',
        password: '',
    });
    const [err, setErr] = useState('');
    // Handle Function
    const handleOnChange = (type, value) => {
        setAccount((pre) => ({ ...pre, [type]: value }));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        let res = await axios.post('http://localhost:8080/api/login', {
            email: account.email,
            password: account.password,
        });
        console.log(res);
        if (res.data.errCode !== 0) {
            setErr(res.data.errMessage);
        } else {
            navigate('/dashboard');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-form')}>
                    <div className={cx('header')}>
                        <p className={cx('title')}>Sign In</p>
                        <div className={cx('options')}>
                            <div className={cx('icon')}>
                                <FaFacebookF />
                            </div>
                            <div className={cx('icon')}>
                                <FaGoogle />
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <div className={cx('form-group')}>
                            <label htmlFor="user-name">USERNAME</label>
                            <input
                                id="user-name"
                                value={account.email}
                                type="text"
                                placeholder="Username"
                                onChange={(e) =>
                                    handleOnChange('email', e.target.value)
                                }
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password">PASSWORD</label>
                            <input
                                id="password"
                                value={account.password}
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    handleOnChange('password', e.target.value)
                                }
                            />
                        </div>
                        <div className={cx('show-err')}>{err}</div>
                        <Button onClick={handleLogin} rounded="rounded">
                            Sign In
                        </Button>
                    </form>

                    <div className={cx('footer')}>
                        <label
                            htmlFor="remember"
                            className={cx('remember-user')}
                        >
                            <input type="checkbox" id="remember" />
                            <span className={cx('markcheck')}></span>

                            <span>Remember Me</span>
                        </label>
                        <Button
                            to="/forgot-password"
                            className={cx('forgot-password')}
                        >
                            Forgot Password
                        </Button>
                    </div>
                </div>
                <div className={cx('register-form')}>
                    <h3>Welcome to login</h3>
                    <p>Don't have an account?</p>
                    <Button outline="outline">Sign Up</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;

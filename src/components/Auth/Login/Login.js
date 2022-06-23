import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
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
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password">PASSWORD</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <Button rounded="rounded">Sign In</Button>
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

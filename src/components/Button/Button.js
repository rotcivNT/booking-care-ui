import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    rounded,
    outline,
    type,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        rounded,
        outline,
    });
    if (to) {
        Component = Link;
        props.to = to;
    }
    if (href) {
        Component = 'a';
        props.href = href;
    }
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;

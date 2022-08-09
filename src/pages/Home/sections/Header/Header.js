import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { HiMenu, HiQuestionMarkCircle } from 'react-icons/hi';
import images from '~/assets/images';
import HeaderSearch from './HeaderSearch';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('vi');
    const handleChangeLanguage = (lan) => {
        setLanguage(lan);
        i18n.changeLanguage(lan);
    };
    return (
        <header className={cx('header')}>
            <nav className={cx('navbar')}>
                <div className={cx('logo')}>
                    <HiMenu className={cx('icon')} />
                    <img alt="logo" src={images.logo} />
                </div>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item')}>
                        <h4>{t('content.medical-specialty')}</h4>
                        <p>{t('content.find-doctor')}</p>
                    </li>
                    <li className={cx('navbar-item')}>
                        <h4>{t('content.facilities')}</h4>
                        <p>{t('content.clinic')}</p>
                    </li>
                    <li className={cx('navbar-item')}>
                        <h4>{t('content.doctor')}</h4>
                        <p>{t('content.choose-doctor')}</p>
                    </li>
                    <li className={cx('navbar-item')}>
                        <h4>{t('content.package')}</h4>
                        <p>{t('content.health-check')}</p>
                    </li>
                </ul>
                <div className={cx('support')}>
                    <HiQuestionMarkCircle className={cx('icon')} />
                    <span>{t('content.support')}</span>
                </div>
                <div className={cx('language')}>
                    <span
                        className={cx(language === 'vi' ? 'active' : '')}
                        onClick={() => handleChangeLanguage('vi')}
                    >
                        VI
                    </span>
                    <span
                        className={cx(language === 'en' ? 'active' : '')}
                        onClick={() => handleChangeLanguage('en')}
                    >
                        EN
                    </span>
                </div>
            </nav>
            <HeaderSearch />
        </header>
    );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import images from '~/assets/images';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const { t, i18n } = useTranslation();
    return (
        <div
            style={{
                background: `#fff url(${images.banner}) no-repeat center`,
                backgroundSize: 'cover',
            }}
            className={cx('wrapper')}
        >
            <div className={cx('search')}>
                <h1 className={cx('title')}>
                    {t('content.medial-background')}
                </h1>
                <form className={cx('search-form')}>
                    <div className={cx('form-group')}>
                        <HiOutlineSearch className={cx('icon')} />
                        <input placeholder="Tìm phòng khám" />
                    </div>
                </form>
            </div>
            <div className={cx('download')}>
                <a
                    href="https://bookingcare.vn/app/android"
                    className={cx('download-link')}
                >
                    <img
                        alt="Tải ứng dụng BookingCare trên Android"
                        width="108"
                        height="32"
                        src="https://bookingcare.vn/assets/icon/google-play-badge.svg"
                    />
                </a>
                <a
                    href="https://bookingcare.vn/app/ios"
                    className={cx('download-link')}
                >
                    <img
                        alt="Tải ứng dụng BookingCare trên IOS"
                        width="108"
                        height="32"
                        src="https://bookingcare.vn/assets/icon/app-store-badge-black.svg"
                    />
                </a>
            </div>
            <ul className={cx('options-list')}>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[0]} alt="logo" />
                    </div>
                    <p>
                        Khám <br />
                        chuyên khoa
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[1]} alt="logo" />
                    </div>
                    <p>
                        Khám <br /> từ xa
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[2]} alt="logo" />
                    </div>
                    <p>
                        Khám <br /> tổng quát
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[3]} alt="logo" />
                    </div>
                    <p>
                        Xét nghiệm <br /> tổng quát
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[4]} alt="logo" />
                    </div>
                    <p>
                        Sức khỏe <br /> tinh thần
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[5]} alt="logo" />
                    </div>
                    <p>
                        Khám <br /> nha khoa
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[6]} alt="logo" />
                    </div>
                    <p>
                        Gói phẩu <br /> thuật
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[7]} alt="logo" />
                    </div>
                    <p>
                        Sản phẩm <br /> y tế
                    </p>
                </li>
                <li className={cx('option-item')}>
                    <div>
                        <img src={images.optionsImages[8]} alt="logo" />
                    </div>
                    <p>
                        Sức khỏe <br /> doanh nghiệp
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default HeaderSearch;

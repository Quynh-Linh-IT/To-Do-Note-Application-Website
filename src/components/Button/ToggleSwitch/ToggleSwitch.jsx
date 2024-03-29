import className from 'classnames/bind';
import styles from './ToggleSwitch.module.scss'
import { useState } from 'react';
function ToggleSwitch() {
    const cx = className.bind(styles);
    const [isChecked,setIsChecked] = useState(false);
    const classNameChecked = className(styles['slider'], {
        [styles.round]: true,
    });
    const handleCheckboxChange = (event) =>{
        setIsChecked(event.target.checked);
    }
    return (
        <div className={cx('wrapper')}>
            <label className={cx('switch')} >
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                <span className={classNameChecked} ></span>
            </label>
            <span className={cx('result_checked')}>{isChecked ? "Tắt" : "Bật"}</span>
        </div>
    )
}
export default ToggleSwitch;
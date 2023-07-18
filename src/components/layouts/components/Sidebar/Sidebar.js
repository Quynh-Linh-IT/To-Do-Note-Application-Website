import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
 import { useState } from 'react';
import styles from './Sidebar.module.scss'
import { publicRoutes } from "~/routes";
import BasicTabs from './TabPanel';
import SidebarItem from './components/SideBarItem/SideBarItem';

function Sidebar(){
    const cx = className.bind(styles);
    return(
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-list')}>
                <ul className={cx('wrapper-list_ul')}>
                    {
                        publicRoutes.map((item, index) => {
                            return (           
                                <SidebarItem title={item} keyboard={index} ></SidebarItem>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={cx('wrapper-favorites')}>
                <h2>Favorites</h2>
                <FontAwesomeIcon className={cx('icon-faCaretRight')} icon={faCaretRight}/>
            </div>
            <div>
                <div className={cx('wrapper-project')}>
                   <BasicTabs/>
                </div> 
            </div>
        </div>
    )
}
export default Sidebar;
import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind';
import styles from "./Category.module.scss";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import CategoryItem from './CategoryItem';
function CategoryColor({children,state=false,handleCLick = undefined,items=[],stateCheck=undefined}) {
    const cx = className.bind(styles);
    const handleClickMenuItem = (item) =>{
        handleCLick(item);
    }
    const showToolbarItem = () => {
        return items.map((item,index) => 
            <CategoryItem 
                onClick={handleClickMenuItem} 
                state={stateCheck}  
                key={index} 
                data={item}
            />)
    }
    return (
        <Tippy
            visible = {state === true}
            interactive
            placement='bottom'
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {showToolbarItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default CategoryColor;
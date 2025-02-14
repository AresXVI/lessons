import Title from "../Title";
import classes from './Header.module.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <Title title={'Header'} age={18} name={'Ares'}/>
        </div>
    )
}
export default Header;
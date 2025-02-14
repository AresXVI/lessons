import Title from "../Title"
import classes from './Footer.module.css'

export const Footer = () => {
    return(
        <div>
            <Title title={'Footer'} age={18} name={'Ares'}/>
        </div>
    )
}

export const Footer2 = () => {
    return (
        <div className={classes.footer}>
            Footer2
        </div>
    )
}

export default Footer
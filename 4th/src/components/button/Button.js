import classes from './Button.module.css'

const Button = ({name, color}) => {
    return (
        <div>
            <button 
                className={`${classes.button} ${classes[color]}`}
            >
                {name}
                </button>
        </div>
    )
}

export default Button;
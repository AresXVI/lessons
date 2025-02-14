import classes from './Person.module.css'
const Person = ({name, age, address}) => {
    return (
        <div className={classes.person}>
            <p>name: <span>{name}</span></p>
            <p>age: <span>{age}</span></p>
            <p>address: <span>{address}</span></p>
        </div>
    )
}

export default Person
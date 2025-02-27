function Title({ text, age = 0}) {
    return (
    <div>      
        <h2>{ text } - { age }</h2>
    </div>
    )
}

export default Title;
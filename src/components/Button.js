

const Button = (props) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <button
            className="btn"
            style={{ backgroundColor: props.color }}
            onClick={onClick}

        >
            {props.text}</button>
    )
}



export default Button
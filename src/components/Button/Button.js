const Button = (props) => {
    return(
        <button onClick={props.callback}>{props.label}</button> //className="clase en CSS"
    )
}

export default Button
const Buttons = (props) => {
    return (
        <span>
            <button className={`p-2 my-3 mx-2 ${props.varian} rounded-md `}>{props.children}</button>
        </span>
    )
}

export default Buttons
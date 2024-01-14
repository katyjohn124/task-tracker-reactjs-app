import Button from "./Button"
const Header = (props) => {
    return (
        <header className="header">
            <h1 style={{ color: "black" }}>{props.title}</h1>
            <Button color="blue" text="Add" />
        </header>
    )
}

export default Header
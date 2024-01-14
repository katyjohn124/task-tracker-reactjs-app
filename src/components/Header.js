import Button from "./Button"
const Header = ({ title, showAdd, onAdd }) => {
    return (
        <header className="header">
            <h1 style={{ color: "black" }}>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'add'}
                onClick={onAdd}
            />
        </header>
    )
}

export default Header
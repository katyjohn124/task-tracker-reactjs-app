import Button from "./Button"
import { useLocation } from 'react-router-dom'
const Header = ({ title, showAdd, onAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1 style={{ color: "black" }}>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

export default Header
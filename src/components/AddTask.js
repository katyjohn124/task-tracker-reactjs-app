import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add a task!')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>task</label>
                <input
                    type="text"
                    placeholder="write task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>day & time</label>
                <input
                    type="text"
                    placeholder="add day & time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    checked={reminder}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
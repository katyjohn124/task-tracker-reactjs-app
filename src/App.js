import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'learn react coding ',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'learn react coding ',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'learn react coding ',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ])
    return (
        <div className="containner">
            <Header title="Hello Task Tracker" />
            <Tasks tasks={tasks} />
        </div>
    );
}

export default App;

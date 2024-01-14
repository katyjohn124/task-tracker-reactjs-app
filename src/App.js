import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
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

    //addtask
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
        console.log(task)
    }

    //delete event
    const deleteTask = (id) => {
        setTasks(tasks.filter(
            (task) => task.id != id
        ))
        console.log('delete', id)
    }
    //reminder event
    const Reminder = (id) => {
        console.log('Double clicked', id);
        setTasks(
            tasks.map(
                (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
            ))
        console.log('reminder', id)
    }

    return (
        <div className="containner">
            <Header
                title="Hello Task Tracker"
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}

            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onReminder={Reminder} /> : 'No task here!'}
        </div>
    );
}

export default App;

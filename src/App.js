import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

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
        <Router>
            <div className="containner">
                <Header
                    title="Hello Task Tracker"
                    onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}

                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {showAddTask && <AddTask onAdd={addTask} />}
                                {tasks.length > 0 ? (<Tasks tasks={tasks}
                                    onDelete={deleteTask} onReminder={Reminder}
                                />) : ('No task here!')}
                            </>
                        }
                    />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </div>

        </Router>
    );
}

export default App;

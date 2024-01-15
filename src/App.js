import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    //useEffect
    useEffect(() => {
        const getDatas = async () => {
            const result = await fetchData()
            setTasks(result)
        }
        getDatas()
    }, [])

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const getdata = await res.json()
        //return data
        return getdata
    }

    //fetch task

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        return data;
    };


    //addtask
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        console.log(task)

        const data = await res.json()
        setTasks([...tasks, data])


        // const id = Math.floor(Math.random() * 1000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }

    //delete event
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        res.status === 200 ?
            setTasks(tasks.filter(
                (task) => task.id !== id
            ))
            : alert('Error deleting this task')

        console.log('delete', id)
    }


    //reminder event
    const Reminder = async (id) => {
        try {
            const taskDetails = await fetchTask(id);
            const updatedTask = { ...taskDetails, reminder: !taskDetails.reminder };
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });

            if (!res.ok) {
                throw new Error('Failed to update the task');
            }

            const data = await res.json();
            setTasks(
                tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
            );
        } catch (error) {
            console.error('Error updating reminder:', error);
        }
    };


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

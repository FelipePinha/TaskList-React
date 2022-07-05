import { Task } from '../components/Task'
import { useState } from 'react'
import './home.css'

export function Home() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    function clearInput() {
        const input = document.querySelector('#inputTitle')
        input.value = ''
    }

    function handleAddTask() {
        const newTask = [...taskList, {
            task: task,
            id: Math.random(10)
        }]


        setTaskList(newTask)
        clearInput()
    }

    function handleDeleteTask(taskId) {
        const newTaskList = taskList.filter(task => task.id !== taskId)

        setTaskList(newTaskList)
    }

    return(
        <>
            <div className="container">
                <h1>Task List</h1>
                <header>
                    <input type="text" id='inputTitle' onChange={e => {
                        setTask(e.target.value)
                        }}/>
                    <button onClick={handleAddTask}>Adicionar</button>
                </header>

                <div className='tasks'>
                    {
                        taskList.map(task => (
                            <Task task={task.task} key={task.id} id={task.id} deleteTask={handleDeleteTask}/>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
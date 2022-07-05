import './task.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

export function Task({task, id, deleteTask}) {
    return(
        <div className="task-container">
            <strong>{task}</strong>
            <input id={id} type="checkbox"/>
            <div id='check'></div>
            
            <div className='icons'>
                <label htmlFor={id}>
                    <FontAwesomeIcon id='done' icon={faCheck}/>
                </label>
                <FontAwesomeIcon id='delete' icon={faTrash} onClick={() => deleteTask(id)}/>
            </div>
        </div>
    )
}
import React,{useContext, Fragment} from 'react'
import TaskContext from '../../context/task/taskContext';
import TaskItem from './TaskItem'

const Tasks = () => {
    const taskContext = useContext(TaskContext)
    const {tasks} = taskContext
    return (
        <Fragment>
            {tasks.map(task => <TaskItem task={task} id={task.id}/>)}
        </Fragment>
    )
}

export default Tasks

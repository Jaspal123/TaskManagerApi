import React,{useContext, Fragment} from 'react'
import TaskContext from '../../context/task/taskContext';
import TaskItem from './TaskItem'

const Tasks = () => {
    const taskContext = useContext(TaskContext)
    const {tasks,filtered} = taskContext
    if(tasks.length === 0){
        return<h4>Please add a Task</h4>
    }
    return (
        <Fragment>
            {filtered !== null ? filtered.map(task => <TaskItem task={task} key={task.id}/>): tasks.map(task => <TaskItem task={task} key={task.id}/>)}
        </Fragment>
    )
}

export default Tasks

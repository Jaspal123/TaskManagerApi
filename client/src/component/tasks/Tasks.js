import React,{useContext, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
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
        <TransitionGroup>
        {filtered !== null ? filtered.map(task => (
            <CSSTransition key={task.id} timeout={500} classNames="item">
            <TaskItem task={task} key={task.id}/>
            </CSSTransition>
        )): 
            tasks.map(task => (
                <CSSTransition key={task.id} timeout={500} classNames="item">
            <TaskItem task={task} key={task.id}/>
            </CSSTransition>
            ))
        }
        </TransitionGroup>
           
        </Fragment>
    )
}

export default Tasks

import React,{useContext, useState} from 'react'
import TaskContext from '../../context/task/taskContext'

const TaskForm = () => {
    const taskContext = useContext(TaskContext)
    const {addTask} = taskContext

    const [task, setTask] = useState({
        title:"",
        deadline: "",
        "status" : "incomplete"
    });
    const {title,status,deadline} = task;

    const onChange = e => setTask({...task, [e.target.name] : e.target.value})
    
    const onSubmit = e => {
        e.preventDefault();
        addTask(task)
        setTask({title: "", deadline:"", status:"incomplete"})
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Task</h2>
            <input type="text" placeholder="Title" name="title" value={title} onChange={onChange}/>
            <input type="text" placeholder="Task Deadline" name="deadline" value={deadline} onChange={onChange}/>
            <h5>Task Status</h5>
            <input type="radio" name="status" value="incomplete" checked={status === 'incomplete'} onChange={onChange} />Incomplete{" "}
            <input type="radio" name="status" value="completed" checked={status === 'completed'} onChange={onChange} />Completed{" "}
            <div>
            <input type="submit" value="Add Task" className = "btn btn-primary btn-block" />
            </div>
            </form>
    )
}

export default TaskForm

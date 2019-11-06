import React,{useContext, useState, useEffect} from 'react'
import TaskContext from '../../context/task/taskContext'

const TaskForm = () => {
    const taskContext = useContext(TaskContext)
    const {addTask,clearCurrent,current, updateTask} = taskContext
    useEffect(()=>{
        if(current !== null){
            setTask(current)
        }else{
            setTask({
                title:"",
                deadline:"",
                "status": 'incomplete'
            })
        }
    },[taskContext,current])
  

    const [task, setTask] = useState({
        title:"",
        deadline: "",
        "status" : "incomplete"
    });
    const {title,status,deadline} = task;

    const onChange = e => setTask({...task, [e.target.name] : e.target.value})
    
    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addTask(task)
        }else{
            updateTask(task)
        }
        clearAll()
    }

    const clearAll = () =>{
        clearCurrent()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? "Edit Task": "Add Task"}</h2>
            <input type="text" placeholder="Title" name="title" value={title} onChange={onChange}/>
            <input type="text" placeholder="Task Deadline" name="deadline" value={deadline} onChange={onChange}/>
            <h5>Task Status</h5>
            <input type="radio" name="status" value="incomplete" checked={status === 'incomplete'} onChange={onChange} />Incomplete{" "}
            <input type="radio" name="status" value="completed" checked={status === 'completed'} onChange={onChange} />Completed{" "}
            <div>
            <input type="submit" value={current ? "Update Task": "Add Task"} className = "btn btn-primary btn-block" />
            </div>
        {current &&(
                <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>
            )}
            </form>
    )
}

export default TaskForm

import React,{useContext} from 'react'
import TaskContext from '../../context/task/taskContext';

const TaskItem = ({task}) => {
  const taskContext = useContext(TaskContext)

  const {deleteTask} = taskContext

  const {id,title,deadline,status} = task;

  const onDelete = () => {
    deleteTask(id)
  }

    return (
        <div className="card bf-light">
            <h3 className="text-primary text-left">{title}{" "}</h3>
            <ul className="list">
                {deadline &&(
                    <li>
                    <i className="fas fa-clock" /> {deadline}
                    </li>
                )}
                {status && (
                    <li>
                    <h3 className="text-primary text-left">
                    <span
                      className={
                        "badge " +
                        (status === "completed" ? "badge-success" : "badge-primary")
                      }
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </h3>
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

export default TaskItem

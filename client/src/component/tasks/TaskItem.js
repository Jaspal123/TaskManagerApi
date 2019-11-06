import React from 'react'
import { type } from 'os';

const TaskItem = ({task}) => {
    const {id, title,deadline,status} = task;
    return (
        <div className="card bf-light">
            <h3 className="text-primary text-left">{title}{" "}</h3>
            <ul className="list">
                {deadline &&(
                    <li>
                    <i class="fas fa-clock" /> {deadline}
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
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

export default TaskItem

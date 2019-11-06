import React,{useReducer} from 'react';
import uuid from 'uuid';
import TaskContext from './taskContext'
import taskReducer from './taskReducer'
import {
    ADD_TASK,
    DELETE_TASK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TASK,
    FILTER_TASK,
    CLEAR_FILTER
} from "../types"

const TaskState = props => {
    const initialState = {
        tasks:[
            {
                id: 1,
                title: "Go TO GYM",
                status: "incomplete"
            },
            {
                id: 2,
                title: "Making youtube videos",
                status: "completed",
                deadline: "07-NOVEMBER-2019"
            },
            {
                id: 3,
                title : "Dinner Tonight with Jordan",
                status: "completed",
                deadline: "06-NOVEMBER-2019"
            }
        ]
    }
    
    const [state, dispatch] = useReducer(taskReducer, initialState);

    // Add Task
    const addTask = task => {
        task.id = uuid.v4();
        dispatch({type: ADD_TASK, payload: task})
    }
    // Delete Task
    const deleteTask = (id) => {
        dispatch({type: DELETE_TASK, payload: id})
    }

    // Set Current Task

    // Clear Current Task

    // Update Task

    // Filter Task

    // Clear Task

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            addTask,
            deleteTask
        }}>{props.children}</TaskContext.Provider>
    )
}

export default TaskState
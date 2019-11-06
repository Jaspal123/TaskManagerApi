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
        ],
        current: null,
        filtered: null
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
    const setCurrent = task => {
        dispatch({type: SET_CURRENT, payload: task});
    }

    // Clear Current Task
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }

    // Update Task
    const updateTask = task =>{
        dispatch({type: UPDATE_TASK,payload:task})
    }
    // Filter Task
    const filterTasks = text =>{
        dispatch({type: FILTER_TASK, payload: text})
    }
    // Clear Task
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }
    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            current: state.current,
            filtered: state.filtered,
            addTask,
            deleteTask,
            setCurrent,
            clearCurrent,
            updateTask,
            filterTasks,
            clearFilter
        }}>{props.children}</TaskContext.Provider>
    )
}

export default TaskState
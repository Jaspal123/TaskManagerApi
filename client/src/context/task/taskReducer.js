import {
    ADD_TASK,
    DELETE_TASK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TASK,
    FILTER_TASK,
    CLEAR_FILTER
} from "../types"

export default (state,action) => {
    switch (action.type) {
        case ADD_TASK:
         return {
             ...state,
             tasks: [...state.tasks, action.payload]
         }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(
                    task => task.id !== action.payload
                )
            }    
        case SET_CURRENT:{
            return{
                ...state,
                current: action.payload
            }
        }
        case CLEAR_CURRENT:{
            return{
                ...state,
                current: null
            }
        }
        case UPDATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id? action.payload: task)
            }
        case FILTER_TASK:
            return{
                ...state,
                filtered: state.tasks.filter(task => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return task.title.match(regex) || task.status.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }            
        default:
            return state;
    }
}
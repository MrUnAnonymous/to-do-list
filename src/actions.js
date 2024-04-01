import { ADD_TODO, DELETE_TODO } from "./constants/actionTypes";

let nextToDoId = 0; 

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: nextToDoId++,
        text,      
    },
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
  });

  export const toggleCompleted = (id) => ({
    type: 'TOGGLE_COMPLETED',
    payload: id,
  });
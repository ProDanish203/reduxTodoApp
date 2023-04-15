import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({

    name: "Todos",
    initialState,
    reducers: {
        //Adding Todos
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        //Removing Todos
        removeTodos: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        //Updating Todos
        updateTodos: (state, action) => {
            return state.map(todo => {

                if(todo.id == action.payload.id){
                    return{
                        ...todo,
                        item: action.payload.item,
                    }
                }
                return todo;
            })
        },
        //Completing Todos
        completeTodos: (state, action) => {

            return state.map((todo) => {
                
                if(todo.id == action.payload.id){
                    return{
                        ...todo,
                        completed: true,
                    }
                }
                return todo;
            })

        }


    }

})

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
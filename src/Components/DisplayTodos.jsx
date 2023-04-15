import React, { useState } from 'react'
import { connect } from 'react-redux'
import { completeTodos, removeTodos, updateTodos } from '../Redux/Reducer'
import { TodoItem } from './TodoItem'
import { AnimatePresence, motion } from 'framer-motion'

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
}

const DisplayTodos = (props) => {

    const [sort, setSort] = useState("active");

  return (
    <>
    
    <div className="displayTodos">
        <div className="buttons">
            <button className="btn" onClick={() => setSort("active")}>Active</button>
            <button className="btn" onClick={() => setSort("completed")}>Completed</button>
            <button className="btn" onClick={() => setSort("all")}>All</button>
        </div>



        <div className="todos">
        <AnimatePresence>

            {props.todos.length > 0 && sort === "active" ?
                
                props.todos.map(item => {
                    return (
                        item.completed === false && 
                        <TodoItem
                        key = {item.id}
                        todo={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                    )
                }) 
                : null
            }

            {/* For Completed Todos */}
            {props.todos.length > 0 && sort === "completed" ?
                
                props.todos.map(item => {
                    return (
                        item.completed === true && 
                        <TodoItem
                        key = {item.id}
                        todo={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                    )
                }) 
                : null
            }

            {/* For All Todos */}
            {props.todos.length > 0 && sort === "all" ?
                
                props.todos.map(item => {
                    return (

                    <TodoItem
                    key = {item.id}
                    todo={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                    />
                    
                    )
                }) 
                : null
            }

        </AnimatePresence>
        </div>


    </div>

    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);


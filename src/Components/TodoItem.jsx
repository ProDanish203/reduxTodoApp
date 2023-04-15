import React, { useRef } from 'react'
import { motion } from 'framer-motion';

export const TodoItem = (props) => {

    const { todo, removeTodo, updateTodo, completeTodo} = props

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const update = (id, value, e) => {

        if(e.which === 13){
            updateTodo({ id: id, item: value });
            inputRef.current.disabled = true;
        }
    }

  return (
    <>

    <motion.div 
    initial={{ 
        x: "150vw",
        transition: {  duration: 0.7}
    }}
    animate={{ 
        x: 0,
        transition: { duration: 0.7}
    }}
    whileHover={{ 
        scale: 0.95, 
        transition: { type: "spring", duration: 0.01}
    }}
    exit={{
        x: "-60vw",
        scale: [1, 0],
    }}
    className="todo" key={todo.id}>

        <textarea className="todo-title"
        ref={inputRef} 
        disabled={inputRef} 
        defaultValue={todo.item} 
        onKeyPress={(e) => update(todo.id, inputRef.current.value, e)}
        />

        <div className="todo-btns">
            <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9}} className='btn edit-btn' title='edit' onClick={() => changeFocus()}><i className='fas fa-pen'></i></motion.button>
            
            {
                !todo.completed && <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9}} className='btn done-btn' title='complete' onClick={() => completeTodo(todo.id)}><i className='fas fa-check-double'></i></motion.button>      
            }
            <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9}} className='btn del-btn' title='delete' onClick={() => removeTodo(todo.id)}><i className='fas fa-trash'></i> </motion.button>
        </div>
        {todo.completed && <span className='completed'>Done <i className='fas fa-check-double'></i> </span>}
    </motion.div>
    
    </>
  )
}

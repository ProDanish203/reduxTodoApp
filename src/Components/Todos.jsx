import React, { useState } from 'react'
import { addTodos } from '../Redux/Reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj))
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setTodo(""); 
    } 

    const add = () => {

        if(todo.length > 0){
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            })
        }else{
            alert("Input Field Cannot Be Empty!!!")
        }

        
    } 

  return (
    <>
    <div className="addTodos">
        <form onSubmit={handleChange}>

        <input type="text" className='input-field' placeholder='Add Todo...' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button className="btn add-btn" 
        onClick={() => add()}
        >Add</button>
        </form>

    </div>

    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
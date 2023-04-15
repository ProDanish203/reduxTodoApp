import './App.css';
import DisplayTodos from './Components/DisplayTodos';
import Todos from './Components/Todos';
import { motion } from 'framer-motion';


function App() {
  return (
    <>
    <div className="wrapper">

      <motion.h1
      initial={{ y: -200 }}
      animate={{ y: 0 }} 
      transition={{ typr: "spring", duration: 0.6 }}
      whileHover={{ scale: 1.2 }} className='heading'>Todo App</motion.h1>

      <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }} 
      transition={{ type: "spring", duration: 0.5 }}
      >

      <Todos/>
      <DisplayTodos/>

      </motion.div>
      
    </div>
    </>
  );
}

export default App;

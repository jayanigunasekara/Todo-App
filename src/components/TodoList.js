import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Expo from './Expo';


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return ;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        
    };

    const updateTodos = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }

        setTodos(prev => prev.map(item => (item.id === todoId? newValue: item)));

    };

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);

    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete =! todo.isComplete
            }
            return todo; 

        });
        setTodos(updateTodos);
    };





  return (
    <div>
        <h1>What's you plan  for Today ? </h1>
        <Expo/>
        <TodoForm onSubmit = {addTodo}/>
        <Todo todos = {todos} completeTodo = {completeTodo}  removeTodo = {removeTodo} updateTodos = {updateTodos}/> 

      
    </div>
  ) 
}

export default TodoList

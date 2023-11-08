import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';


function TodoForm () {
    const {
        addTodo,
        setOpenModal, 
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        };
  
    const onCancel = () => {
        setOpenModal(false);
        };

    const onChange = (event) => {
        setNewTodoValue (event.target.value);
        };


    return(
        <form onSubmit={onSubmit} >
            <label> Excribe tu nuevo TODO </label>
            <textarea
                placeholder = " Cortar cebolla para el almuerzo "
                value={newTodoValue}
                onChange={onChange}
                />

                <div className='TodoForm-buttonContainer' >
                
                <button 
                type='button'
                className='TodoForm-button TodoForm-buton--cancel'
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button 
                type='submit'
                className='TodoForm-button TodoForm-button--ad'>
                Añadir 
                </button>
                </div>


        </form>
    )
}

export { TodoForm }
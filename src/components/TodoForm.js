import { useState } from 'react';
import './../styles/todoForm.css'
function TodoForm ( { addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = (e) => {
        setOpenModal(false);
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick = {onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type= "submit"
                >
                    Añadir
                </button>
      </div>
    </form>
    )
}

export {TodoForm}
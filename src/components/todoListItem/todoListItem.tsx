import React, { FC } from "react";
import { Todo } from '../types/types';
import './todoListItem.css';
import { Link } from "react-router-dom"


interface TodoListItemProps {
    todo: Todo;
    onRemove: (id: number) => void;
    changeTodo: (id: number) => void;
    changeDoing: (id: number) => void;
    changeDone: (id: number) => void;
    sendId: (id: number) => void;
    setShowModal: () => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, onRemove, changeTodo, changeDoing, changeDone, sendId, setShowModal }) => {

    const removeTodo = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    const ChangeTodoStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeTodo(id)
    }
    const ChangeDoingStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeDoing(id)
    }
    const ChangeDoneStatus = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault()
        changeDone(id)
    }

    const ChangeDate = (event: React.MouseEvent<HTMLSpanElement>, id: number) => {
        event.preventDefault();
        setShowModal();
        sendId(id);
    }


    return (
        <div className='wrapperGlobal'>
            <Link to={'/' + todo.id}>
                <div className="todoListItem">
                    <span> {todo.name}</span>
                    <div className="wrapper">
                        <span
                            className='spanStyle'
                            style={{ background: todo.todo ? 'red' : 'white' }}
                            onClick={event => ChangeTodoStatus(event, todo.id)}
                        >Todo</span>
                        <span
                            className='spanStyle'
                            style={{ background: todo.doing ? '#00AF64' : 'white' }}
                            onClick={event => ChangeDoingStatus(event, todo.id)}
                        >Doing</span>
                        <span
                            className='spanStyle'
                            style={{ background: todo.done ? '#66A3D2' : 'white' }}
                            onClick={event => ChangeDoneStatus(event, todo.id)}
                        >Done</span>
                        {
                            todo.deadLineData ? <span className='deadLine'
                                onClick={event => ChangeDate(event, todo.id)}>{todo.deadLineData}</span> : null
                        }
                        {
                            todo.deadLineTime ? <span className='deadLine'
                                onClick={event => ChangeDate(event, todo.id)}>{todo.deadLineTime}</span> : null
                        }
                        <span style={{ cursor: "pointer" }}
                            onClick={event => removeTodo(event, todo.id)}> &times;</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TodoListItem;

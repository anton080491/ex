import React, { FC } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './addTodo.css';

interface AddTodoProps {
    addNewTodo(title: string, deadLineData: string, deadLineTime: string, description: string): void
}

const AddTodo: FC<AddTodoProps> = ({ addNewTodo }) => {

    const history = useHistory();

    const [newTodo, setNewTodo] = useState<string>('');
    const [deadLineData, setDeadLineData] = useState<string>('')
    const [deadLineTime, setDeadLineTime] = useState<string>('')
    const [description, setdescription] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const сreateNewTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if ((newTodo !== '' || null) && (newTodo.length <= 50)) {
            addNewTodo(newTodo, deadLineData, deadLineTime, description);
            setNewTodo('');
            setDeadLineData('');
            setDeadLineTime('');
            setdescription('');
            history.push('/')
        } else {
            alert('You must fill in the field "To do". Remember - no more than 50 characters! Date, Time and description are optional');
        }
    }

    const DeadLineData = (e: any) => {
        setDeadLineData(e.target.value)
    }

    const DeadLineTime = (e: any) => {
        setDeadLineTime(e.target.value)
    }

    const Description = (e: any) => {
        setdescription(e.target.value)
    }

    return (
        <React.Fragment>
            <div className='div'>
                <div>
                    <div><label htmlFor="newTodo">
                        To do:&nbsp;
                        <input
                            type="text"
                            name="newTodo"
                            id="newTodo"
                            placeholder="Fix the thing.."
                            className='input'
                            value={newTodo}
                            onChange={changeHandler}
                        />
                    </label>


                        <label htmlFor="setDeadlineData">
                            Dead Line Data:&nbsp;
                            <input
                                type="date"
                                name="setDeadlineData"
                                id="setDeadlineData"
                                placeholder="Enter deadline .."
                                className='input'
                                value={deadLineData}
                                onChange={DeadLineData}
                            />
                        </label>

                        <label htmlFor="setDeadlineTime">
                            Dead Line Time:&nbsp;
                            <input
                                type="time"
                                name="setDeadlineTime"
                                id="setDeadlineTime"
                                placeholder="Enter deadline .."
                                className='input'
                                value={deadLineTime}
                                onChange={DeadLineTime}
                            />
                        </label>
                    </div>
                    <div><label htmlFor="description">
                        Description of task:&nbsp;
                        <input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Enter description .."
                            className='inputDesc'
                            value={description}
                            onChange={Description}
                        />
                    </label></div>
                </div>
                <div> <button className="button"
                    onClick={сreateNewTodo}
                >
                    Add
                </button></div>
            </div>
        </React.Fragment>
    )
}

export default AddTodo;



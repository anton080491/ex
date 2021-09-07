import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './appHeader.css';


interface AppHeaderProps {
    allTasks: number;
    Todo: number;
    Doing: number;
    Done: number;
}

const AppHeader: FC<AppHeaderProps> = ({ allTasks, Todo, Done, Doing }) => {
    return (
        <React.Fragment>
            <div className="AppHeader">
                <Link to={'/'}> <h2>Task list</h2></Link>
                <div className="tasks">
                    <span>All tasks: {allTasks}</span>
                    <span>Todo: {Todo}</span>
                    <span>Doing: {Doing}</span>
                    <span>Done: {Done}</span>
                </div>
            </div>
        </React.Fragment>

    )

}

export default AppHeader;
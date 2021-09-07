import React, { FC } from 'react';
import { useState } from 'react';
import './modal.css';

interface ModalProps {
    showModal: boolean;
    setShowModal: () => void;
    sendDateAndTime: (changeDateId: string, changeTimeId: string) => void;
    setNewTimeAndDate: () => void;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal, sendDateAndTime, setNewTimeAndDate }) => {

    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const changeDate = (event: React.MouseEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const changeTime = (event: React.MouseEvent<HTMLInputElement>) => {
        setTime(event.target.value)
    }

    const changeData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (date !== '' || time !== '') {
            sendDateAndTime(date, time);
            setDate('');
            setTime('');
            setShowModal();
            setNewTimeAndDate();
        } else {
            setShowModal();
        }
    }

    return (
        <React.Fragment>
            <div className={showModal ? "showModal active" : "showModal"}>
                <div className="modal__content"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="modal__inputs">
                        <label htmlFor="setDeadlineData">
                            Dead Line Data:&nbsp;
                            <input
                                type="date"
                                name="setDeadlineData"
                                id="setDeadlineData"
                                placeholder="Enter deadline .."
                                className='modal__input'
                                onChange={changeDate}
                                value={date}
                            />
                        </label>

                        <label htmlFor="setDeadlineTime">
                            Dead Line Time:&nbsp;
                            <input
                                type="time"
                                name="setDeadlineTime"
                                id="setDeadlineTime"
                                placeholder="Enter deadline .."
                                className='modal__input'
                                onChange={changeTime}
                                value={time}
                            />
                        </label>
                    </div>
                    <div className="modal__btns">
                        <button onClick={changeData}>Save changes</button>
                        <button onClick={setShowModal}>Back</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}


export default Modal;

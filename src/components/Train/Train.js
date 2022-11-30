import React from 'react';
import css from './Train.module.css'

const Train = ({train, deleteTrain,setTrainForUpdate}) => {
    const {name, departure, arrival, _id, number} = train;
    return (
        <div className={css.Train}>
            <div className={css.container}>
                <div> {number}</div>
                <div> name:  {name}</div>
                <div> departure -{departure}</div>
                <div> arrival -{arrival}</div>
            </div>
            <div className={css.tools}>
                <button onClick={() => setTrainForUpdate(train)}>Edit</button>
                <button onClick={() => deleteTrain(_id)}>Delete</button>
            </div>

        </div>
    );
};

export default Train;
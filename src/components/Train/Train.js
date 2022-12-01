import React from 'react';
import css from './Train.module.css'

const Train = ({train, deleteTrain,setTrainForUpdate}) => {
    const {name, departure, arrival, _id, number} = train;
    return (
        <div className={css.Train}>
            <div className={css.container}>
                <h2> {number}  -  {name}  -  {departure}  -  {arrival}</h2>
                {/*<h2> {name}</h2>*/}
                {/*<h2> {departure}</h2>*/}
                {/*<h2> {arrival}</h2>*/}
            </div>
            <div className={css.tools}>
                <button onClick={() => setTrainForUpdate(train)}>Edit</button>
                <button onClick={() => deleteTrain(_id)}>Delete</button>
            </div>

        </div>
    );
};

export default Train;
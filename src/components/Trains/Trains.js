import {useEffect, useState} from "react";
import {trainService} from "../../services";
import Train from "../Train/Train";
import TrainForm from "../TrainForm/TrainForm";
import css from './Trains.module.css'


const Trains = () => {

    const [trains, setTrains] = useState([]);
    const [trainForUpdate, setTrainForUpdate] = useState(null)
    // const [filter, setFilter] = useState('');

    useEffect(() => {
        trainService.getAll().then(({data}) => setTrains(data));

    }, [])

    const addTrain = (train) => {
        setTrains([...trains, train])
    }

    const deleteTrain = async (id) => {
        await trainService.deleteById(id);
        const res = [...trains]
        const index = res.findIndex(value => value.id === id);
        if (index !== -1) {
            res.splice(index, 1);
            setTrains(res)
        }
    }

    const updateTrain = (train) => {
        const res = [...trains];
        const find = res.find(value => value._id === trainForUpdate._id);
        Object.assign(find, train)
        setTrains(res)
        setTrainForUpdate(null)

    }

    // useEffect(() => {
    //     trainService.filterByName(filter).then((filteredTrains) => setTrains(filteredTrains))
    // }, [filter]);

    return (
        <div >
           <div className={css.form}> <TrainForm addTrain={addTrain} trainForUpdate={trainForUpdate} updateTrain={updateTrain} /> </div>

            {/*<input value={filter} onChange={(event) => setFilter(event.target.value)} />*/}
            <div className={css.info}>
            <h4> NUMBER - ROUTE - DEPARTURE - ARRIVAL</h4>
            </div>
            <hr/>
            {trains.map(train => <Train key={train._id} train={train} deleteTrain={deleteTrain}
                                        setTrainForUpdate={setTrainForUpdate}/>)}
        </div>
    );
};

export default Trains;
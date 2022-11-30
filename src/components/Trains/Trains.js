import {useEffect, useState} from "react";
import {trainService} from "../../services";
import Train from "../Train/Train";
import TrainForm from "../TrainForm/TrainForm";


const Trains = () => {

    const [trains, setTrains] = useState([]);
    const [trainForUpdate, setTrainForUpdate] = useState(null)

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

    const updateTrain =(train) => {
        const res = [...trains];
        const find = res.find(value => value.id === trainForUpdate.id);
        Object.assign(find,train)
        setTrains(res)
        setTrainForUpdate(null)

    }


    return (
        <div>
            <TrainForm addTrain={addTrain} trainForUpdate={trainForUpdate} updateTrain={updateTrain}/>
            <hr/>
            {trains.map(train => <Train key={train._id} train={train} deleteTrain={deleteTrain}
                                        setTrainForUpdate={setTrainForUpdate}/>)}
        </div>
    );
};

export default Trains;
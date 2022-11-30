import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {trainService} from "../../services";

const TrainForm = ({addTrain, trainForUpdate,updateTrain}) => {
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        if (trainForUpdate) {
            setValue('number', trainForUpdate.number)
            setValue('name', trainForUpdate.name)
            setValue('departure', trainForUpdate.departure)
            setValue('arrival', trainForUpdate.arrival)
        }
    }, [trainForUpdate]);

    const submit = async (newTrain) => {
        if (!trainForUpdate){
        const {data} = await trainService.create(newTrain);
        addTrain(data)
        } else {
            const {data} = await trainService.updateById(trainForUpdate._id, newTrain);
            updateTrain(data);
        }
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="number" placeholder={'number'} {...register('number', {})}/>
                <input type="text" placeholder={'name'} {...register('name', {})}/>
                <input type="string" placeholder={'departure'} {...register('departure', {})}/>
                <input type="string" placeholder={'arrival'} {...register('arrival', {})}/>
                <button>{trainForUpdate ? 'Edit' : 'Save'}</button>
            </form>
        </div>
    );
};

export default TrainForm;
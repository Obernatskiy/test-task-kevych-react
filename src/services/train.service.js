import {axiosService} from "./axios.service";
import { urls} from "../constants";

export const trainService = {

    getAll: () => axiosService.get(urls.trains),
        filterByName: (filter) => axiosService.get(urls.trainsFilter, {
    params: {
        filter,
    }
}),
    create: (train) => axiosService.post(urls.trains, train),
    updateById: (id, train) => axiosService.put(`${urls.trains}/${id}`, train),
    deleteById: (id) => axiosService.delete(`${urls.trains}/${id}`)
};


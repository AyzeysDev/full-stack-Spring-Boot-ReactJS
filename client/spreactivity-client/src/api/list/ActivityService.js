import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ActivityService {

  retrieveAllActivity(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/list`);
    }

    retrieveActivity(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/list/${id}`);
    }

    deleteActivity(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/list/${id}`);
    }

    updateActivity(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/list/${id}`, todo);
    }

    createActivity(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/list/`, todo);
    }

}

export default new ActivityService()
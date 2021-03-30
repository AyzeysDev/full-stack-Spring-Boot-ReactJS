import axios from 'axios'
import { API_URL } from '../../Constants'

class ActivityService {

  retrieveAllActivity(name) {
        return axios.get(`${API_URL}/users/${name}/list`);
    }

    retrieveActivity(name, id) {
        return axios.get(`${API_URL}/users/${name}/list/${id}`);
    }

    deleteActivity(name, id) {
        return axios.delete(`${API_URL}/users/${name}/list/${id}`);
    }

    updateActivity(name, id, activity) {
        return axios.put(`${API_URL}/users/${name}/list/${id}`, activity);
    }

    createActivity(name, activity) {
        return axios.post(`${API_URL}/users/${name}/list`, activity);
    }

}

export default new ActivityService()
import axios from 'axios';

const domainCallUrl = 'http://localhost:5000';

export default (url, params) => {
    return axios.get(`${domainCallUrl}${url}`, params);
};
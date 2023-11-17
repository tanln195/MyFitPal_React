import axios from 'axios';

let API_URL = "https://localhost:7127/api";

async function callApi(endpoint, method = 'GET', body) {
    try {
        const response = await axios({
            method,
            url: `${API_URL}/${endpoint}`,
            data: body,
        });
        return response.data;
    } catch (error) {
        console.log('API request error:', error);
        throw error;
    }
}

export default callApi;
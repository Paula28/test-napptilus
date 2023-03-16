import axios from 'axios';

const baseUrl = 'https://itx-frontend-test.onrender.com/api';

export const getListMobileDevices = () => {
    return axios.get(`${baseUrl}/product`);
}

export const getDetailMobileDevice= (id) => {
    return axios.get(`${baseUrl}/product/${id}`);
}

export const setMobileInTheCart= (id, colorCode, storageCode) => {
    return axios.post(`${baseUrl}/cart/`, {id, colorCode, storageCode});
}
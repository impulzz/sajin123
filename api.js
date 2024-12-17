import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getMenus = () => axios.get(`${API_URL}/menus`);
export const getItemsByMenu = (menuId) => axios.get(`${API_URL}/items/${menuId}`);

import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const tasksApi= axios.create({
    baseURL:apiUrl
});

export const getAllTasks = () => tasksApi.get('/');

export const getTask = (id) => tasksApi.get(`/${id}/`);

export const createTask = (task) => tasksApi.post('/',task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`,task);

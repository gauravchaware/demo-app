import api from "./api";

// get all users
export const getUsers = (queryString) => api.get(queryString ? `/Users?${queryString}` : `/Users`);

// get user by id
export const getUserById = (id) => api.get(`/Users/${id}`);

// add new user
export const postUser = (data) => api.post(`/Users`, data);

// update user
export const putUser = (id, data) => api.put(`/Users/${id}`, data);

// delete user
export const deleteUser = (id) => api.delete(`/Users/${id}`);

import http from "../http-common";

class DataService {
    //users
    getAllUsers(address) {
        return http.get(address ? address : '/users');
    }

    getUser(id) {
        return http.get(`/users/${id}`);
    }

    createUser(data) {
        return http.post('/users', data);
    }

    updateUser(data) {
        return http.put('/users', data);
    }

    deleteUser(id) {
        return http.delete(`/users/${id}`);
    }

    findUser(title) {
        return http.get(`/users?title=${title}`);
    }

    //posts
    getAllPosts(address) {
        return http.get(address ? address : '/posts');
    }

    getPost(id) {
        return http.get(`/posts/${id}`);
    }

    createPost(data) {
        return http.post('/posts', data);
    }

    updatePost(data) {
        // return http.put(`/posts/${id}`, data);
        return http.put('/posts', data);
    }

    deletePost(id) {
        return http.delete(`/posts/${id}`);
    }

    findPost(title) {
        return http.get(`/posts?title=${title}`);
    }

    //tasks
    getAllTasks(address) {
        return http.get(address ? address : '/tasks');
    }

    getTask(id) {
        return http.get(`/tasks/${id}`);
    }

    createTask(data) {
        return http.post('/tasks', data);
    }

    updateTask(data) {
        return http.put('/tasks', data);
    }

    deleteTask(id) {
        return http.delete(`/tasks/${id}`);
    }

    findTask(title) {
        return http.get(`/tasks?title=${title}`);
    }
}

export default new DataService();

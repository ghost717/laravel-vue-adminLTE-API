import http from "../http-common";

class DataService {
  getAllPosts(address) {
    return http.get(address ? address : '/posts');
  }

  get(id) {
    return http.get(`/posts/${id}`);
  }

  create(data) {
    return http.post('/posts', data);
  }

  update(data) {
    // return http.put(`/posts/${id}`, data);
    return http.put('/posts', data);
  }

  delete(id) {
    return http.delete(`/posts/${id}`);
  }

  deleteAll() {
    return http.delete('/posts');
  }

  findByTitle(title) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new DataService();

import http from "../http-common";

class DataService {
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
}

export default new DataService();

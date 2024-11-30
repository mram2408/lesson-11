class UsersApiManager {
  static async getUsers() {
    return RequestManager.fetchData("/users");
  }
  static async getById(id) {
    return RequestManager.fetchData(`/users/${id}`);
  }
  static async addUser(data) {
    return RequestManager.postRequest("/users", data);
  }
  static async editUser(id, data) {
    return RequestManager.postRequest(`/users/${id}`, data);
  }
  static async deleteUser(id) {
    return RequestManager.deleteRequest("/users", id);
  }
}

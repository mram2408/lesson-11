class ProductsApiManager {
  static async getProducts() {
    return RequestManager.fetchData("/products");
  }
  static async getById(id) {
    return RequestManager.fetchData(`/products/${id}`);
  }
  static async addProduct(data) {
    return RequestManager.postRequest("/products/add", data);
  }
  static async editProduct(id, data) {
    return RequestManager.postRequest(`/products/${id}`, data);
  }
  static async deleteProduct(id) {
    return RequestManager.deleteRequest("/products/delete", id);
  }
}

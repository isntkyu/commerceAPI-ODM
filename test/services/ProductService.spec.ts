import { ProductService } from "../../src/services/ProductService";


class ProductRepository {
  async loadCollection() {
    
  }
}
const productController = new ProductService(new ProductRepository());

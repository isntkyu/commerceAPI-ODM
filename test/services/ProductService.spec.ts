
import { ProductRepository } from "../../src/interfaces/repository/ProductRepository";
import { ProductService } from "../../src/services/ProductService";


class MockProductRepository implements ProductRepository {
  async loadCollection() {}
}

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(async () => {
    productService = new ProductService(new MockProductRepository);
  })

  it ('defined', () => {
    expect(productService).toBeDefined();
  })
});



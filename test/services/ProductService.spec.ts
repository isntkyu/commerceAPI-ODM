import { ProductRepository } from "../../src/repository/ProductRepository";
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



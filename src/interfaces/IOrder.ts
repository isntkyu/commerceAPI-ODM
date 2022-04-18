export interface OrderInputDTO {
  id: String,
  store: String,
  status: String,
  customer:String,
  products: String[],
  price : Number,
  device: String
}
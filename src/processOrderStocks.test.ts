import { Order } from "./models/Order";
import { OrderVariant } from "./models/OrderVariant";
import { Product } from "./models/Product";
import { processOrderStocks } from "./processOrderStocks";

describe("processOrderStocks", () => {
  const product1: Product = {
    id: "id1",
    name: "product1",
    variants: [
      { size: "20", quantity: 1, price: 50 },
      { size: "21", quantity: 2, price: 50 },
    ],
  };

  const product2: Product = {
    id: "id2",
    name: "product2",
    variants: [
      { size: "40", quantity: 4, price: 50 },
      { size: "41", quantity: 7, price: 50 },
    ],
  };

  const order: Order = {
    products: [product1, product2],
  };

  it("should return order variants array", () => {
    const orderVariants = processOrderStocks(order);

    expect(orderVariants).toEqual<OrderVariant[]>([
      { productId: "id1", size: "20", quantity: 1 },
      { productId: "id1", size: "21", quantity: 2 },
      { productId: "id2", size: "40", quantity: 4 },
      { productId: "id2", size: "41", quantity: 7 },
    ]);
  });
});

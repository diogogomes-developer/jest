import { getOrderTotalStock } from "./getOrderTotalStock";
import { Order } from "./models/Order";
import { Product } from "./models/Product";

describe("processOrderStocks", () => {
  const product1: Product = {
    id: "id1",
    name: "product1",
    variants: [
      { size: "20", quantity: 1 },
      { size: "21", quantity: 2 },
    ],
  };

  const product2: Product = {
    id: "id2",
    name: "product2",
    variants: [
      { size: "40", quantity: 4 },
      { size: "41", quantity: 7 },
    ],
  };

  const order: Order = {
    products: [product1, product2],
  };

  it("should return order variants array", () => {
    const orderTotalStock = getOrderTotalStock(order);

    expect(orderTotalStock).toBe<number>(14);
  });
});

import { Order } from "./models/Order";
import { OrderVariant } from "./models/OrderVariant";
import { Product } from "./models/Product";
import { Variant } from "./models/Variant";

export function getOrderTotalStock(order: Order): number {
  let orderTotalStock: number = 0;

  order.products.map((product: Product) => {
    product.variants.map((variant: Variant) => {
      orderTotalStock += variant.quantity;
    });
  });

  return orderTotalStock;
}

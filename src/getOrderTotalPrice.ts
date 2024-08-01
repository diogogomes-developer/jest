import { Order } from "./models/Order";
import { OrderVariant } from "./models/OrderVariant";
import { Product } from "./models/Product";
import { Variant } from "./models/Variant";

export function getOrderTotalPrice(order: Order): number {
  let orderTotalStock: number = 0;

  order.products.map((product: Product) => {
    product.variants.map((variant: Variant) => {
      orderTotalStock += variant.price * variant.quantity;
    });
  });

  return orderTotalStock;
}

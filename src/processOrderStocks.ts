import { Order } from "./models/Order";
import { OrderVariant } from "./models/OrderVariant";
import { Product } from "./models/Product";
import { Variant } from "./models/Variant";

export function processOrderStocks(order: Order): OrderVariant[] {
  const orderVariants: OrderVariant[] = [];

  order.products.map((product: Product) => {
    product.variants.map((variant: Variant) => {
      orderVariants.push({
        productId: product.id,
        size: variant.size,
        quantity: variant.quantity,
      });
    });
  });

  return orderVariants;
}

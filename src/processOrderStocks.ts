export interface Variant {
  size: string;
  quantity: number;
}

export interface OrderVariant {
  productId: string;
  size: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  variants: Variant[];
}

export interface Order {
  products: Product[];
}

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

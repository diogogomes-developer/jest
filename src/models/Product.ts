import { Variant } from "./Variant";

export interface Product {
    id: string;
    name: string;
    variants: Variant[];
  }

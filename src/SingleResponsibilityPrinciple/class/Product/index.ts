import { IProduct } from "../../interface/product";

export default class Product implements IProduct {
  constructor(public name: string, public price: number) {}
}

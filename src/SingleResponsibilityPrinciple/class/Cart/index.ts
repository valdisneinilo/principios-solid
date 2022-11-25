import { IProduct } from "../../interface/product";

export default class Cart {
  private readonly _items: IProduct[] = [];

  get items(): Readonly<IProduct[]> {
    return this._items;
  }

  add(item: IProduct) {
    this._items.push(item);
  }

  remove(index: number) {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  clearCart(): void {
    console.log("Carrinho de compras foi limpo");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

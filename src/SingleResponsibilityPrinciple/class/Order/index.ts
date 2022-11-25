import Cart from "../Cart";
import Message from "../../services/Message";
import Persistency from "../../services/Persistency";
import { TStatusOrder } from "../../interface/order";

export default class Order {
  private _statusOrder: TStatusOrder = "open";

  constructor(
    private readonly cart: Cart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get statusOrder(): TStatusOrder {
    return this._statusOrder;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._statusOrder = "closed";
    this.message.sendMessage(
      `Seu pedido com total de R$${this.cart.total()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clearCart();
    this.message.sendMessage("Obrigado pela preferência, volte sempre!");
  }
}

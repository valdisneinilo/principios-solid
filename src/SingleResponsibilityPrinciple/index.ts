import Cart from "./class/Cart";
import Message from "./services/Message";
import Order from "./class/Order";
import Persistency from "./services/Persistency";
import Product from "./class/Product";

const cart = new Cart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(cart, message, persistency);

console.log();
cart.add(new Product("T-Shirt", 49.99));
cart.add(new Product("Pants", 99.99));
cart.add(new Product("Shoes", 199.99));

console.log(cart.total());
console.log(cart.items);

order.checkout();
console.log(order.statusOrder);

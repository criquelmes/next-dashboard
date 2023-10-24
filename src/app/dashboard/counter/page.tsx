import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "Simple counter",
};

export default function NamePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}

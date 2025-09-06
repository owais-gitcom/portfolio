"use client";
import { useEffect, useState } from "react";
import styles from "./cartview.module.css";

import { useRouter } from "next/navigation"; // ✅ import router
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost/backend/get_cart.php");
      const data = await res.json();
      if (data.success) setCart(data.cart);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Remove item
  // Remove item
const handleRemove = async (id) => {
  try {
    const res = await fetch("http://localhost/backend/remove_cart.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }), // 👈 agar backend `id` expect kare
    });
    const data = await res.json();
    if (data.success) fetchCart();
  } catch (err) {
    console.error("Error removing item:", err);
  }
};


  // Update quantity
  const handleQuantityChange = async (id, qty) => {
    if (qty < 1) return;
    try {
      const res = await fetch("http://localhost/backend/update_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: id, quantity: qty }),
      });
      const data = await res.json();
      if (data.success) fetchCart();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  // Calculate subtotal
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Agar cart empty ho → Custom Empty Page
  if (cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h1 className={styles.emptyTitle}>YOUR CART IS EMPTY</h1>

        <button
          className={styles.shopBtn}
          onClick={() => (window.location.href = "/shop")}
        >
          CONTINUE SHOPPING
        </button>

        <div className={styles.accountBox}>
          <h2>HAVE AN ACCOUNT?</h2>
          <p>
            <a >Log in</a> to check out faster.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Agar cart me items hain
  return (
    <div className={styles.cartContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection1}>
        <h1 className={styles.title1}>YOUR SHOPPING CART</h1>
      </div>

      {/* Cart Items */}
      <section className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.productImage}
            />
            <div className={styles.details}>
              <h2>{item.title}</h2>
              <p className={styles.price}>
                PKR {Number(item.price).toLocaleString()}
              </p>

              <div className={styles.quantity}>
                {/* <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  −
                </button> */}
                <span>{item.quantity}</span>
                {/* <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button> */}
              </div>

              <p className={styles.total}>
                Total: PKR {(item.price * item.quantity).toLocaleString()}
              </p>

              <button
                className={styles.removeBtn}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

       {/* Checkout Section */}
<div className={styles.checkoutSection}>
  <h2>Subtotal: PKR {totalAmount.toLocaleString()}</h2>
  
  <Link href="/checkout" className={styles.checkoutBtn}>
    Proceed to Checkout
  </Link>
</div>

      </section>
    </div>
  );
}

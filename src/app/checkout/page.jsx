"use client";
import { useState } from "react";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", form);
    alert("✅ Order placed successfully!");
  };

  return (
    <div className={styles.checkoutContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Checkout</h1>
        <p>Complete your order details below</p>
      </div>

      {/* Checkout Form */}
      <form className={styles.checkoutForm} onSubmit={handleSubmit}>
        <h2>Billing Details</h2>

        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Street Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h2>Payment Method</h2>
        <div className={styles.paymentOptions}>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={form.payment === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={form.payment === "card"}
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Place Order
        </button>
      </form>
    </div>
  );
}

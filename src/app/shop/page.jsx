"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./shop.module.css";
import { PiTrolleyFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

// Categories
const categories = [
  { name: "Adventure", count: 4 },
  { name: "Exploration", count: 5 },
  { name: "FPS", count: 2 },
  { name: "Indie", count: 2 },
  { name: "Open World", count: 10 },
  { name: "Puzzle", count: 1 },
  { name: "RPG", count: 1 },
  { name: "Simulation", count: 10 },
];

// Products
const products = [
  { id: 5, name: "Game Controller", price: 3200, category: "controller", image: "/shop-7-01.jpg", hoverImage: "/shop-7-02.jpg" },
  { id: 6, name: "Gaming Mouse", price: 6000, category: "mouse", image: "/shop-8-01.jpg", hoverImage: "/shop-8-02.jpg" },
  { id: 7, name: "Gaming Desk", price: 7000, category: "desks", image: "/shop-9-01.jpg", hoverImage: "/shop-9-02.jpg" },
  { id: 8, name: "Gaming Chair", price: 3500, category: "chair", image: "/shop-10-01.jpg", hoverImage: "/shop-10-02.jpg" },
  { id: 9, name: "Gaming Keyboard", price: 1500, category: "keyboard", image: "/shop-11-01.jpg", hoverImage: "/shop-11-02.jpg" },
  { id: 10, name: "Headphone With Mic", price: 1000, category: "headphone", image: "/shop-12-01.jpg", hoverImage: "/shop-12-02.jpg" },
  { id: 11, name: "Gaming Steering Wheel", price: 900, category: "wheel", image: "/shop-13-01.jpg", hoverImage: "/shop-13-02.jpg" },
  { id: 12, name: "Game Racing Chair", price: 5500, category: "chair", image: "/shop-14.jpg", hoverImage: "/shop-14(1).jpg" },
  { id: 13, name: "Graphics Card With Fans", price: 1500, category: "gpu", image: "/shop-3-01.jpg", hoverImage: "/shop-3-02.jpg" },
  { id: 14, name: "Gaming Joystick", price: 1000, category: "controller", image: "/shop-4-01.jpg", hoverImage: "/shop-4-02.jpg" },
  { id: 15, name: "Gaming Headphone", price: 900, category: "headset", image: "/shop-5-01.jpg", hoverImage: "/shop-5-02.jpg" },
];

export default function Shop() {
  const router = useRouter();
  const [view, setView] = useState("grid");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(17000);
  const [sortBy, setSortBy] = useState("az");

  // Add to cart & redirect to cart page
  const handleAddToCart = async (product) => {
    try {
      const res = await fetch("http://localhost/backend/add_to_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: product.id,
          title: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        }),
      });

      const data = await res.json();
      if (data.success) {
        // alert("✅ Added to cart: " + product.name);
        router.push("/cart"); // redirect to cart page
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error, try again later!");
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filtering & Sorting
  let filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedCategories.includes(p.category)
    );
  }
  if (sortBy === "az") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "za") filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  else if (sortBy === "low") filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortBy === "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <>
      {/* Hero */}
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>PRODUCTS</h1>
        </div>
      </div>

      {/* Main */}
      <div className={styles.container} style={{ display: "flex", gap: "2rem" }}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>CATEGORY</h3>
          <ul className={styles.categoryList}>
            {categories.map((cat, idx) => (
              <li key={idx}>
                <input type="checkbox" id={cat.name} />
                <label htmlFor={cat.name}>{cat.name} <span>({cat.count})</span></label>
              </li>
            ))}
          </ul>

          <h3 className={styles.sidebarTitle}>PRICE</h3>
          <p className={styles.priceInfo}>The highest price is PKR 17,000.00</p>
          <div className={styles.priceBox}>
            <input type="number" placeholder="0" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
            <input type="number" placeholder="17000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
          </div>

          <h3 className={styles.sidebarTitle}>PRODUCT TYPE</h3>
          <ul className={styles.categoryList}>
            {["chair","controller","desks","gpu","headphone","headset","keyboard","mouse","wheel"].map((cat) => (
              <li key={cat}>
                <input type="checkbox" id={cat} checked={selectedCategories.includes(cat)} onChange={() => handleCategoryChange(cat)} />
                <label htmlFor={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</label>
              </li>
            ))}
          </ul>

          <img src="/promo-banner-collections_750x.png" alt="" style={{ marginTop: "2rem" }} />
        </aside>

        {/* Products */}
        <main className={styles.main} style={{ flex: 2 }}>
          {/* Top bar */}
          <div className={styles.topBar}>
            <div className={styles.viewControls}>
              <button onClick={() => setView("grid")} className={view === "grid" ? styles.activeBtn : ""}>⬛⬛</button>
              <button onClick={() => setView("list")} className={view === "list" ? styles.activeBtn : ""}>☰</button>
            </div>
            <select className={styles.sortSelect} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="az">Alphabetically, A-Z</option>
              <option value="za">Alphabetically, Z-A</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {/* Product cards */}
          <div className={view === "grid" ? styles.grid : styles.list}>
            {filteredProducts.map((product) => (
              <div className={styles.card} key={product.id}>
                <div className={styles.imageWrapper}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    onMouseEnter={(e) => { if (product.hoverImage) e.currentTarget.src = product.hoverImage; }}
                    onMouseLeave={(e) => { e.currentTarget.src = product.image; }}
                  />
                  <div className={styles.socialIcons}>
                    <button className={styles.iconButton} onClick={() => handleAddToCart(product)}><PiTrolleyFill size={20} /></button>
                    <button className={styles.iconButton} onClick={() => alert(`${product.name} added to wishlist`)}><FaHeart size={20} /></button>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.productPrice}>PKR {product.price.toLocaleString()}</p>
                  <button className={styles.button} onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

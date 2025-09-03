"use client";

import styles from "./contact.module.css";
import { useState } from "react";

import { Globe, MapPin, MessageSquare, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <>
      {/* hero section */}
      <div className={styles.heroSection1}>
        <div className={styles.overlay1}></div>
        <div className={styles.conten1t}>
          <h1 className={styles.title1}>CONTACT</h1>
          <div className={styles.breadcrumb1}>
            <a href="/" className={styles.breadcrumbLink1}>
              HOME
            </a>
            <span className={styles.separator1}></span>
            <span className={styles.active1}>CONTACT</span>
          </div>
        </div>
      </div>

      {/* contact form section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Left side */}
          <div className={styles.contactText}>


<div className={styles.contactsec1}>

<div className={styles.headingWrapper1}>
    <div className={styles.side1}>
      <span className={styles.line1}></span>
          <span className={styles.square1}></span>
    </div>
    <h2 className={styles.headingText1}>JOIN OUR COMMUNITY</h2>

    <div className={styles.side1}>
          <span className={styles.square1}></span>
      <span className={styles.line1}></span>
    </div>
  </div>


</div>
  

            <h1 className={styles.heading}>GET IN TOUCH WITH US</h1>

            {/* <p className={styles.subHeading}>DROP US A LINE</p> */}
            
            <p className={styles.description}>
              Vivamus scelerisque accumsan nulla vel faucibu itur  <br/>
              finibus non urna sit amet sus bibendu.
            </p>
          </div>

          {/* Right side - form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full max-w-2xl mx-auto block text-gray-300 border-y border-gray-700 bg-[#111411] py-4 px-6 focus:outline-none focus:border-[rgb(204,255,0)] transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              className="w-full max-w-2xl mx-auto block text-gray-300 border-y border-gray-700 bg-[#111411] py-4 px-6 focus:outline-none focus:border-[rgb(204,255,0)] transition duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              className="w-full max-w-2xl mx-auto block text-gray-300 border-y border-gray-700 bg-[#111411] py-4 px-6 focus:outline-none focus:border-[rgb(204,255,0)] transition duration-300 min-h-[150px] resize-none"
              required
            ></textarea>


            <div className={styles.button4container}>
             <button className={styles.button4}>
                  SHOP NOW
              {/* Right side elements */}
              <span className={styles.lineRight4}></span>
              <span className={styles.squareRightTop4}></span>
              <span className={styles.squareRightBottom4}></span>
            
              {/* Left side elements */}
              <span className={styles.lineLeft4}></span>
              <span className={styles.squareLeftTop4}></span>
              <span className={styles.squareLeftBottom4}></span>
            </button>
            
             </div>


          </form>
        </div>
      </section>




    <section
      className="text-white py-12 px-6"
      style={{ background: "rgb(17, 20, 16)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Box 1 */}
        <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400 transition">
          <Globe className="mx-auto mb-4 w-12 h-12 text-lime-400" />
          <h3 className=" text-lg mb-2" style={{ fontFamily: "mainfont" }}>
            NEED HELP?
          </h3>
          <p className="text-gray-400 text-sm">www.example.com</p>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400 transition">
          <MapPin className="mx-auto mb-4 w-12 h-12 text-lime-400" />
          <h3 className=" text-lg mb-2" style={{ fontFamily: "mainfont" }}>
            SPOT US
          </h3>
          <p className="text-gray-400 text-sm">
            No: 58 A, East Madison Street,<br />
            Baltimore, MD, USA 4508
          </p>
        </div>

        {/* Box 3 */}
        <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400 transition">
          <MessageSquare className="mx-auto mb-4 w-12 h-12 text-lime-400" />
          <h3 className=" text-lg mb-2" style={{ fontFamily: "mainfont" }}>
            SPEAK WITH US
          </h3>
          <p className="text-gray-400 text-sm">000 - 123 - 456789</p>
          <p className="text-gray-400 text-sm">0001 2345 6789</p>
        </div>

        {/* Box 4 */}
        <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-lime-400 transition">
          <Mail className="mx-auto mb-4 w-12 h-12 text-lime-400" />
          <h3 className=" text-lg mb-2" style={{ fontFamily: "mainfont" }}>
            CHAT WITH US
          </h3>
          <p className="text-gray-400 text-sm">owais@gmail.com</p>
          <p className="text-gray-400 text-sm">owaiskhalid@gmail.com</p>
        </div>
      </div>
    </section>





     <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001144019826!2d-76.61218968464717!3d39.29038497951065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804c6a2b70d41%3A0x8e9e6a0d1c7dba6!2sBaltimore%2C%20MD%2C%20USA!5e0!3m2!1sen!2s!4v1694444444444!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </>
  );
}

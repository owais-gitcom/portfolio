"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./homesec1.module.css"; // yaha tumhara upar wala CSS file ka naam

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false, // arrows hata diye
    pauseOnHover: true,
  };

  const slides = [
    {
      img: "/homepic.png",
      subtitle: "FLIGHT SIMULATION",
      title: (
        <>
          LEVEL UP YOUR <br />
          GAMING EXPERIENCE
        </>
      ),
    },
    {
      img: "/slider-01.jpg",
      subtitle: "FIGHTING",
      title: (
        <>
          DRIVE INTO THE GAME <br />
          EMERGE A HERO
        </>
      ),
    },
    {
      img: "/slider-02.jpg",
      subtitle: "RACING",
      title: (
        <>
          ESCAP REALITY<br />
        EMBRACE THE GAME
        </>
      ),
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.heroSection1}>
           <Image
    src={slide.img}
    alt="Hero Slide"
    fill
    priority
    className={styles.homeImage}
  />

          <main className={styles.main}>
            {/* Heading Box */}
            <div className={styles.headingWrapper}>
              <div className={styles.side}>
                <span className={styles.line}></span>
                <span className={styles.square}></span>
              </div>
              <h2 className={styles.headingText}>{slide.subtitle}</h2>
              <div className={styles.side}>
                <span className={styles.square}></span>
                <span className={styles.line}></span>
              </div>
            </div>

            <h1>{slide.title}</h1>

            {/* Buttons */}
            <div className={styles.buttonContainer}>
              <button className={styles.button1}>
                VIEW MORE
                <span className={styles.lineRight1}></span>
                <span className={styles.squareRightTop1}></span>
                <span className={styles.squareRightBottom1}></span>
                <span className={styles.lineLeft1}></span>
                <span className={styles.squareLeftTop1}></span>
                <span className={styles.squareLeftBottom1}></span>
              </button>

              <button className={styles.button2}>
                SHOP NOW
                <span className={styles.lineRight2}></span>
                <span className={styles.squareRightTop2}></span>
                <span className={styles.squareRightBottom2}></span>
                <span className={styles.lineLeft2}></span>
                <span className={styles.squareLeftTop2}></span>
                <span className={styles.squareLeftBottom2}></span>
              </button>
            </div>
          </main>
        </div>
      ))}
    </Slider>
  );
}

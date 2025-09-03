  "use client";
  import React from "react";
  import Slider from "react-slick";
  import styles from "./homesec5.module.css";

  // slick carousel CSS
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  export default function Homesec5Slider() {
    const slides = [
      {
        img: "/slider-tab-3-1.5x.png",
        tag: "CAR RACE",
        title: "ACCESS ADVENTURE",
        desc: "Aenean bibendum ipsum sit amet fringilla sodales. Maecenas faucibus quam nec mauris ultricies finibus. Vivamus mauris odio, cursus sit amet lectus a, mattis laoreet urna lobortis."
      },
      {
        img: "/slider-tab-2-1(1).5x.png",
        tag: "SIMULATION",
        title: "WAIT FOR RENOWN",
        desc: "Aenean bibendum ipsum sit amet fringilla sodales. Maecenas faucibus quam nec mauris ultricies finibus. Vivamus mauris odio, cursus sit amet lectus a, mattis laoreet urna lobortis."
      },
      {
        img: "/slider-tab-1-1(1).5x.png",
        tag: "ACTION",
        title: "BATTLE FOR HONOR",
        desc: "Aenean bibendum ipsum sit amet fringilla sodales. Maecenas faucibus quam nec mauris ultricies finibus. Vivamus mauris odio, cursus sit amet lectus a, mattis laoreet urna lobortis."
      }
    ];

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,       // ⬅️ side arrows disable
    pauseOnHover: true
  };


    return (
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.homesec5}>
              <img src={slide.img} alt={slide.title} className={styles.slideImage} />

              {/* Text + Buttons */}
              <div className={styles.contentWrapper}>
                {/* Tag Heading */}
                <div className={styles.headingWrapper5}>
                  <div className={styles.side5}>
                    <span className={styles.line4}></span>
                    <span className={styles.squareLeftTop5}></span>
                  </div>
                  <h3>{slide.tag}</h3>
                  <div className={styles.side5}>
                    <span className={styles.square5}></span>
                    <span className={styles.line5}></span>
                  </div>
                </div>

                {/* Title */}
                <h1>{slide.title}</h1>

                {/* Description */}
                <p>{slide.desc}</p>

                {/* Buttons */}
                <div className={styles.button5Container}>
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

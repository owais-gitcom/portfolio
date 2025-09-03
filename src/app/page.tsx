import Image from "next/image";
import styles from "./page.module.css";

import { PiTrolleyFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

import Homesec5Slider from "./slider/Homesec5Slider"; 

import { FaLightbulb, FaLeaf } from "react-icons/fa";

import Homesec1slider from "./slider1/homesec1slider";  



const products = [
  { id: 1, name: "GAMING KEYBOARD", price: 1200, image: "/shop4.jpg" },
  { id: 2, name: "GAMING DESK", price: 4500, image: "/shop3.jpg" },
  { id: 3, name: "GAMING CHAIR", price: 800, image: "/shop2.jpg" },
  { id: 4, name: "GAMING MOUSE", price: 2500, image: "/shop1.jpg" },
];


const posts = [
    {
      id: 1,
      title: "Journeying Through Gaming Animation",
      desc: "Neque sodales ut etiam sit amet.",
      date: "10 JUN, 2024",
      image: "/blog-15.jpg",
    },
    {
      id: 2,
      title: "Exploring Animation Gaming Culture",
      desc: "Ut venenatis tellus in metus.",
      date: "10 JUN, 2024",
      image: "/blog-14.jpg",
    },
    {
      id: 3,
      title: "Exploring Classic Game Gems",
      desc: "In fermentum et sollicitudin ac orci.",
      date: "10 JUN, 2024",
      image: "/blog-13.jpg",
    },
  ];



export default function Home() {

  
  const members = [
    {
      img: "/test-1.png",
      name: "JAMES",
      role: "GAME DEVELOPER",
      desc: "Volutpat consequat mauris nunc congue. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.",
    },
    {
      img: "/test-2.png",
      name: "THOMAS",
      role: "DEVELOPER",
      desc: "Adipiscing enim eu turpis egestas pretium aenean pharetra. Nisl tincidunt eget nullam non nisi est sit amet facilisis.",
    },
    {
      img: "/test-3.png",
      name: "WATSON",
      role: "ARCHITECT",
      desc: "Magna eget est lorem ipsum dolor sit amet consectetur. Sit amet risus nullam eget felis. Gravida rutrum quisque non tellus orci ac.",
    },
  ];



  return (
    <>

{/* homesec1 */}

       <Homesec1slider />

      {/* homesec1 */}

{/* homesec2 */}

<div className={styles.homesec2}>

  <div className={styles.headingWrapper2}>
  <div className={styles.side2}>
    <span className={styles.line2}></span>
        <span className={styles.square2}></span>

  </div>

  <h6 className={styles.headingText2}>OUR SERVICES</h6>

  <div className={styles.side2}>
        <span className={styles.square2}></span>
    <span className={styles.line2}></span>
  </div>
</div>

  <h2>DONEC CONSECTETUR <img src="/img-richtext_2.png" alt="" /> NISI MASSA </h2> 
  <h2>MASSA <img src="/img-richtext_3.png" alt="" /> NCUS VEL. PROIN ELEIFEND  </h2> 
   <h2> RISUS DIGNISSIM SEMPER BUS.... <img src="/home-section-image-1-1.jpg" alt="" /></h2>

<p>Aenean bibendum ipsum sit amet fringilla sodales. Maecenas faucibus quam nec mauris ultricies finibus. Vivamus <br/>
mauris odio, cursus sit amet lectus a, mattis laoreet urna lobortis.</p>

</div>

{/* homesec2 */}

{/* homesec3 */}

<div className={styles.slider}>
  <div className={styles.slideTrack}>
    {[...Array(2)].map((_, i) => (
      <div className={styles.slide} key={i}>
        <p>
          UNLOCK THE FUN <img src="/f9c214dd-3242-48d1-a96c-34f195b2f40a_removalai_preview.png" alt="" />
          DISCOVER THE POWER OF PLAY<img src="/f9c214dd-3242-48d1-a96c-34f195b2f40a_removalai_preview.png" alt="" />
          DRIVE INTO ENDLESS FUN <img src="/f9c214dd-3242-48d1-a96c-34f195b2f40a_removalai_preview.png" alt="" />
          PLAY. WIN. REPEAT <img src="/f9c214dd-3242-48d1-a96c-34f195b2f40a_removalai_preview.png" alt="" />
        </p>
      </div>
    ))}
  </div>
</div>

         
{/* homesec3 */}

{/* homesec4 */}

<div className={styles.homesec4}>

<div className={styles.headingWrapper3}>
  <div className={styles.side3}>
    <span className={styles.line3}></span>
        <span className={styles.square3}></span>
  </div>
  <h2 className={styles.headingText7}>OUR REFFERING</h2>

  <div className={styles.side3}>
        <span className={styles.square3}></span>
    <span className={styles.line3}></span>
  </div>
</div>


<h1>KEY GAMING ACCESSORIES</h1>

<div className={styles.container}>
  <div className={styles.grid}>
    {products.map((product) => (
      <div className={styles.card} key={product.id}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.socialIcons}>

<div className={styles.socialIcons}>
  <a href="/shop" aria-label="add to cart" className={styles.icon}><PiTrolleyFill /></a>
  <a href="#" aria-label="Twitter" className={styles.icon}><FaHeart  /></a>
</div>

          </div>
        </div>
        <h2 className={styles.productName}>{product.name}</h2>
<p className={styles.productPrice}>PKR {product.price.toLocaleString()}</p>
<button className={styles.button} aria-label={`Add ${product.name} to cart`}>
  Add to Cart
</button>

      </div>
    ))}
  </div>
</div>


<div className={styles.button4container}>
 <button className={styles.button4}>
  VIEW MORE
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

</div>


{/* homesec4 */}

{/* homesec5 */}


 <main>
      <Homesec5Slider />
    </main>

{/* homesec5 */}


{/* homesec6 */}

     <div className={styles.homesec6}>
      <section className={styles.storySection}>
        {/* Left Image */}
        <div className={styles.imageContainer}>
          <img src="/spec-block-1.5x.png" alt="gaming" />
        </div>

        {/* Right Content */}
        <div className={styles.contentSection}>
          {/* Heading with lines */}
          <div className={styles.headingWrapper}>
            <div className={styles.headingSide}>
              <span className={styles.headingLine}></span>
              <span className={styles.headingSquare}></span>
            </div>
            <h2 className={styles.headingText}>HOW WE DO</h2>
            <div className={styles.headingSide}>
              <span className={styles.headingSquare}></span>
              <span className={styles.headingLine}></span>
            </div>
          </div>

          <h1 className={styles.mainTitle}>
            From Pixels to <br /> Play: Sharing Our Story
          </h1>

          <p className={styles.description}>
            Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est
            <br />
            augue eget arcu dictum varius duis at consectetur.
          </p>

          {/* Features */}
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <img src="/spec-block-img-2x.png" alt="creativity" />
              <div className={styles.featureText}>
                <h4>CREATIVITY</h4>
                <p>Sed blandit libero volutpat</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <img
                src="/spec-block-img-2x_6734c3dc-3aef-474e-81a6-645e164ddab1.png"
                alt="stress relief"
              />
              <div className={styles.featureText}>
                <h4>STRESS RELIEF</h4>
                <p>Congue mauris rhoncus</p>
              </div>
            </div>
          </div>

          {/* List */}
          <ul className={styles.customList}>
            <li>Donec consectetur nisi massa, sed semper massa rhoncus vel.</li>
            <li>Proin eleifend risus dignissim semper dapibus.</li>
            <li>In mi eros, pulvinar in tempor non, facilisis non nunc.</li>
          </ul>

          {/* Button */}

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


        </div>
      </section>
    </div>

{/* homesec6 */}


{/* homesec7   */}

<div className={styles.homesec7}>

<div className={styles.headingWrapper3}>
  <div className={styles.side3}>
    <span className={styles.line3}></span>
        <span className={styles.square3}></span>
  </div>
  <h2 className={styles.headingText3}>OUR REVIEWS</h2>

  <div className={styles.side3}>
        <span className={styles.square3}></span>
    <span className={styles.line3}></span>
  </div>
</div>


<h1>WHAT ARE PLAYER SAYS</h1>



<div className="container">

  <section className={styles.teamSection}>
      {members.map((m, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.topRow}>
            <img src={m.img} alt={m.name} className={styles.avatar} />
            <span className={styles.quote}>"</span>
          </div>
          <h3 className={styles.name}>{m.name}</h3>


          <div className={styles.headingWrapper7}>
  <div className={styles.side7}>
    <span className={styles.line7}></span>
        <span className={styles.square7}></span>
  </div>
          <p className={styles.role}>{m.role}</p>

  <div className={styles.side7}>
        <span className={styles.square7}></span>
    <span className={styles.line7}></span>
  </div>
</div>


          <p >{m.role}</p>
          <p >{m.desc}</p>
        </div>
      ))}
    </section>

</div>

</div> <br/><br/><br/>

{/* homesec7 */}


{/* homesec8 */}

<div className={styles.homesec8}> 
  <img src="/img-banner-typ1.png" alt="" />

  <div className={styles.overlay8}>
    <div className={styles.headingWrapper8}>
      <div className={styles.side8}>
        <span className={styles.line8}></span>
        <span className={styles.square8}></span>
      </div>
      <h2 className={styles.headingText8}>OUR APP</h2>
      <div className={styles.side8}>
        <span className={styles.square8}></span>
        <span className={styles.line8}></span>
      </div>
    </div>

    <h1>Unlock Gaming <br/> Get Our App Now</h1>

    <p>
      Gravida rutrum quisque non tellus orci ac auctorv <br/>
      vulputate eu scelerisque felis imperdiet.
    </p>

    <div className={styles.appIcons}>
      <img src="/google-icon-1.png" alt="" className={styles.appimg} />
      <img src="/apple-icon.png" alt="" className={styles.appimg} />
    </div>
  </div>
</div>


{/* homesec8 */}


{/* homesec9 */}

<div className={styles.homesec9}>
  {/* Left: FAQ Text */}
  <div className={styles.leftCol}>
    <div className={styles.headingWrapper9}>
      <div className={styles.side9}>
        <span className={styles.line9}></span>
        <span className={styles.square9}></span>
      </div>
      <h2 className={styles.headingText9}>FAQ'S </h2>
      <div className={styles.side9}>
        <span className={styles.square9}></span>
        <span className={styles.line9}></span>
      </div>
    </div>

    <h1>NEED GUIDANCE? <br/> WE'VE PROVIDED</h1>
    <p>
      Tortor Aliquam Nulla Facilisi Cras Fermentum <br/>
      Auctor Augue Mauris Augue Neque Gravida In Fermentum.
    </p>

<div className={styles.button4container}>
 <button className={styles.button9}>
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


  </div>

  {/* Right: Accordion */}
  <div className={styles.rightCol}>
    <div className={styles.accordion}>
      {/* Item 1 */}
      <input type="radio" name="accordion" id="item1" />
      <label htmlFor="item1" className={styles.accordionHeader}>
        <span>ARE THERE GAMING CLUBS I CAN JOIN?</span>
        <span className={styles.icon2}></span>
      </label>
      <div className={styles.content}>Enim nec dui nunc mattis enim ut tellus. Et netus et malesuada fames ac. Cursus sit amet dictum sit amet justo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris.Libero justo laoreet sit amet cursus sit amet dictum.</div>

      {/* Item 2 */}
      <input type="radio" name="accordion" id="item2" />
      <label htmlFor="item2" className={styles.accordionHeader}>
        <span>HOW DO I GET STARTED IN GAMING?</span>
        <span className={styles.icon2}></span>
      </label>
      <div className={styles.content}>Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Magnis dis parturient montes nascetur ridiculus mus mauris. Eget gravida cum sociis natoque penatibus et magnis dis. Risus pretium quam vulputate dignissim.</div>

      {/* Item 3 */}
      <input type="radio" name="accordion" id="item3" />
      <label htmlFor="item3" className={styles.accordionHeader}>
        <span>ARE GAMING APPS FREE OR PAID?</span>
        <span className={styles.icon2}></span>
      </label>
      <div className={styles.content}>Sed velit dignissim sodales ut eu sem integer vitae justo. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Urna et pharetra pharetra massa.  </div>

      {/* Item 4 */}
      <input type="radio" name="accordion" id="item4" />
      <label htmlFor="item4" className={styles.accordionHeader}>
        <span>HOW CAN I HONE MY GAMING TALENTS?</span>
        <span className={styles.icon2}></span>
      </label>
      <div className={styles.content}>Etiam sit amet nisl purus in mollis nunc sed. Tellus cras adipiscing enim eu turpis egestas. Gravida quis blandit turpis cursus in hac. Tincidunt eget nullam non nisi. Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
    </div>
  </div>
</div>

{/* homesec9 */}

{/* homesec10 */}

<div className={styles.homesec10}>

<div className={styles.headingWrapper3}>
  <div className={styles.side3}>
    <span className={styles.line3}></span>
        <span className={styles.square3}></span>
  </div>
  <h2 className={styles.headingText10}>OUR DIGITAL DAIRY</h2>

  <div className={styles.side3}>
        <span className={styles.square3}></span>
    <span className={styles.line3}></span>
  </div>
</div>


<h1>EXPOLRE OUR GAMING BLOG</h1>


<section className={styles.blogWrapper}>
  <div className={styles.blogGrid}>
    {posts.map((post) => (
      <div key={post.id} className={styles.blogCard}>
        {/* Image */}
        <div className={styles.blogImageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={styles.blogImage}
          />
          <div className={styles.blogDate}>{post.date}</div>
        </div>

        {/* Content */}
        <div className={styles.blogContent}>
          <h2>{post.title}</h2>
          <p>{post.desc}</p>


          {/* <button>READ MORE</button> */}


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

              
            </div>



          
        </div>
      </div>
    ))}
  </div>
</section>






</div>





{/* homesec10 */}


    </>
  );
}

  import styles from "./about.module.css";

  export default function Page() {
    return (
      <>
        
      {/* aboutsec1 */}

        <div className={styles.heroSection1}>
          <div className={styles.overlay1}></div>
          <div className={styles.conten1t}>
            <h1 className={styles.title1}>ABOUT</h1>

            <div className={styles.breadcrumb1}>
              <a href="/" className={styles.breadcrumbLink1}>
                HOME
              </a>
            
              <span className={styles.separator1}></span>
              <span className={styles.active1}>ABOUT</span>
            </div>
          </div>
        </div>


  {/* aboutsec1 */}

  {/* aboutsec2 */}

  <div className={styles.aboutsec2}>

  <div className={styles.headingWrapper2}>
    <div className={styles.side2}>
      <span className={styles.line2}></span>
          <span className={styles.square2}></span>
    </div>
    <h2 className={styles.headingText2}>ABOUT US</h2>

    <div className={styles.side2}>
          <span className={styles.square2}></span>
      <span className={styles.line2}></span>
    </div>
  </div>


  <h1>REVEALING THE MIND BEHIND THE PIXELS </h1>

  <p>Ut fermentum porttitor dignissim. Aliquam vitae elit eget urna dapibus porta sed vel ipsum. 
    Nam id varius ante, vitu urna.</p>

  </div>

  {/* aboutsec2 */}

  {/* aboutsec3 */}


  <div className={styles.aboutsec3}>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className=" text-white p-6 rounded-xl shadow-lg text-center">
          <h2>10k</h2>
          <p>Verified Games</p>
        </div>
        <div className=" text-white p-6 rounded-xl shadow-lg text-center">
          <h2>50+</h2>
          <p>Toon Ban Safeguard</p>
        </div>
        <div className=" text-white p-6 rounded-xl shadow-lg text-center">
            <h2>60k</h2>
          <p>Engaged Online Users</p>
        </div>
        <div className=" text-white p-6 rounded-xl shadow-lg text-center">
          <h2>8.5/10  </h2>
          <p>Top-Notch Reviews</p>
        </div>
      </div>

      </div>

  {/* aboutsec3 */}

  {/* aboutsec4 */}

  <div className={styles.aboutsec4}>

  <div className={styles.headingWrapper4}>
    <div className={styles.side4}>
      <span className={styles.line4}></span>
          <span className={styles.square4}></span>
    </div>
    <h2 className={styles.headingText4}>OUR GROUP</h2>

    <div className={styles.side4}>
          <span className={styles.square4}></span>
      <span className={styles.line4}></span>
    </div>
  </div>


  <h1>GET TO KNOW OUR WARRIORS</h1>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
    {/* Card 1 */}
    <div className="text-white rounded-xl shadow-md text-center border border-gray-600 p-6">
      <img src="team-member-_1.png" alt="THOMAS" className="mx-auto mb-4 w-full" />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">THOMAS</h2>
        <p className="text-gray-400 text-sm">GAME DESIGNER</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="text-white rounded-xl shadow-md text-center border border-gray-600 p-6">
      <img src="team-member-_2.png" alt="THOMAS" className="mx-auto mb-4" />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">THOMAS</h2>
        <p className="text-gray-400 text-sm">GAME DESIGNER</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="text-white rounded-xl shadow-md text-center border border-gray-600 p-6">
      <img src="team-member-_3.png" alt="THOMAS" className="mx-auto mb-4" />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">THOMAS</h2>
        <p className="text-gray-400 text-sm">GAME DESIGNER</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="text-white rounded-xl shadow-md text-center border border-gray-600 p-6">
      <img src="team-member-_4.png" alt="THOMAS" className="mx-auto mb-4" />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">THOMAS</h2>
        <p className="text-gray-400 text-sm">GAME DESIGNER</p>
      </div>
    </div>
  </div>


  </div>

  {/* aboutsec4 */}

  {/* aboutsec5 */}

 <div className={styles.aboutsec5}>
  {/* Heading */}
  <div className={styles.headingWrapper5}>
    <div className={styles.side5}>
      <span className={styles.line5}></span>
      <span className={styles.square5}></span>
    </div>
    <h2 className={styles.headingText5}>JOIN OUR COMMUNITY</h2>
    <div className={styles.side5}>
      <span className={styles.square5}></span>
      <span className={styles.line5}></span>
    </div>
  </div>

  {/* Title */}
  <h1>SIGN UP FOR OUR NEWSLETTER</h1>

  {/* Email Input */}
  <input
    type="email"
    placeholder="Your email address"
    className={`${styles.emailInput} block w-full max-w-2xl mx-auto text-center text-gray-300 border border-gray-700 bg-[#111411] py-4 px-6 rounded-md focus:outline-none focus:border-[rgb(204,255,0)] transition duration-300`}
  />

  {/* Button */}
  <div className={styles.button4container}>
    <button className={styles.button4}>
      SUBSCRIBE
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


  {/* aboutsec5 */}



      </>
    );
  }

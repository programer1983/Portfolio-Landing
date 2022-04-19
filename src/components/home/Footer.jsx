

const Footer = () => {
  return (
    <>
      <footer>
          <div className="container grid1">
              <div className="box">
                  <img src="./assets/logo1.png" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis iaculis eleifend.</p>
                  <div className="scoialIcon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-dribbble"></i>
                  </div>
              </div>
              <div className="box">
                  <h2>Quick Links</h2>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Portfolio</li>
                      <li>News</li>
                      <li>Contact</li>
                      <li>FAQ's</li>
                  </ul>
              </div>
              <div className="box">
                  <h2>Recent Post</h2>
                  <div className="text">
                      <p>3 WooCommerce Plugins to Boost Sales</p>
                      <span>28 Feb 2022</span>
                  </div>
                  <div className="text">
                      <p>3 WooCommerce Plugins to Boost Sales</p>
                      <span>28 Feb 2022</span>
                  </div>
                  <div className="text">
                      <p>3 WooCommerce Plugins to Boost Sales</p>
                      <span>28 Feb 2022</span>
                  </div>
              </div>
              <div className="box">
                  <h2>Get in Touch</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="icon">
                      <i className="fa fa-location-dot"></i>
                      <label htmlFor="">Location: 27 Division St, New York, NY 10002, US"</label>
                  </div>
                  <div className="icon">
                      <i className="fa fa-phone"></i>
                      <label htmlFor="">Phone +14578 5262 4789</label>
                  </div>
                  <div className="icon">
                      <i className="fa fa-envelope"></i>
                      <label htmlFor="">Email:support@gmail.com</label>
                  </div>
              </div>
              </div>
              <div className="legal container">
                  <p>Copyright @2022. All rights reserved</p>
                  <label htmlFor="">
                      Design & Developed by <span>GorkCoder</span>
                  </label>
              </div>
          
      </footer>
    </>
  )
}

export default Footer
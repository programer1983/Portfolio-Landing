

const Home = () => {
  return (
      <>
        <section className="home">
            <div className="container flex">
                <div className="left">
                    <div className="img">
                        <img src="./assets/home.png" alt="" />
                    </div>
                </div>
                <div className="right topMarign">
                    <h1>
                    I AM A <br /> 
                    WEB DESIGNER
                    </h1>
                    <div className="scoialIcon">
                        <i className="fab fa-facebook-f facebook"></i>
                        <i className="fab fa-instagram instagram"></i>
                        <i className="fab fa-twitter twitter"></i>
                        <i className="fab fa-youtube youtube"></i>
                        <i className="fab fa-pinterest pinterest"></i>
                        <i className="fab fa-dribbble dribbble"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex nulla, a semper metus ornare at. Pellentesque lacinia nulla quis pharetra semper. Suspendisse ultricies bibendum elementum. Nulla nec quam porttitor, ullamcorper nulla eget, faucibus massa. Cras porta felis vitae augue porttitor, vel aliquam enim molestie.</p>
                    <button className="primary-btn">Contact Us</button>
                </div>
            </div>
        </section>
      </>
  )
}

export default Home


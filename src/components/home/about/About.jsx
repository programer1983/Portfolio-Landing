

const About = () => {
  const data = [
      {
        title: "Who I Am And What I Do",
        desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.",
        desc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.",
        cover: "./assets/about.jpg"
      }
  ]


  return (
    <>
    <section className="about topMarign">
        <div className="container flex">
            {data.map((val) => {
                return (
                    <>
                    <div className="left mtop">
                      <div className="heading">
                          <h3>About Me</h3>
                          <h1>{val.title}</h1>
                      </div>
                      <p>{val.desc1}</p>
                      <p>{val.desc2}</p>
                      <p>{val.desc3}</p>
                      <button className="primary-btn">Download CV</button>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default About
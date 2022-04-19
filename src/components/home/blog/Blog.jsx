import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material"
import blogdata from "./BlogData"

const Blog = () => {
  return (
    <>
      <section className="blog services">
          <div className="container topMarign">
              <div className="heading">
                  <h3>LATEST BLOG</h3>
                  <h1>Read Inspirational Story Every Week</h1>
              </div>
              <div className="container grid topMarign">
                  {blogdata.map((val) => {
                      return (
                          <div className="box">
                              <div className="img">
                                  <img src={val.cover} alt="" />
                              </div>
                              <div className="text">
                                  <span>{val.date}</span>
                                  <h2>{val.title}</h2>
                                  <a href="/">
                                      Read More
                                      <KeyboardDoubleArrowRightRounded className="icon"/>
                                  </a>
                              </div>
                          </div>
                      )
                  })}
              </div>
          </div>
      </section>
    </>
  )
}

export default Blog
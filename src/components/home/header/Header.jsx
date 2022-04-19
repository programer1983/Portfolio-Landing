import {useState} from "react"
import {Link} from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import WorkIcon from "@mui/icons-material/Work"
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 200)
  })

  return (
    <>
      <header className="header">
          <div className="container flex">
            <Link to="/">
               <div className="logo">
                  <img src="assets/logo.png" alt="" />
               </div>
            </Link>
              <div className="nav">
                  <ul 
                     className={
                        sidebar 
                         ? "nav-links-sidebar" 
                         : "nav-links"
                        }
                        onClick={() => setSidebar(false)}
                    >
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/pages">Pages</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li className="icon">
                          <SearchOutlinedIcon className="header-icon"/>
                          <WorkIcon className="header-icon"/>
                          <GridViewTwoToneIcon className="header-icon"/>
                      </li>
                  </ul>
              </div>
              <button 
                className="navbar-items-icon" 
                onClick={() => setSidebar(!sidebar)}
              >
                {sidebar ? <CloseIcon /> : <MenuIcon />}
              </button>
          </div>
      </header>
    </>
  )
}

export default Header
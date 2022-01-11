import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom";
import Footer from "../Footer"
import MenuIcon from '@mui/icons-material/Menu';
import "./index.css"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleToggleNav = () => setToggleMenu(!toggleMenu)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">Works</li>
            <li className="items">Blog</li>
            <li className="items">Contact</li>
          </ul>
        )}
        <button onClick={handleToggleNav} className="btn"><MenuIcon /></button>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}

export default Header;

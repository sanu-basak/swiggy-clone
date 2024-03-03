import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
          <div className="flex justify-between shadow-lg m-2 mb-2">
                <div>
                    <img src={LOGO_URL} alt="logo" className="w-32"/>
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-8">
                        <li className="px-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li className="px-4">
                            Cart
                        </li>
                    </ul>
                </div>
          </div>
        </>
    )
}

export default Header
import {Link} from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return(
      <>
        <header>
          <Link to="/" className="logo">
          Vivekanad college</Link>
            <div className="right">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Link to={"/addmission"} className="button">Apply now</Link>
        </div>
        </header>
        </>
  )
}
export default Header;
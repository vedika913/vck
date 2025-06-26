import {Link} from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return(
      <>
        <header>
          <Link to="/" className="logo">
          Vivekanand college</Link>
            <div className="right">
            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/courses" className="link">Courses</Link>
                <Link to="/contact" className="link">Contact</Link>
            </nav>
            <Link to={"/addmission"} className="button">Apply now</Link>
        </div>
        </header>
        </>
  )
}
export default Header;
import {Link} from 'react-router-dom'
const Header = () => {
  return(
    <div>
        <header>
          <h2>Vivekanand College</h2>
            <nav align="right">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/applynow/addmisssionpage">Apply Now</Link>
            </nav>
        </header>
    </div>
  )
}
export default Header;
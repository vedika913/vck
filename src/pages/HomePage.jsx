import { Link } from "react-router-dom";
const HomePage = () => {
  return(

            <div id="home">
              <div className="hero-section">
    <img src="/images/banner.png" alt="Vivekanand college" height="300" width="900" align="center"/>
        <div className="hero-headling">
            <h1 align="center">Welcome to Vivekanand College!</h1>
            <p align="center">Your journey to excellece starts here</p>
            <Link to="/addmission" className="button">Apply Now</Link>
            </div>
        </div>
    <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
    <h2>Why Choose Vivekanand College?</h2>
    <ul>
        <li>Legacy of Excellence: Decades of commitment to quality education.</li>
        <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
        <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
        <li>Strong Placements:Excellent career opportunities with leading companies.</li>
    </ul>

    <div className="images">
    <img src="/images/vck1.png" />
    <img src="/images/vck.png" />
    </div>

    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
    <div className="buttom">
        <p className="center-text" align="center">Ready to start your journey with us?</p>
         <Link to="/courses" className="button">Explore Courses</Link>
         </div>
            </div>
  )
}
export default HomePage;
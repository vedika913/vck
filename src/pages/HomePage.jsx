import Header from "../components/Header/Header";
const HomePage = () => {
  return(
    <div>
        <Header/>
        <div class="cotainer">
            <div id="home">
    <img src="/images/banner.png" alt="Vivekanand college" height="300" width="1500"/>
    <h1 align="center">Welcome to Vivekanand College!</h1>
    <p align="center">Your journey to excellece starts here</p>
    <button className='btn' align="cente">Apply Now</button>
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
    <img src="/images/vck1.png"/>
    <img src="/images/vck.png"/>
        <p className="center-text">Ready to start your journey with us?</p>
            </div>
        </div>
    </div>
  )
}
export default HomePage;
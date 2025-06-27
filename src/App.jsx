import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AddmissionPage from "./pages/AddmissionPage";
import Footer from "./components/Footer/Footer";
import "./styles/Pages.css"
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vedika Krushnat Chougale"
          studentPhotoUrl="/images/vedika1.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <div>
      <Router>
        <Header/>
        <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/addmission" element={<AddmissionPage/>}/>
        </Routes>
        </div>
        <ChatbotComponent/>
        <Footer/>
      </Router>
    </div>
    </>
  )
}
export default App;
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
const App = () => {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/addmission" element={<AddmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
        <Footer/>
      </Router>
    </div>
  )
}
export default App;
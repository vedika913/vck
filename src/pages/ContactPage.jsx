import { Link } from "react-router-dom";
const ContactPage = () => {
  return(
    <div>
        <div class="container">
          <div id="contact">
    <h1 align="center">Contact Us</h1>
    <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
    <h2>General Enquiries</h2>

    <p><b>Vivekanand College Main Campus</b>

    [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] India<br/>
  phone: +91 12345 67890 <br />
  Email: info@vivekanandcollege.edu<br/>
  Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br/>
  </p>

    <h2>Addmissions Office</h2>

    <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
    Phone: +91 87654 32109<br/>
    Email: studentsupport@vivekanandcollege.edu<br/>
    </p>
    <h2>Find Us on the Map</h2>
    <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>

    <p>
      <Link to="https://maps.app.goo.gl/zAPVzoYmcHaapU6X8" target="_blank">View on Google Maps</Link>
    </p>

    
    <h2>Send Us a Message</h2>

    <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
</div>
    </div>
    </div>
  )
}
export default ContactPage;
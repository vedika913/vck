import Header from "../components/Header/Header"
const CoursesPage = () => {
  return(
    <div>
        <Header/>
        <div class="container">
            <div id="course">
    <h1>Our Academic Programs</h1>
    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
    <h3>discover capus life</h3>
    <div className="video-container">
    <video width="400" height="300" className="course-video" controls>
        <source src="/videos/college.mp4"/>
    </video>
    </div>
    <h3>Undergraduate Programs (UG)</h3>
    <ul>
        <li>**Bachelor of Science (B.Sc.)**</li>
    <ul type="disc">
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
    </ul>
    </ul>
    <ul>
        <li>**Bachelor of Commerce (B.Com)**</li>
         <ul type="disc">
        <li>Accounting & Finance (3 years)</li>
        <li>Accounting & Finance (3 years)</li>
        </ul>
    </ul>
    <ul>
        <li>**Bachelor of Arts (B.A.)**</li>
        <ul type="disc">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
    </ul>
    <h3>Postgraduate Programs (PG)</h3>
    <ul>
        <li>**Master of Science (M.Sc.)**</li>
    <ul type="disc">
        <li>Computer Science (2 years)</li>
        <li>Information Technology (2 years)</li>
    </ul>
    </ul><div>
    <h1>Our Academic Programs</h1>
    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
    <h3>Undergraduate Programs (UG)</h3>
    <ul>
        <li>**Bachelor of Science (B.Sc.)**</li>
    <ul type="disc">
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
    </ul>
    </ul>
    <ul>
        <li>**Bachelor of Commerce (B.Com)**</li>
         <ul type="disc">
        <li>Accounting & Finance (3 years)</li>
        <li>Accounting & Finance (3 years)</li>
        </ul>
    </ul>
    <ul>
        <li>**Bachelor of Arts (B.A.)**</li>
        <ul type="disc">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
    </ul>
    <h3>Postgraduate Programs (PG)</h3>
    <ul>
        <li>**Master of Science (M.Sc.)**</li>
    <ul type="disc">
        <li>Computer Science (2 years)</li>
        <li>Information Technology (2 years)</li>
    </ul>
        <li>**Master of Commerce (M.Com)** (2 years)</li>
        <li>**Master of Arts (M.A.)** (2 years)</li>
    </ul>
    <h2>Program Details & Fee Structure (Annual)</h2>
    <table class="table" border="1">
        <tr>
            <th>Program Type</th>
            <th>Course Name	</th>
            <th>Duration</th>
            <th>Anuual Fee(INR)</th>
            <th>Eligibility</th>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
        </tr>
        <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance</td>
            <td>3 Years</td>
            <td>₹ 70,000</td>
            <td>10+2 Commerce (45%)</td>
        </tr>
        <tr>
            <td>PG</td>
            <td>M.Sc. Information Technology</td>
            <td>2 Years</td>
            <td>₹ 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
        </tr>
    </table>
    <h3>Specialized & Vocational Courses</h3>
    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
    <p align="center">Explore detauked stkkavu and admission criteia on our Addmission page.</p>
    <button className="btn">Inquire About Courses</button>
   </div>
    </div>
    </div>
    </div>
  )
}
export default CoursesPage;
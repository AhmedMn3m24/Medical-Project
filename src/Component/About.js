import React from "react"
function About() {

  return (
    <div class="about">
      <header class="about__header">
        <h2 class="about__title">About Us</h2>
        <h6 class="about__subtitle">Entrust your health to our doctors</h6>
        <img
          class="about__image"
          src="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
          alt="About us background"
        />
      </header>

      <section class="about__welcome">
        <div class="about__welcome-content">
          <h3 class="about__welcome-title">Welcome to Medical Clinic</h3>
          <p class="about__welcome-description">
            The mission of Medical Clinic is to promote health and wellbeing of
            all our patients by providing accessible, high-quality medical care
            for people of all ages. We are committed to exceeding expectations by
            balancing care, exercise, nutrition, and education.
          </p>
        </div>
        <img
          class="about__welcome-image"
          src="https://medilo-react.vercel.app/assets/img/about_img_1.jpg"
          alt="Welcome to Medical Clinic"
        />
      </section>

      <section class="testimonials">
        <h3 class="testimonials__title">Testimonials</h3>
        <div class="testimonials__cards">
          <div class="testimonials__card">
            <p class="testimonials__text1">
              Their clinical care is outstanding but what really sets them apart
              is that they truly care about the well-being of their patients."
            </p>
          </div>
          <div class="testimonials__card">
            <p class="testimonials__text2">
              I just can’t say enough good things about the Medical Clinic. I
              am so happy to be a patient there. It saved my life."
            </p>
          </div>
          <div class="testimonials__card">
            <p class="testimonials__text3">
              I feel like the team really cares about my personal health and
              feels invested in my well-being into the future."
            </p>
          </div>
        </div>
      </section>
      <hr />
      <footer class="about__footer">
        <div class="about__footer-section">
          <h4 class="about__footer-title">HOME</h4>
          <p class="about__footer-text">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care for all ages.
          </p>
        </div>
        <hr />

        <div class="about__footer-section">
          <h4 class="about__footer-title">ABOUT</h4>
          <p class="about__footer-text--About">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care for all ages.      </p>
        </div>
        <hr />

        <div class="about__footer-section">
          <h4 class="about__footer-title">SERVICES</h4>
          <p class="about__footer-text--Services">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care for all ages.      </p>
        </div>
        <hr />

        <div class="about__footer-section">
          <h4 class="about__footer-title">DEPARTMENTS</h4>
          <p class="about__footer-text--Derparments">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care for all ages.
          </p>
        </div>
      </footer>
    </div>
  )
}


export default About;






















// import React from "react";


// function About() {

//   return (
//     <div className="About1">
//       <h2 id="Dev">About us</h2>
//       <h6 id="ourDoc">
//         Entrust your health our doctors
//       </h6>
//       <img className="photoAbout" src="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg" />
//       {/*   **************************************************/}
//       <div>
//         <h3 id="title">Welcome to Medical Clinic</h3>
//         <p id="title2">The mission of Medical Clinic is to promote health
//           and wellbeing of all our patients by providing accessible,
//           high-quality medical care for people of all ages.
//           Medical Clinic is committed to providing services that will exceed
//           the expectations of our patients.We believe that optimal health
//           and performance can be attained through the proper balance of care,
//           exercise, nutrition and education.</p>

//       </div>
//       <img className="landingPage" src="https://medilo-react.vercel.app/assets/img/about_img_1.jpg " />

//       {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

//       <div className="About2">
//         <h3 className="text">Testimonials</h3>
//         <div className="card-container">
//           <p id="card1">
//             Their clinical care is outstanding but what really sets them
//             apart is that they truly care about the well-being of their patients.<br />
//             Paul Adams</p>

//           <p id="card2">I just can’t say enough good things about the Medical Clinic.
//             I am so happy to be a patient there. It saved my life.</p>

//           <p id="card3">I feel like the team really cares about my personal health and feels
//             invested in my well-being into the future.</p>
//         </div>
//       </div>
//       {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}


//       <div style={{marginTop:"100px"}} className="footer" >
//             <p id="foter1">
//               HOME
//               <br />
//             </p>
//             <h6 id="foterone">
//               Medical Clinic promotes health and wellbeing of all our patients by
//               providing accessible,
//               ages.
//             </h6>
//             <p id="foter2">ABOUT</p>
//             <h6 className="fotertwo ">
//               Medical Clinic promotes health and wellbeing of all our patients by
//               providing accessible,
//               ages.
//             </h6>
//             <p id="foter3">SERVICES</p>
//             <h6 className="foterthree">
//               Medical Clinic promotes health and wellbeing of all our patients by
//               providing accessible,
//               ages.
//             </h6>
//             <p id="foter4">DEPARDEMTS</p>
//             <h6 className="foterfour">
//               Medical Clinic promotes health and wellbeing of all our patients by
//               providing accessible,
//               ages.
//             </h6>
//           </div>
























//     </div>

//   );


// }
// export default About;
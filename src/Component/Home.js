import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <div className="home">
      <div className="home__slider">
        <img
          className="home__slider-image"
          src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/team1.png"
          alt="Medical Services"
        />
      </div>
      <div id="home__slider-caption">
        <p>
          Medical Services
          <br /> Trusted by Clients
        </p>
      </div>

      {/**************** Header ************************************/}

      <section className="home__section home__section--why-choose">
        <h2 className="home__section-title1">Why Choose Our Clinic</h2>
        <p className="home__section-description1">
          For more than a century, people from all walks of life
          <br /> Here are some reasons why more than a million people
          <br /> each year choose our Clinic for their medical care:
        </p>
        <div className="home__features">
          <div className="home__feature">
            <h4 className="home__feature-title1">More Experience</h4>
            <p className="home__feature-text1">
              Every year, more than a million people come to the Clinic for care.
              Our highly specialized experts are deeply experienced in treating
              rare and complex conditions.
            </p>
          </div>
          <div className="home__feature">
            <h4 className="home__feature-title2">Seamless Care</h4>
            <p className="home__feature-text2">
              At our Clinic, every aspect of your care is coordinated and teams of
              experts work together to provide exactly the care you need. What
              might take months elsewhere can often be done in days here.
            </p>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////// */}
      <section className="home__section home__section--services">
        <h2 className="home__section-heading">Our Services</h2>
        <div className="home__services">
          <div className="home__service">
            <img
              className="home__service-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img01.jpg"
              alt="General Practice"
            />
            <p className="home__service-title1">General Practice</p>
          </div>
          <div className="home__service">
            <img
              className="home__service-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img02.jpg"
              alt="Vaccination"
            />
            <p className="home__service-title2">Vaccination</p>
          </div>
          <div className="home__service">
            <img
              className="home__service-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img03.jpg"
              alt="Health Packages"
            />
            <p className="home__service-title3">Health Packages</p>
          </div>
        </div>
      </section>
      {/********************************************************/}
      {/* <section className="home__section home__section--appointment">
        <div id="Pragraph">
          <p className="home__section-form--M">Make an Appointment</p>
        </div>
        <img className="home__appointment-image1"
          src="https://img.freepik.com/premium-photo/male-doctor-labcoat-stethoscope-with-folded-arms-standing-hospital-hallway_752325-3503.jpg"
          alt="Doctor" />

      </section>
      <div className="parent">
        <div className="section__FORM">
          <div className="home__form">
            <input
              className="home__form-input"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="home__form-input"
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="home__form-input"
              type="tel"
              id="phone"
              placeholder="Phone"
              name="phone"
              required
            />
            <input
              className="home__form-input"
              type="text"
              id="address"
              placeholder="Address"
              name="address"
              required
            />
            <textarea
              className="home__form-textarea"
              id="message"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button className="home__form-button">Submit</button>
          </div>
        </div>
      </div> */}
      {/* ////////////////////////-/////////////////////////////////////////// */}
      <section className="home__section home__section--doctors">
        <h2 className="home__section-title--D">Our Doctors</h2>
        <div className="home__doctors">
          <div className="home__doctor">
            <img
              className="home__doctor-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img01.jpg"
              alt="Dr. Nick Sims"
            />
            <h6 className="home__doctor-name">Dr. Nick Sims</h6>
            <p className="home__doctor-info">
              He possesses numerous other skills including experience with vaccinations.
            </p>
          </div>
          <div className="home__doctor">
            <img
              className="home__doctor-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img02.jpg"
              alt="Dr. Max Turner"
            />
            <h6 className="home__doctor-name">Dr. Max Turner</h6>
            <p className="home__doctor-info">
              He possesses numerous other skills including experience with vaccinations.
            </p>
          </div>
          <div className="home__doctor">
            <img
              className="home__doctor-image"
              src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img03.jpg"
              alt="Dr. Amy Adams"
            />
            <h6 className="home__doctor-name">Dr. Amy Adams</h6>
            <p className="home__doctor-info">
              She possesses numerous other skills including experience with vaccinations.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <footer className="home__footer">
        <div className="home__footer-section">
          <p className="home__footer-title--H">HOME</p>
          <p className="home__footer-text--Home">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care to all ages.
          </p>
        </div>
        <hr />
        <div className="home__footer-section">
          <p className="home__footer-title--A">ABOUT</p>
          <p className="home__footer-text--About">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care to all ages.
          </p>
        </div>
        <hr />

        <div className="home__footer-section">
          <p className="home__footer-title--S">SERVICES</p>
          <p className="home__footer-text--SSERVICES">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care to all ages.
          </p>
        </div>
        <hr />

        <div className="home__footer-section">
          <p className="home__footer-title--D">DEPARTMENTS</p>
          <p className="home__footer-text--DEPARTMENTS">
            Medical Clinic promotes health and wellbeing of all our patients by
            providing accessible care to all ages.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

















































// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import { Last } from "react-bootstrap/esm/PageItem";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// function Home() {
//   return (
//     <div className="page-wraaper">
//       <>

//         <div>
//           <div id="slider">
//             <img
//               className="photo"
//               src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/team1.png"
//             />
//           </div>
//           <p id="slide">
//             Medical Services
//             <br /> Trusted by Clients
//           </p>
//         </div>
//         {/* ******************************************************* */}
//         <div className="section1">
//           <h2 className="Text-section1"> Why Choose Our Clinic</h2>
//           <p className="P-1">
//             For more than a century, people from all walks of life
//             <br /> Here are some reasons why more than a million people
//             <br /> each year choose our Clinic for their medical care:
//           </p>
//           <h4 className="P-2">
//             More exprnince
//             <br />
//             Every year, more than a million people come to the Clinic for care.
//             Our highly specialized experts are deeply experienced in treating
//             rare and complex conditions.
//           </h4>
//           <h4 className="P-3">
//             Seamless care
//             <br />
//             At our Clinic, every aspect of your care is coordinated and teams of
//             experts work together to provide exactly the care you need. What
//             might take months elsewhere can often be done in days here.
//           </h4>
//         </div>
//         {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

//         <div className="section2">
//           <h2 id="text">Our Services</h2>
//           <div id="photo-services">
//             <img id="photo-ser1" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img01.jpg" />
//             <img id="photo-ser2"src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img02.jpg" />
//             <img id="photo-ser3" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img03.jpg" />
//           </div>
//           <div id="three-pragarph">
//             <p id="onee">General Practice</p>
//             <p id="twwo">Vaccination</p>
//             <p id="threee">Health Packages</p>
//           </div>
//         </div>
//         {/* ***************************************************  */}
//         <div className="section3">
//           <p id="pragraph3">Make an Appointment</p>
//           <h6 id="pragh">
//             You can book a visit right now by filling up the online form or give
//             us <br />a call to check the available time for a visit.
//           </h6>

//           <img
//             id="slid3"
//             src="https://img.freepik.com/premium-photo/male-doctor-labcoat-stethoscope-with-folded-arms-standing-hospital-hallway_752325-3503.jpg"
//           />

//           <div class="form-container">
//             <input
//               style={{ padding: 12, width: "20%" }}
//               type="text"
//               id="name"
//               placeholder="Name"
//               name="name"
//               required
//             />
//             <br />
//             <br />

//             <input
//               style={{ padding: 12, width: "20%" }}
//               type="email"
//               id="email"
//               placeholder="Email"
//               name="email"
//               required
//             />
//             <br />
//             <br />

//             <input
//               style={{ padding: 12, width: "20%" }}
//               type="tel"
//               id="phone"
//               placeholder="phone"
//               name="phone"
//               required
//             />
//             <br />
//             <br />

//             <input
//               style={{ padding: 12, width: "20%" }}
//               type="text"
//               id="address"
//               placeholder="address"
//               name="Address"
//               required
//             />
//             <br />
//             <br />

//             <textarea
//               style={{ padding: 12, width: "20%" }}
//               id="message"
//               placeholder="message"
//               name="Message"
//               required
//             >
//               Message
//             </textarea>
//             <br />
//             <br />
//             <button id="BTN">Submit</button>
//           </div>
//           {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

//           {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

//           <div className="section5">
//             <h2 id="pragh5">Our Doctors</h2>

//             <div id="photos-Doctors">
//               <img id="photo-Doc1" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img01.jpg" />
//               <img  id="photo-Doc2" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img02.jpg" />
//               <img  id="photo-Doc3" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img03.jpg" />
//               <img  id="photo-Doc4" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img04.jpg" />
//             </div>

//             <div id="about-doctors">
//               <h6 id="oneDoc"> Dr.Nick Sims,
//                 <br />
//                 He possesses numerous other skills including experience with
//                 vaccinations,,</h6>
//               <h6 id="twoDoc">
//                 Dr. Max Turner,,
//                 <br />
//                 He possesses numerous other skills including experience with
//                 vaccinations
//               </h6>
//               <h6 id="threeDoc">
//                 Dr. Amy Adams ,, <br />
//                 He possesses numerous other skills including experience with
//                 vaccinations
//               </h6>

//               <h6 id="fourDoc">
//                 Dr.Nick Sims ,, <br />
//                 He possesses numerous other skills including experience with
//                 vaccinations</h6>

//             </div>




//           </div>
//           {/******************************************/}

//           <div className="footer">
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
//         </div>
//         {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

//       </>
//     </div>
//   );
// }

// export default Home;

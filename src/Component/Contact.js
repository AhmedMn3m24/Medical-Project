import React from "react";


function Contact() {

  return (
    <div className="contact">
      <h2 id="head">  Contact US</h2>

      <div class="form-containerrr">


        <input type="text" id="name" placeholder='Name' name="name" required />
        <br />
        <br />

        <input type="email" id="email" placeholder='Email' name="email" required />
        <br />
        <br />

        <input type="tel" id="phone" placeholder='phone' name="phone" required />
        <br />
        <br />

        <input type="text" id="address" placeholder='address' name="Address" required />
        <br />
        <br />

        <textarea id="message" placeholder='message' name="Message" required>Message:</textarea>
        <br />
        <br />
        <button id='submit' type="submit">Submit</button>
      </div>
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
      <h6>End</h6>
    </div>












  );
}
export default Contact;
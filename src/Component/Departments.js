import React from 'react';
import { Card } from 'react-bootstrap';

const DepArray = [
  { departmentTitle: 'Pediatrics', departmentText: 'Heart health is disordersour priority', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img01.jpg' },
  { departmentTitle: 'Cardiology', departmentText: 'Heart health is disordersour priority', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img02.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img04.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img05.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img06.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img07.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img08.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img03.jpg' },
  { departmentTitle: 'Neurology', departmentText: 'Expert care for neurological disorders', departmentImg: 'https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-departaments-img03.jpg' },

];

function Department({ departmentTitle, departmentText, departmentImg }) {
  return (


    <div className="card-info col-12 col-sm-6 col-md-4 mb-4">
      <Card id='cardd' style={{ width: '20rem', border: 'none' }}>
        <div id="parent-photos">
          <Card.Img id="cardimg" variant="top" src={departmentImg} />
        </div>
        <Card.Body>
          <Card.Title id="cardtitle">{departmentTitle}</Card.Title>
          <Card.Text id="cardtext">{departmentText}</Card.Text>
        </Card.Body>
      </Card>
    </div>

  );
}

function DepartmentList() {
  return (
    <div id='departments_section'>
      <div className='departments_section-img--wrapper'>
        <img id="soraheader" src="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg" />
      </div>
      <div className='container department-details' >
        <div className='row'>
          {DepArray.map((depar, index) => (
            <Department {...depar} key={index} />
          ))}
        </div>
      </div>
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

  );
}

export default DepartmentList;

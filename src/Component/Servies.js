
import React, { useState } from "react";

function Services() {
    const [selectedImage, setSelectedImage] = useState("https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img03.jpg");

    const images = [
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img03.jpg",
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img02.jpg",
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img04.jpg",
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img01.jpg",
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img05.jpg",
        "https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img06.jpg"
    ];

    return (
        <>
            <div className="services">
                <img className="services__header-image" src="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg" />

                <img className="services__image" src={selectedImage} />

                <div className="services__gallery">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`services__gallery-item ${selectedImage === image ? "services__gallery-item--active" : ""}`}
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            onClick={() => setSelectedImage(image)}
                        />

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


        </>
    );

}

export default Services;









// import React from "react";

// function Services() {
//     return (
//         <div className="services">
//             <img className="services__header-image" src="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg" />

//             <div className="services__gallery">
//                 <img className="services__gallery-item services__gallery-item--1" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img03.jpg" />
//                 <img className="services__gallery-item services__gallery-item--2" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img02.jpg" />
//                 <img className="services__gallery-item services__gallery-item--3" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img04.jpg" />
//                 <img className="services__gallery-item services__gallery-item--4" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img01.jpg" />
//                 <img className="services__gallery-item services__gallery-item--5" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img05.jpg" />
//                 <img className="services__gallery-item services__gallery-item--6" src="https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-gallery-img06.jpg" />
//             </div>
//         </div>
//     );
// }
// export default Services;
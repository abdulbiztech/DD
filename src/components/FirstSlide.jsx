// import React from "react";
// import "./FirstSlide.css";
// import fashion from "../assets/img/firstslide/fashion.png";
// import second from "../assets/img/firstslide/second.png";
// import third from "../assets/img/firstslide/third.png";
// import fourth from "../assets/img/firstslide/fourth.png";
// import fifth from "../assets/img/firstslide/fifth.png";
// import six from "../assets/img/firstslide/six.png";
// import logo from "../assets/img/white_logo.png";

// const FirstSlide = () => {
//   return (
//     <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
//       <div className="logo-container2">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>

//       <div className="row justify-content-center">
//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={fashion} className="img-fluid mb-4" alt="Fashion" />
//           </div>
//         </div>

//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={second} alt="Product 1" className="img-fluid" />
//           </div>
//         </div>

//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={third} alt="Product 2" className="img-fluid" />
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={fourth} alt="Product 3" className="img-fluid" />
//           </div>
//         </div>

//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={fifth} alt="Product 4" className="img-fluid" />
//           </div>
//         </div>

//         <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
//           <div className="box">
//             <img src={six} alt="Product 5" className="img-fluid" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstSlide;
// -------------------
import React from "react";
import "./FirstSlide.css";
import fashion from "../assets/img/firstslide/fashion.png";
import second from "../assets/img/firstslide/second.png";
import third from "../assets/img/firstslide/third.png";
import fourth from "../assets/img/firstslide/fourth.png";
import fifth from "../assets/img/firstslide/fifth.png";
import six from "../assets/img/firstslide/six.png";
import logo from "../assets/img/white_logo.png";

const FirstSlide = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      {/* Logo Overlay */}
      <div className="logo-container2">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Images Grid */}
      <div className="row justify-content-center">
        {/* First Column (Images going up) */}
        <div className="col-4 d-flex flex-column align-items-center">
          <div className="box column-up">
            <img src={fashion} className="img-fluid" alt="Fashion" />
          </div>
          <div className="box column-up">
            <img src={fourth} alt="Product 4" className="img-fluid" />
          </div>
        </div>

        {/* Second Column (Images going down) */}
        <div className="col-4 d-flex flex-column align-items-center">
          <div className="box column-down">
            <img src={second} alt="Product 2" className="img-fluid" />
          </div>
          <div className="box column-down">
            <img src={fifth} alt="Product 5" className="img-fluid" />
          </div>
        </div>

        {/* Third Column (Images going up) */}
        <div className="col-4 d-flex flex-column align-items-center">
          <div className="box column-up">
            <img src={third} alt="Product 3" className="img-fluid" />
          </div>
          <div className="box column-up">
            <img src={six} alt="Product 6" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;

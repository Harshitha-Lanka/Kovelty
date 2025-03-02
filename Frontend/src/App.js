// // src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import About from './pages/About';
// import AppDevelopment from './Components/AppDevelopment';
// import AIAndML from './Components/AiMl';
// import CloudServices from './Components/CloudServices';
// import MobileDevelopment from './Components/MobileDevelopment';
// import ProductManagement from './Components/ProductManagement';
// import QAAndAutomation from './Components/QaAutomachine';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';






// const App = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/services" element={<Services />} />
//     <Route path="/services/app-development" element={<AppDevelopment />} />
//     <Route path="/services/mobile-development" element={<MobileDevelopment  />} />
//     <Route path="/services/product-management" element={<ProductManagement />} />
//     <Route path="/services/qa-and-automation" element={<QAAndAutomation />} />
//     <Route path="/services/cloud-services" element={<CloudServices />} />
//     <Route path="/services/ai-and-ml" element={<AIAndML />} />
//     <Route path="/about" element={<About/>}/>

//   </Routes>
// );

// export default App;











// src/App.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import AppDevelopment from './Components/AppDevelopment';
import AIAndML from './Components/AiMl';
import CloudServices from './Components/CloudServices';
import MobileDevelopment from './Components/MobileDevelopment';
import ProductManagement from './Components/ProductManagement';
import QAAndAutomation from './Components/QaAutomachine';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    // Initialize ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    // Example ScrollTrigger animation
    gsap.from(".main-img img", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".main-img",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/product-management" element={<ProductManagement />} />
          <Route path="/services/qa-and-automation" element={<QAAndAutomation />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/ai-and-ml" element={<AIAndML />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

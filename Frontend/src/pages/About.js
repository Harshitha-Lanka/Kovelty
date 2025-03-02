import React, { useEffect } from 'react';

// Import scripts from /src/assets/js
import $ from '../../assets/js/jquery-3.6.0.min.js';
import jQueryMigrate from '../../assets/js/jquery-migrate-3.4.0.min.js';
import plugins from '../../assets/js/plugins.js';
import gsap from '../../assets/js/gsap.min.js';
import ScrollSmoother from '../../assets/js/ScrollSmoother.min.js';
import ScrollTrigger from '../../assets/js/ScrollTrigger.min.js';
import hscroll from '../../assets/js/hscroll.js';
import smootherScript from '../../assets/js/smoother-script.js';
import scripts from '../../assets/js/scripts.js';

function About() {
  useEffect(() => {
    // Dynamically load scripts
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load scripts
    loadScript($);
    loadScript(jQueryMigrate);
    loadScript(plugins);
    loadScript(gsap);
    loadScript(ScrollSmoother);
    loadScript(ScrollTrigger);
    loadScript(hscroll);
    loadScript(smootherScript);
    loadScript(scripts);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.querySelectorAll('script').forEach((script) => {
        if (script.src.includes('/assets/js/')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page content.</p>
    </div>
  );
}

export default About;
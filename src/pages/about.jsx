import React from "react";

import "../styles/about.css";

import LinkedInRecos from './linkedinrecos';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
         Greetings! I am a dedicated software engineer currently leveraging my skills and expertise at Walmart, a leader in the tech industry. Over the years, I have had the privilege of contributing to several esteemed organizations, including Albertsons and AT&T, where I honed my abilities and embraced the dynamic and ever-evolving world of technology. 
         </p>
         <p className="about-details">
         My expertise lies in Java programming language, where I've leveraged the power of Spring framework to develop robust and efficient applications. Additionally, my experience extends to cloud technologies, particularly Azure, where I've led initiatives to migrate applications, implement cloud-native solutions, and optimize performance and cost-efficiency.         </p>
         <p className="about-details">
         Driven by a passion for innovation and problem-solving, I thrive in environments where challenges abound, consistently delivering efficient solutions that drive organizational growth and efficiency. Beyond the realm of technology, I find joy in maintaining an active lifestyle through workouts and seek solace in the rhythm of music.
         </p>
         <p className="about-details">
         Furthermore, I cherish the opportunity to forge meaningful connections and expand my network. If you share a similar passion for technology or simply wish to connect, I invite you to reach out to me on LinkedIn. Let's connect, collaborate, and explore the possibilities together!
         </p>

        <p className="about-details">
         I am always excited to meet new people and make friends. Feel free to drop me a note on LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default About;
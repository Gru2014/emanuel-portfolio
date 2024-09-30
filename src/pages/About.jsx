import React from "react";
import about_me_img from "../Image/about_me_img.png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Started my carrier with HTML, CSS, PHP and Laravel, and 2 years
            later, I mainly worked with JS/TS, Python and modern JS frameworks
            like React, Angular, Vue.js on the frontend and Node, Django on the
            backend. Mainly worked with Nosql database, Have a lot of experience
            with AWS like Lambda, EC2, DynamoBD. Writing clean, scalable,
            reusable code, excellent communication skills, strong problem
            solving skills are my greatest strengths
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className="abc">
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

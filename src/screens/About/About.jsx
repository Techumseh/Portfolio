import React, { memo } from "react";
import Layout from "../../components/shared/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="home">
        <img
          className="avatar"
          src="https://i.imgur.com/TI7g1r3.jpg"
          alt-img=" "
        />
        <h2>
          <center>About Me</center>
        </h2>
        <p className="paragraph">
          Experienced Executive with a demonstrated history of working in the
          Information Technology and Software Engineering industry. Skilled in
          Project Management, DevOps, Business Process, Budgeting, Analytical
          Skills, Requirements Analysis, Software Development and Government.
          Planned and managed multimillion-dollar projects aligning business
          goals with technology solutions to drive process improvements,
          competitive advantage and bottom-line gains.
        </p>
        <p className="paragraph">
          Graduate of General Assembly a Software Engineering Immerse program
          that included 480 hours of professional training over 12 weeks.
          Utilized a hands-on approach to design and build full-stack web
          applications with full CRUD functionality through Javascript, React,
          Express, SQL, SaSS, jQuery, Mongoose, Sublime/VsCode, Heroku, Node.js,
          PostgreSQL, MongoDB, HTML, CSS, Ruby, Rails and Sequelize.
        </p>
        <p className="paragraph">
          <center>C.R.E.A.M. - "Code Rules Everything Around Me"</center>{" "}
        </p>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default About;

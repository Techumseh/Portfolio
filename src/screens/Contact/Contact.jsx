import React from 'react'
import Layout from '../../components/shared/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div>
        <div className="description">
        <img src="https://i.imgur.com/BGKCGtj.jpg"  width="96%"/><center>
            <h3>Contact Me</h3> 
            <h4>Let’s make something awesome together! -Drop me a line, and let's talk about your project.</h4>
        <a href="mailto:bondconsulting@gmail.com" >bondconsulting@gmail.com</a><br /><br />
        <a href="https://www.linkedin.com/in/jeffbond/" target="_blank">linkedIn/in/JeffBond</a><br /><br />
        <a href="https://Github.com/Techumseh" target="_blank" >Github.com/Techumseh</a><br /><br />
        <a href="https://jeffrey-bond.medium.com" target="_blank"> Medium.com/@jeffrey-bond</a><br /><br />
        <a href="https://calendly.com/jeffrey-bond"target="_blank"> Calendly.com/jeffrey-bond</a><br />
          </center>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
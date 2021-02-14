import React from 'react';
import Layout from '../../components/shared/Layout/Layout'



const Contact = () => {
  return (
   <Layout>
      <div className="description">
        <div>
        <h2>Contact Me - Lets work together!</h2> 
        <a href="mailto:bondconsulting@gmail.com" >bondconsulting@gmail.com</a><br /><br />
        <a href="https://www.linkedin.com/in/jeffbond/" target="_blank">linkedIn/in/JeffBond</a><br /><br />
        <a href="https://Github.com/Techumseh" target="_blank" >Github.com/Techumseh</a><br /><br />
        <a href="https://medium.com/@jeffrey-bond" target="_blank"> Medium.com/@jeffrey-bond</a><br /><br />
        <a href="https://calendly.com/jeffrey-bond"target="_blank"> Calendly.com/jeffrey-bond</a>
       </div>
      </div>
    </Layout>
    
  );
};

export default Contact;
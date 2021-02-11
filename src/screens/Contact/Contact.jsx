import React from 'react';
import Layout from '../../components/shared/Layout/Layout'



const Contact = () => {
  return (
    <div>// 
      <Layout>
        <div className="paragraph">
         
        <h1>Contact Me - Lets work together!</h1> 
        <a href="mailto:bondconsulting@gmail.com" >bondconsulting@gmail.com</a><br /><br />
        <a href="https://www.linkedin.com/in/jeffbond/" target="_blank">linkedIn/in/JeffBond</a><br /><br />
        <a href="https://Github.com/Techumseh" target="_blank" >Github.com/Techumseh</a><br /><br />
        <a href="https://medium.com/@jeffrey-bond" target="_blank"> Medium.com/@jeffrey-bond</a><br /><br />
        <a href="https://calendly.com/jeffrey-bond"target="_blank"> Calendly.com/jeffrey-bond</a><br />

        <h4>Or send a message using the form below</h4>
      <form method="POST">
        <label htmlFor="name">Name:</label>
          <input type="text" name="name" /><br />

    <label htmlFor="email">Email: </label>
      <input type="email" name="email" /><br />

    <label htmlFor="message">Message</label><br />
      <textarea name="message" rows="6" columns="9"></textarea><br />

    <input type="submit" />
          </form>
       
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
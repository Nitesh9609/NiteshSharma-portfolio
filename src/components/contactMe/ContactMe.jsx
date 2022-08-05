import React, {useRef} from "react";
import "./ContactMe.css";
import emailjs from '@emailjs/browser';

var data = [
  {
    type: "Email",
    note: "sharmanitesh920@gmail.com",
    link: "mailto:sharmanitesh920@gmail.com",
  },
  {
    type: "WhatsApp",
    note: "9319830149",
    link: "https://api.whatsapp.com/send?phone=+919319830149",
  },
];

const ContactMe = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ajlybo', 'template_evfdqub', form.current, '5y_3wXJ70CQnEAVMx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };


  return (
    <div id="contact">
      <div className="contactMe_header">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact_div">
        <div className="contact_methods">
          {data.map((datas) => (
            <div>
              <h3>{datas.type}</h3>
              <h5>{datas.note}</h5>
              <a href={datas.link} target="_blank"><h5>Send Message</h5></a>
            </div>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact_form">
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows='7' placeholder="Your Message" required />
          <button className="btn" type="submit" value="Send" >Send Message</button>
          
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default ContactMe;

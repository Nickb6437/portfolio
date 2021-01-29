import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./stylesheets/contact.css"

function Contact(props) {

  const [contact, setContact]=useState({
    name: "",
    email: "",
    message:"",
    sent: false,  
  });

    function handleChange(event)  {
    const { name, value } = event.target;

      setContact((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }

    function submitMessage(e)  {
      e.preventDefault();

      if ((contact.name) === "") {
        alert("Please enter your name");
      } else if ((contact.message) === "") {
        alert("Please enter type your message");
      } else if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(contact.email) === true) {
        
        setContact({
          name:"",
          email:"",
          message:""
        });

        console.log(contact)
  
        Axios.post("https://portfolio-contactform.herokuapp.com/email", {contact})
          .then( res => {
            if (res.data.success === true) {
              setContact({
                sent: true 
              })
              console.log("sent")
            } else { 
              console.log("Message failed")
            }
          })
          .catch( (err) => {
            console.log('Message not sent' + err);
          });

      } else {
        alert('Please enter valid email adress');
      };
    };

    return (

      <div className="container">
        <h2 className="contact-title">Contact me, I'd love to hear from you</h2>

          <div className="contactForm">
              <Form>

                <Form.Group >
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control onChange={handleChange} id="name" name="name" type="text" placeholder="Your name" value={contact.name} />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control onChange={handleChange} id="email" name="email" type="email" placeholder="Your Email" value={contact.email} />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">Your message</Form.Label>
                  <Form.Control  onChange={handleChange} id="message" name="message" as="textarea" rows="3" placeholder="Your message" value={contact.message} />
                </Form.Group>

                <Button onClick={submitMessage} className="d-inlinne-block" size="lg" variant="primary" type="submit" >Send</Button>
                
                {contact.sent === true ? <strong>Email Sent</strong> : <strong>Email Not Sent</strong> }
                                
              </Form> 
          </div>

      </div>
    );

} 
   
export default Contact;
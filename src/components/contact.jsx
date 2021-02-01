import React, { useReducer} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./stylesheets/contact.css"

const initialState = { clicked: false };

function reducer(state, action) {
  switch (action.type) {
    case "SENT STATUS":
      return { sent: !state.sent };
    default:
      throw new Error();
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nameRef = React.useRef();
  const messageRef = React.useRef();
  const emailRef = React.useRef();

  function submitMessage(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const message = messageRef.current.value;
    const email = emailRef.current.value;
    const contact = { name, email, message };

    if (name === "") {
      alert("Please enter your name");
    } else if (message === "") {
      alert("Please enter type your message");
    } else if (
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) ===
      false
    ) {
      alert("Please enter valid email adress");
    } else {
      Axios.post("https://portfolio-contactform.herokuapp.com/email", {contact})
        .then((res) => {
          if (res.data.success === true) {
            dispatch({ type: "SENT STATUS" });
            console.log("sent");
          } else {
            console.log("Message failed");
          }
        })
        .catch((err) => {
          console.log("Message not sent" + err);
        });
    }
  }

  return (
    <div className="container">
      <h2 className="contact-title">Contact me, I'd love to hear from you</h2>

      <div className="contactForm">
        <Form>
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your name"
              ref={nameRef}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Your Email"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Your message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows="3"
              placeholder="Your message"
              ref={messageRef}
            />
          </Form.Group>

          <Button
            onClick={submitMessage}
            className="d-inlinne-block"
            size="lg"
            variant="primary"
            type="submit"
          >
            Send
          </Button>

          {state.sent ? (
            <strong>Email Sent</strong>
          ) : (
            <strong>Email Not Sent</strong>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Contact;
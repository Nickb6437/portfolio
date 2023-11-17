import React, { useReducer} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "../stylesheets/contact.css"

const initialState = { clicked: false };

function reducer(state, action) {
  switch (action.type) {
    case "SENT":
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
    const flashMessage = document.querySelector(".flash-message");

    flashMessage.classList.remove("hidden");

    if (name === "") {
      flashMessage.innerHTML ="Please enter your name";
    } else if (
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) ===
      false
    ) {
      flashMessage.innerHTML = "Please enter a valid email adress";
    } else if (message === "") {
      flashMessage.innerHTML = "Please leave your message";
    }  else {
      Axios.post("https://portfolio-contactform.herokuapp.com/email", {contact})
        .then((res) => {
          if (res.data.success === true) {
            dispatch({ type: "SENT" });
            flashMessage.innerHTML = "Your message has been sent!";
          }
        })
        .catch((err) => {
          dispatch({ type: "ERROR" });
          flashMessage.innerHTML = "something went wrong. Please try again." + err;
        });
    }
  }

  return (
    <div className="container-contact">
      <div className="container-contact__content">
        <h2 className="container-contact__title">Contact me!</h2>
        <h4 className="container-contact__subtitle">I'd love to hear from you</h4>
        <p className="container-contact__body">
          If you have any questions, would like coloberate on a project or have job opprituinty, please feel
          free contact me. I will get back to you as soon as I can.
        </p>
      </div>

      <div className="container-contact__form">
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

          <div className="container-contact__form-footer">
            <div className={`flash-message hidden ${state.sent ? 'flash-message__success' : 'flash-message__error'}`}>
            </div>
        
            <Button
              onClick={submitMessage}
              className="container-contact__button"
              type="submit"
            >
              Send
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default Contact;
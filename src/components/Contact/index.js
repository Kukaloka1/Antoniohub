import { useRef } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      () => {
        toast.success('Message successfully sent!', {
          position: 'bottom-center',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 3900);
      },
      () => {
        toast.error('Failed to send the message, please try again', {
          position: 'bottom-center',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
          Are you looking for someone passionate about technology and driven to grow alongside an innovative team? I am actively seeking opportunities to contribute to ambitious projects and expand my skills. If your company values a collaborative spirit and the pursuit of excellence, I would be thrilled to discuss how we can drive success together. Please don't hesitate to reach out using the form below with any inquiries or to start a conversation about potential collaborations.

          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;

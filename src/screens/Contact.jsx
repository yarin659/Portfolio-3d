import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Background from "../three/Background.jsx"; // הקוד שלך
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hgnlg58",
        "template_5k9726m",
        form.current,
        "PAp2oEZGM1LNA0rmx"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=yarin659@gmail.com`;
  const phoneNumber = "050-2106216"; 

  return (
    <Wrapper>
      <Background />
      <Content>
        <h2>Let’s Talk</h2>
        <p>I’d love to hear from you — whether it’s a project idea, collaboration, or just a chat.</p>

        <ContactInfo>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer">
            yarin659@gmail.com
          </a>

          <SocialLinks>
            <a href="http://linkedin.com/in/yarincohen123" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} /><span>LinkedIn</span>
            </a>
            <a href="https://github.com/yarin659" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} /><span>GitHub</span>
            </a>
            <a href={`tel:${phoneNumber.replace(/-/g, "")}`}>📞 {phoneNumber}</a>
          </SocialLinks>
        </ContactInfo>

        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;

// ====== STYLED COMPONENTS ======
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: #fff;
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.2); 
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    color: #FFD700;
    text-decoration: none;
    font-weight: bold;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      color: #FFD700;
      transform: scale(1.05);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;

  input, textarea {
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  button {
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 12px;
    background: #FFD700;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #FFD70099;
    }
  }

  .status {
    text-align: center;
    color: #00FFFF;
    font-weight: bold;
  }
`;

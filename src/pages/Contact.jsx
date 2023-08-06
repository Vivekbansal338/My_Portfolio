// import React from "react";
// import "./Contact.scss";
// import { Input } from "@nextui-org/react";

// const Contact = () => {
//   const colors = [
//     "default",
//     "primary",
//     "secondary",
//     "success",
//     "warning",
//     "danger",
//   ];

//   const formattributes = [
//     {
//       type: "text",
//       color: "secondary",
//       label: "Name",
//       placeholder: "Enter your name",
//       defaultValue: "",
//       className: "max-w-1/2",
//     },
//     {
//       type: "email",
//       color: "secondary",
//       label: "Email",
//       placeholder: "Enter your email",
//       defaultValue: "",
//       className: "max-w-1/2",
//     },
//     {
//       type: "tel",
//       color: "secondary",
//       label: "Contact No",
//       placeholder: "Enter your contact no",
//       defaultValue: "",
//       className: "max-w-1/2",
//     },
//     {
//       type: "text",
//       color: "secondary",
//       label: "Message",
//       placeholder: "Enter your message",
//       defaultValue: "",
//       className: "max-w-1/2",
//     },
//   ];
//   return (
//     <section id="contact" className="app__contact">
//       <div className="app__contact-header">
//         <h1>
//           Contact <span className="highlight">Me</span>
//         </h1>
//       </div>
//       <div className="app__contact-container">
//         <div className="app__contact-left">
//           <div className="app-title">
//             <span>CONTACT</span>
//             <span>INFO</span>
//           </div>
//           <div className="app-contact">CONTACT INFO : +917082309833</div>
//         </div>
//         <div className="app__contact-right">
//           <div className="app-form">
//             {formattributes.map((formdata, index) => (
//               <Input
//                 key={index}
//                 type={formdata.type}
//                 color={formdata.color}
//                 label={formdata.label}
//                 placeholder={formdata.placeholder}
//                 defaultValue={formdata.defaultValue}
//                 className={formdata.className}
//               />
//             ))}
//             {/* <div className="app-form-group">
//               <input
//                 className="app-form-control"
//                 type="text"
//                 placeholder="NAME"
//               />
//             </div>
//             <div className="app-form-group">
//               <input
//                 className="app-form-control"
//                 type="email"
//                 placeholder="EMAIL"
//               />
//             </div>
//             <div className="app-form-group">
//               <input
//                 className="app-form-control"
//                 type="tel"
//                 placeholder="CONTACT NO"
//               />
//             </div>
//             <div className="app-form-group message">
//               <input
//                 className="app-form-control"
//                 type="text"
//                 placeholder="MESSAGE"
//               />
//             </div> */}
//             <div className="app-form-group buttons">
//               <button className="app-form-button">CANCEL</button>
//               <button className="app-form-button">SEND</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import "./Contact.scss";
import { Input } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { BiLogoGmail, BiPhoneCall } from "react-icons/bi";
import SocialMediaCard from "../components/SocialMedia/SocialMediaCard";
import { SiGeeksforgeeks } from "react-icons/si";
const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const socialMediaColors = {
  Facebook: "#1877F2",
  Whatsapp: "#25D366",
  Linkedin: "#2867B2",
  Github: "#333",
  Geeksforgeeks: "#0F9D58",
};

const Contact = () => {
  const openWhatsAppChat = (phone, message) => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactNoRef = useRef(null);
  const messageRef = useRef(null);
  const formattributes = [
    {
      type: "text",
      color: "primary",
      label: "Name",
      placeholder: "Enter your name",
      defaultValue: "",
      className: "max-w-1/2",
      ref: nameRef,
    },
    {
      type: "email",
      color: "secondary",
      label: "Email",
      placeholder: "Enter your email",
      defaultValue: "",
      className: "max-w-1/2",
      ref: emailRef,
    },
    {
      type: "tel",
      color: "success",
      label: "Contact No",
      placeholder: "Enter your contact no",
      defaultValue: "",
      className: "max-w-1/2",
      ref: contactNoRef,
    },
    {
      type: "text",
      color: "warning",
      label: "Message",
      placeholder: "Enter your message",
      defaultValue: "",
      className: "max-w-1/2",
      ref: messageRef,
    },
  ];
  const socialmedia = [
    {
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?phone=+917082309833&text=Hi%20Vivek%20Bansal",
      color: "#25D366",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/vivek-bansal-622a8a1b9",
      color: "#2867B2",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Vivekbansal338",
      color: "#333",
    },
    {
      icon: SiGeeksforgeeks,
      link: "https://auth.geeksforgeeks.org/user/vivekb379/practice",
      color: "#0F9D58",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/vivek_bansal338/",
      color: "#E1306C",
    },
    {
      icon: BiLogoGmail,
      link: "mailto:vivekbansal338@gmail.com",
      color: "#D44638",
    },
    {
      icon: BiPhoneCall,
      link: "tel:+917082309833",
      color: "#0F9D58",
    },
  ];

  const handlesubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const contactNo = contactNoRef.current.value;
    const message = messageRef.current.value;
    if (!name || !email || !contactNo || !message) {
      return toast.error("Please fill all the fields");
    }

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nContact No: ${contactNo}\nMessage: ${message}`;
    const phoneNumber = "+917082309833";
    openWhatsAppChat(phoneNumber, whatsappMessage);
    handleclear();
  };

  const handleclear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactNoRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section id="contact" className="app__contact">
      <div className="app__contact-header">
        <h1>
          Contact <span className="highlight">Me</span>
        </h1>
      </div>
      <div className="app__contact-container">
        <div className="app__contact-left">
          <div className="app-form">
            {formattributes.map((formdata, index) => (
              <Input
                isClearable
                isRequired
                key={index}
                type={formdata.type}
                color={formdata.color}
                label={formdata.label}
                placeholder={formdata.placeholder}
                defaultValue={formdata.defaultValue}
                className={formdata.className}
                ref={formdata.ref}
                size={formdata.label === "Message" ? "lg" : "md"}
              />
            ))}
            <div className="app-form-group buttons">
              <Button color="success" onClick={handlesubmit}>
                <FaWhatsapp />
                Whatsapp Me
              </Button>
              <Button
                color="danger"
                onClick={handleclear}
                className="px-[50px]"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div className="app__contact-right">
          <div className="app-socialmedia">
            {socialmedia.map((social, index) => (
              <SocialMediaCard key={index} carddata={social} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

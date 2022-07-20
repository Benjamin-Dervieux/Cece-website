import style from "./contact.module.css";
import Layout from "../../components/Layout/Layout";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Layout>
      <div>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className={style.input}
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            className={style.input}
            type="text"
            name="phone number"
            placeholder="Your Phone Number"
            required
          />
          <input
            className={style.input}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            className={style.textarea}
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className={style.formBtn}>
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

/* eslint-disable @next/next/no-img-element */
import style from "./contact.module.css";
import Layout from "../../components/Layout/Layout";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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

        <div className={style.fraise}>
          <img src="/images/fraise.png" alt="strawberry" />
        </div>

        <div className={style.displayLinks}>
          <div className={style.link}>
            <Link href="https://fr-fr.facebook.com/">
              <a>
                <img src="/images/fb.png" alt="strawberry" />
              </a>
            </Link>
          </div>
          <div className={style.link}>
            <Link href="https://www.instagram.com/?hl=fr">
              <a>
                <img src="/images/insta.png" alt="strawberry" />
              </a>
            </Link>
          </div>
          <div className={style.link}>
            <Link href="https://twitter.com/?lang=fr">
              <a>
                <img src="/images/twitter.png" alt="strawberry" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

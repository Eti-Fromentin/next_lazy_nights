import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

import styles from '../styles/ContactUs.module.css';

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm('service_4eut92z', 'template_kkdwg3s', form.current, 'user_Blq82a6SwXzdJxeYb8dc6').then(
    //   (result) => {
    //     window.alert(result.text);
    //   },
    //   (error) => {
    //     window.alert(error.text);
    //   },
    // );
    // window.alert('thank you for your message');
  };

  return (
    <div className={styles.ContactUsForm}>
      <h2 className={styles.ContactUsTitle}>Contact us</h2>
          <p className={styles.ContactUsText}>
            Any questions, requests, wishes or just to say you love our concept,
            feel free to contact us!
          </p>
      <form ref={form} onSubmit={sendEmail} className={styles.email}>
        <label htmlFor="ContactUsName" >
         <h3> Name</h3>
        </label>
        <input type="text" name="user_name" placeholder="Lastname Firstname" className={styles.ContactUsInput} />
        <label htmlFor="ContactUsEmail" >
         <h3> Email</h3>
        </label>
        <input type="email" name="user_email" placeholder="Email" className={styles.ContactUsInput} />
        <label htmlFor="ContactUsMessage" >
          <h3>Message</h3>
        </label>
        <textarea name="message" placeholder="Your message here" className={styles.ContactUsInput} />
        <input type="submit" value="Send" className={styles.ContactUsbtn} />
      </form>
    </div>
  );
}

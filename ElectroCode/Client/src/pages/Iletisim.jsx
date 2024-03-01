import React, { useState } from "react";
import FormInput from "../Components/FormInput";
import inputs from "../inputs";
import {faker} from "@faker-js/faker"

function iletisim() {
  let [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  let inputsArray = inputs.map((item) => (
    <FormInput
      {...item}
      key={item.id}
      value={message[item.name]}
      onChange={handleChange}
    />
  ));

  console.log(message);

  return (
    <section className="iletisimPage">
      <div className="iletisim__title">
        <h1>Iletisim</h1>
      </div>

      <div className="iletisim">
        <div className="iletisim__info">
          <h2>Iletisim detaylari </h2>

         <p>
         <b> Bitlis : </b>
         Bitlis Merkez Hüsrev Paşa Mahallesi 1225. Sokak No:2C İç Kapı No: 12 
         </p>
         <p>
         <b> iletisim : </b>
          05389305515
         </p>
         <p>
         <b> Email : </b>
          aboosh.sa262000@gmail.com 
         </p>

        </div>
        <form className="iletisim__form">{inputsArray}
        
        
        <textarea
          name="message"
          value={message.message}
          onChange={handleChange}
          placeholder="Your Message"
        ></textarea>
        <button className="form__button">Send</button>
        </form>
      </div>
    </section>
  );
}

export default iletisim;

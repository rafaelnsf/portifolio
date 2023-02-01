import "../styles/components/contactus.sass";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs.send("service_4sozxa8", "template_jmdhwzu", templateParams, "Wt-mG9sj-qvXMEwny").then(
      (response) => {
        console.log("Email enviado!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        console.log("Erro: ", err);
      }
    );
  }

  return (
    <section className="contactus-container">
      <h2>Fale Comigo</h2>
      <div className="contactus-screen">
        <div className="contactus-screen-body">
          <div className="contactus-screen-body-item left">
            <p>
              Eu adoraria ouvi-lo, quer queira discutir novas oportunidades, falar sobre meus projetos, dar algum
              feedback ou apenas bater um papo.
            </p>
            <p>Basta me enviar sua mensagem através do formulário à direita e retornarei o mais breve possível.</p>
          </div>
          <div className="contactus-screen-body-item">
            <form className="contactus-form" onSubmit={sendEmail}>
              <div className="contactus-form-group">
                <input
                  className="contactus-form-control"
                  placeholder="Nome"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="contactus-form-group">
                <input
                  className="contactus-form-control"
                  placeholder="E-mail"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="contactus-form-group message">
                <textarea
                  rows={5}
                  className="contactus-form-control"
                  placeholder="Mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <div className="contactus-form-group buttons">
                <button type="submit" className="btnSend">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

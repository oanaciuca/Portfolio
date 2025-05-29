import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_xs71d6i';
const TEMPLATE_ID = 'template_xsfsa9m';
const PUBLIC_KEY  = 'yPZ3to4H1enc3wzpz';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name:    form.name,
        email:   form.email,
        message: form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('✅ Merci ! Votre message a bien été envoyé.');
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus("❌ Oups, une erreur s'est produite. Réessayez plus tard.");
    });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section__title">ME CONTACTER</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <label>
          Nom
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Envoyer</button>
      </form>

      {status && <p className="contact__status">{status}</p>}
    </section>
  );
}

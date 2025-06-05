import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_xs71d6i';
const TEMPLATE_ID = 'template_xsfsa9m';
const PUBLIC_KEY  = 'yPZ3to4H1enc3wzpz';

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', message: '' });
  const [status, setStatus]     = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Merci de remplir tous les champs avant d’envoyer.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("L'adresse email n'est pas valide.");
      return;
    }

    setStatus('');
    setIsSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setStatus('Merci ! Votre message a bien été envoyé.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Oups, une erreur s'est produite. Réessayez plus tard.");
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section__title">ME CONTACTER</h2>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
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

        <button
          type="submit"
          id="submitButton"
          aria-label="Envoyer le message"
          disabled={isSending}
          className={isSending ? 'sending' : ''}
        >
          Envoyer
        </button>
      </form>

      {status && (
        <p className="contact__status">
          {status}
        </p>
      )}
    </section>
  );
}

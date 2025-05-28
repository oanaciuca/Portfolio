import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Merci ! Votre message a été « envoyé »');
    setForm({ name: '', email: '', message: '' });
  }

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

"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactCTA() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', concern: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { name, age, concern } = formData;
    const text = `Hi, I would like to book an appointment.%0A%0A*Name:* ${name}%0A*Age:* ${age}%0A*Concern:* ${concern}`;
    window.open(`https://wa.me/917738571105?text=${text}`, '_blank');
    setShowForm(false);
    setFormData({ name: '', age: '', concern: '' });
  };

  return (
    <section id="contact-cta">
      <div className="container contact-cta-grid">
        <div>
          <h2>Ready to Start the Next Step in Recovery?</h2>
          <p>
            Schedule a consultation and meet the right team to support your goals with structured, compassionate care.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {!showForm ? (
            <>
              <button
                className="btn"
                onClick={() => setShowForm(true)}
                style={{
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  fontWeight: '700',
                  padding: '14px 32px',
                  boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </button>
              <span style={{ fontSize: '1rem', color: 'var(--quartz)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                1:00 PM - 7:00 PM
              </span>
            </>
          ) : (
            <form onSubmit={handleSend} style={{ width: '100%', minWidth: '350px', background: 'var(--white)', padding: '24px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(9, 44, 86, 0.15)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--navy)', fontSize: '1.25rem', textAlign: 'center', fontWeight: '700' }}>Tell us about yourself</h3>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ width: '75px', fontWeight: '600', color: 'var(--navy)', fontSize: '0.95rem' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: 'inherit', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--quartz)' }}
                  placeholder="Your full name"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ width: '75px', fontWeight: '600', color: 'var(--navy)', fontSize: '0.95rem' }}>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: 'inherit', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--quartz)' }}
                  placeholder="Your age"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px' }}>
                <label style={{ width: '75px', paddingTop: '10px', fontWeight: '600', color: 'var(--navy)', fontSize: '0.95rem' }}>Concern</label>
                <textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  required
                  rows="3"
                  style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '6px', resize: 'vertical', fontFamily: 'inherit', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--quartz)' }}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="submit"
                  className="btn"
                  style={{ flex: 2, background: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '700', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Send to WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{ flex: 1, padding: '12px', background: 'transparent', color: 'var(--navy)', border: '1px solid #ccc', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

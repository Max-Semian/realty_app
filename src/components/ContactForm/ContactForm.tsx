'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreementChecked: false
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    agreement: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = {
      name: formData.name.trim() === '',
      phone: formData.phone.trim() === '',
      agreement: !formData.agreementChecked
    };
    
    setFormErrors(errors);
    
    // If no errors, submit form
    if (!errors.name && !errors.phone && !errors.agreement) {
      console.log('Form submitted:', formData);
      // Here you would typically send data to your server
      alert('Заявка отправлена успешно!');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        agreementChecked: false
      });
    }
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Оставьте заявку</h2>
        <p className={styles.subtitle}>
          Мы ответим на все интересующие вопросы и поможем<br />
          в любых даже самых сложных случаях
        </p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              className={`${styles.input} ${formErrors.name ? styles.inputError : ''}`}
            />
            <div className={`${styles.inputLine} ${formErrors.name ? styles.inputLineError : ''}`}></div>
          </div>
          
          <div className={styles.inputGroup}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ваш телефон"
              className={`${styles.input} ${formErrors.phone ? styles.inputError : ''}`}
            />
            <div className={`${styles.inputLine} ${formErrors.phone ? styles.inputLineError : ''}`}></div>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Отправить заявку
          </button>
        </form>
        
        <div className={styles.agreementCheckbox}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agreementChecked"
              checked={formData.agreementChecked}
              onChange={handleChange}
              className={styles.checkboxInput}
            />
            <span className={`${styles.customCheckbox} ${formErrors.agreement ? styles.checkboxError : ''}`}></span>
            <span className={styles.checkboxText}>
              Я соглашаюсь с обработкой персональных данных
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}

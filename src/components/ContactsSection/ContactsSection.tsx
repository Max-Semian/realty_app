'use client';

import React from 'react';
import styles from './ContactsSection.module.css';

export default function ContactsSection() {
  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши контакты</h2>
        
        <div className={styles.contactsContent}>
          <div className={styles.mapContainer}>
            {/* Map placeholder - replace with actual Google Maps embed code or component */}
            <div className={styles.mapContainer}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.394428302704!2d27.5519!3d53.9045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU0JzE2LjIiTiAyN8KwMzMnMDYuOCJF!5e0!3m2!1sen!2sby!4v1616593424796!5m2!1sen!2sby" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Карта"
                    className={styles.googleMap}
                ></iframe>
                </div>
          </div>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>АДРЕС:</h3>
              <p className={styles.infoText}>
                г.Минск, ул.Немига, д.40, этаж 5,<br />
                пом.16, офис 511
              </p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>ТЕЛЕФОН:</h3>
              <p className={styles.infoText}>
                Ресепшен: <a href="tel:+375445630206" className={styles.infoLink}>+375 (44) 563-02-06</a>
              </p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>НАША ПОЧТА:</h3>
              <p className={styles.infoText}>
                <a href="mailto:asrealt@mail.ru" className={styles.infoLink}>asrealt@mail.ru</a>
              </p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>ИНСТАГРАМ:</h3>
              <p className={styles.infoText}>
                <a href="https://instagram.com/asrealt" className={styles.infoLink}>@asrealt</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
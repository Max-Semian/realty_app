import React from 'react';
import styles from './PropertiesSection.module.css';

export default function PropertiesSection() {
  // This would normally come from an API or data source
  const properties = [
    {
      id: 1,
      image: '/realty_app/property1.jpg', // You'd need to add these images
      title: 'Жилой комплекс "Северный"',
      location: 'Минск, ул. Центральная',
      price: 'от 95,000 BYN'
    },
    {
      id: 2,
      image: '/realty_app/property2.jpg',
      title: 'Жилой комплекс "Восточный"',
      location: 'Минск, ул. Восточная',
      price: 'от 85,000 BYN'
    }
  ];

  return (
    <section id="properties" className={styles.propertiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши объекты</h2>
        
        <div className={styles.propertiesGrid}>
          {properties.map(property => (
            <div key={property.id} className={styles.propertyCard}>
              <div className={styles.propertyImage}>
                {/* Use a placeholder for now */}
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.propertyInfo}>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <p className={styles.propertyLocation}>{property.location}</p>
                <p className={styles.propertyPrice}>{property.price}</p>
                <a href="#" className={styles.propertyButton}>Подробнее</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
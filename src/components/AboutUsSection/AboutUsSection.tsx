'use client';

import React from 'react';
import styles from './AboutUsSection.module.css';

export default function AboutUsSection() {
    return (
      <section className={styles.aboutSection}>
        <div className={styles.container} style={{ marginTop: "60px" }}>
          <div className={styles.header}>
            <h2 className={styles.title}>О нашем агентстве</h2>
          </div>
          
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <div className={styles.textContent}>
                <h3 className={styles.subtitle}>Наша миссия Алексей Симченко - основатель "Агентство AS недвижимости"</h3>
                
                <ul className={styles.bulletPoints}>
                  <li>
                    В 2022 году специалист по недвижимости Алексей Симченко создает бизнес по оказанию риэлторских услуг на рынке города Минска.
                  </li>
                  <li>
                    Стабильное расширение компании и рост штата. Мы гордимся тем, что с нами работают только опытные и высококвалифицированные специалисты.
                  </li>
                  <li>
                    Наша компания заслужила статус надежного партнера, специализирующегося на оказании профессиональных консультаций и помощи в решении вопросов недвижимости.
                  </li>
                </ul>
              </div>
              
              <div className={styles.founderImage}>
              <img 
                  src="/realty_app/Alex2-1.jpg" 
                  alt="Команда агентства" 
                  className={styles.image}
                />
              </div>
            </div>
            
            <div className={styles.teamSection}>
              <div className={styles.teamImage}>
              <img 
                  src="/realty_app/group-1.jpg" 
                  alt="Команда агентства" 
                  className={styles.image}
                />
              </div>
              
              <div className={styles.teamDescription}>
                <h3 className={styles.subtitle}>
                  В январе 2023 года в состав семьи АН "Агентство AS недвижимости" входит новый партнер.
                </h3>
                <p className={styles.paragraph}>
                  История создания любого агентства – это всегда история о том, как человек или группа людей решили заниматься риэлтерской деятельностью. И у каждой такой истории есть свои особенности. Для нас это решение было вполне логичным продолжением нашей деятельности. Мы долгое время работали риэлторами в других компаниях, приобрели опыт и решили открыть свое агентство.
                </p>
                <p className={styles.paragraph}>
                  У нас за плечами большое количество успешных сделок и довольных клиентов. Поэтому мы знаем, как обеспечить для каждого клиента уровень сервиса, который даст максимальный комфорт при проведении сделок с недвижимостью. Важным принципом в нашей работе является профессионализм, который заключается в глубоком знании своего дела, ответственности и трудолюбии.
                </p>
                <p className={styles.paragraph}>
                  Мы не просто помогаем клиентам выбрать жилье или другую недвижимость, наша задача – отыскать для каждого клиента именно тот вариант, который лучше всего соответствует его потребностям и возможностям.
                </p>
              </div>
            </div>
            
            <div className={styles.gallerySection}>
              <div className={styles.galleryItem}>
              <img 
                  src="/realty_app/images/kv1-1.jpg" 
                  alt="Недвижимость пример 1" 
                  className={styles.image}
                />
              </div>
              <div className={styles.galleryItem}>
              <img 
                  src="/realty_app/images/kv2-1.jpg" 
                  alt="Недвижимость пример 2" 
                  className={styles.image}
                />
              </div>
              <div className={styles.galleryItem}>
              <img 
                  src="/realty_app/images/kv3-1.jpg" 
                  alt="Недвижимость пример 3" 
                  className={styles.image}
                />
              </div>
              <div className={styles.galleryItem}>
              <img 
                  src="/realty_app/kv4-1.jpg" 
                  alt="Logo" 
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
'use client';

import React from 'react';
import styles from './AboutUsSection.module.css';

export default function AboutUsSection() {
    return (
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>О нашем агентстве</h2>
          </div>
          
          {/* First subtitle - left aligned */}
          <div className={styles.subtitleContainer} style={{textAlign: 'left'}}>
                <p className={styles.subtitleMain} style={{
                  margin: '0 0 2px 0',
                  fontSize: '24px',
                  fontWeight: 'normal',
                  lineHeight: '1.4',
                  color: 'rgba(255, 255, 255, 0.95)',
                  display: 'block'
                }}>
                  Меня зовут Алексей Симченко - основатель
                </p>
                <p className={styles.subtitleAgency} style={{
                  margin: '0',
                  fontSize: '24px',
                  fontWeight: 'normal',
                  lineHeight: '1.4',
                  color: '#BA9778',
                  display: 'block'
                }}>
                  "Агентства AS недвижимости"
                </p>
          </div>
          <div className={styles.content}>
            <div className={styles.mainContent}>
              
              <div className={styles.textContent}>
                <ul className={styles.bulletPoints}>
                  <li>
                  В 2012 году закончил Минский Институт Управления
                  полный энтузиазма и готовности применить свои знания
                  в реальном мире.
                  </li>
                  <li>
                  В сфере недвижимости я более 15 лет. Работал в агентстве
                  «Дианэст», где очень тесно работал с руководителем,
                  который научил меня не только продажам, но и тому,
                  как строить команду.
                  </li>
                  <li>
                  2017 год стал для меня настоящим поворотным моментом.
                  Я почувствовал, что готов к новым вызовам и решил, что пришло
                  время для роста. С этой целью я начал формировать
                  собственную команду, с которой мы объединились вокруг
                  амбициозной идеи — «Создать то, чего ещё нет».
                  </li>
                </ul>
              </div>
              
              <div className={styles.founderImage} style={{ marginTop: '-120px' }}>
                <img 
                  src="/realty_app/Alex2-1.jpg" 
                  alt="Команда агентства" 
                  className={styles.image}
                />
              </div>
            </div>
            
            {/* Team section with left image and right text */}
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
                  В январе 2025 года я осуществил свою давнюю
                  мечту и создал своё &quot;Агентство AS недвижимости&quot;
                </h3>
                <p className={styles.paragraph}>
                Каждый сотрудник в моей команде — это мой ученик, и я горжусь тем,
                что смог передать им свои знания и опыт. С самого начала я лично
                обучал всех — от специалистов по холодным звонкам до агентов и
                риэлторов . Со временем, когда команда начала расти, я доверил
                обучение специалистов по звонкам своему помощнику – нынешнему
                заместителю директора – Никите Викторовичу Кабышко, который
                прекрасно справился с этой задачей.
                </p>
                <p className={styles.paragraph}>
                Качество нашей работы значительно возросло, и это позволило нам
                оптимизировать команду. Мы сократили количество сотрудников с 20
                до 10 человек, но при этом сохранили тот же уровень оборота и
                количество сделок. Наше агентство — это уникальное сочетание
                молодости и опыта. Несмотря на то, что мы относительно новая компания,
                за нашими плечами более 15 лет успешной работы в сфере недвижимости.
                Мы предлагаем индивидуальный подход к каждому клиенту и гарантируем
                высокое качество услуг. Это позволяет нам не только удовлетворять, но и
                превосходить ожидания наших клиентов.
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
        
        {/* Add responsive styling */}
        <style jsx>{`
          @media (max-width: 992px) {
            div[class*='teamSection'] {
              flex-direction: column;
            }
            
            div[class*='teamImage'] {
              max-width: 100% !important;
              margin-bottom: 20px;
            }
            
            div[class*='teamDescription'] {
              max-width: 100% !important;
            }
          }
          
          @media (max-width: 768px) {
            div[class*='subtitleContainer'] {
              text-align: center !important;
            }
            
            p[class*='subtitleMain'],
            p[class*='subtitleAgency'] {
              font-size: 14px !important;
              text-align: center !important;
            }
            
            div[class*='teamImage'] img {
              width: 100%;
            }
          }
        `}</style>
      </section>
    );
  }
'use client';

import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';

interface Testimonial {
  id: number;
  author: string;
  date: string;
  content: string;
}

export default function TestimonialsCarousel() {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Елена Арманская',
      date: '15.02.2025',
      content: 'Хочу выразить огромную благодарность руководителю агентства Алексею Симченко и его команде за максимально быстрое решение квартирного вопроса. Спасибо Вам за поддержку, профессионализм и внимательное отношение к клиентам. Успехов и процветания Вашему агентству.'
    },
    {
      id: 2,
      author: 'Елена Арманская',
      date: '15.02.2025',
      content: 'Хочу выразить огромную благодарность руководителю агентства Алексею Симченко и его команде за максимально быстрое решение квартирного вопроса. Спасибо Вам за поддержку, профессионализм и внимательное отношение к клиентам. Успехов и процветания Вашему агентству.'
    },
    {
      id: 3,
      author: 'Елена Арманская',
      date: '15.02.2025',
      content: 'Хочу выразить огромную благодарность руководителю агентства Алексею Симченко и его команде за максимально быстрое решение квартирного вопроса. Спасибо Вам за поддержку, профессионализм и внимательное отношение к клиентам. Успехов и процветания Вашему агентству.'
    },
    {
      id: 4,
      author: 'Иван Петров',
      date: '10.02.2025',
      content: 'Выражаю благодарность команде агентства за помощь в продаже моей квартиры. Все было организовано на высшем уровне, с соблюдением всех сроков. Отдельное спасибо риэлтору Татьяне за профессионализм и отзывчивость.'
    },
    {
      id: 5,
      author: 'Мария Иванова',
      date: '05.02.2025',
      content: 'Благодарю сотрудников агентства за помощь в покупке моей первой квартиры. Весь процесс от начала до конца был прозрачным и четким. Очень рада, что доверила решение такого важного вопроса профессионалам.'
    },
    {
      id: 6,
      author: 'Александр Петров',
      date: '20.01.2025',
      content: 'Профессиональный подход, внимательность к деталям и отличное знание рынка недвижимости - вот что отличает это агентство от других. Рекомендую всем, кто ищет надежного партнера в вопросах недвижимости.'
    }
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Now showing 3 testimonials per slide as in the screenshot
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);
  
  // Navigation handlers
  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev <= 0 ? totalSlides - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev >= totalSlides - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Отзывы клиентов</h2>
          <div className={styles.navigation}>
            <button 
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button 
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              // Get the testimonials for this slide
              const slideTestimonials = testimonials.slice(
                slideIndex * testimonialsPerSlide,
                (slideIndex + 1) * testimonialsPerSlide
              );
              
              return (
                <div key={slideIndex} className={styles.carouselSlide}>
                  <div className={styles.testimonialGroup}>
                    {slideTestimonials.map((testimonial, index) => (
                      <div key={testimonial.id} className={styles.testimonialCard}>
                        <div className={styles.testimonialHeader}>
                          <h3 className={styles.testimonialAuthor}>{testimonial.author}</h3>
                          <span className={styles.testimonialDate}>{testimonial.date}</span>
                        </div>
                        <p className={styles.testimonialContent}>{testimonial.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={styles.leaveCommentContainer}>
          <button className={styles.leaveCommentButton}>
            Оставить комментарий
          </button>
        </div>
      </div>
    </section>
  );
}
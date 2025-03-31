'use client';

import React from 'react';
import styles from './TeamSection.module.css';
import CardCarousel from '../CardCarousel/CardCarousel';
import TeamMemberCard, { TeamMemberProps } from '../TeamMemberCard/TeamMemberCard';

// Import your team member images
import member1 from './assets/member1.png';
import member2 from './assets/member2.png';
import member3 from './assets/member3.png';
import member4 from './assets/member4.png';

export default function TeamSection() {
  // Team member data
  const teamMembers: TeamMemberProps[] = [
    {
      id: 1,
      image: member1.src,
      name: 'Симченко Алексей Александрович',
      position: 'Учредитель,',
      subPosition: 'директор, риэлтер',
      reviewsLink: '#'
    },
    {
      id: 2,
      image: member2.src,
      name: 'Кабышко Никита Викторович',
      position: 'Заместитель',
      subPosition: ' директора, риэлтер',
      reviewsLink: '#'
    },
    {
      id: 3,
      image: member3.src,
      name: 'Симченко Евгения Андреевна',
      position: 'Риэлтер',
      reviewsLink: '#'
    },
    {
      id: 4,
      image: member4.src,
      name: 'Соловьева Татьяна Михайловна',
      position: 'Риэлтер',
      reviewsLink: '#'
    },
    // Add more team members if needed
    {
      id: 5,
      image: member1.src, // Reusing image as placeholder
      name: 'Иванов Иван Иванович',
      position: 'Риэлтер',
      reviewsLink: '#'
    },
    {
      id: 6,
      image: member2.src, // Reusing image as placeholder
      name: 'Петров Петр Петрович',
      position: 'Юрист',
      reviewsLink: '#'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <CardCarousel 
          title="Специалисты" 
          itemsPerView={4}
          showDots={false} /* Hide dots to match Figma design */
        >
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
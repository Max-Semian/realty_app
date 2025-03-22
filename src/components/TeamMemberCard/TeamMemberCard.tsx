'use client';

import React from 'react';
import styles from './TeamMemberCard.module.css';

export interface TeamMemberProps {
  id: number;
  image: string;
  name: string;
  position: string;
  subPosition?: string;
  details?: string;
  reviewsLink?: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  image,
  name,
  position,
  subPosition,
  details,
  reviewsLink
}) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={`${name} - ${position}`} 
          className={styles.memberImage}
        />
      </div>
      <div className={styles.memberInfo}>
        <div className={styles.positionInfo}>
          {position}
          {subPosition && (
            <>
              , <span className={styles.subPosition}>{subPosition}</span>
            </>
          )}
        </div>
        <h3 className={styles.memberName}>{name}</h3>
        {details && <p className={styles.memberDetails}>{details}</p>}
        {reviewsLink && (
          <a href={reviewsLink} className={styles.reviewsLink}>
            Смотреть отзывы <span className={styles.arrow}>→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
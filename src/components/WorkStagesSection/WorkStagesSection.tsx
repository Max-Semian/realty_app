'use client';

import React from 'react';
import styles from './WorkStagesSection.module.css';

interface WorkStage {
  id: string;
  number: string;
  title: string;
  description: string;
}

export default function WorkStagesSection() {
  const workStages: WorkStage[] = [
    {
      id: 'stage1',
      number: '01',
      title: 'Оценка и подготовка объекта',
      description: 'На первом этапе мы проводим оценку рыночной стоимости объекта и подготавливаем его к продаже, включая профессиональную фотосъемку и создание привлекательного описания.'
    },
    {
      id: 'stage2',
      number: '02',
      title: 'Разработка маркетинговой стратегии',
      description: 'Мы создаем индивидуальную стратегию продвижения, которая включает использование онлайн-площадок, баз данных и других каналов, чтобы максимально увеличить охват потенциальных покупателей.'
    },
    {
      id: 'stage3',
      number: '03',
      title: 'Организация показов и работа с покупателями',
      description: 'Мы организуем показы объекта для заинтересованных покупателей и активно работаем с базой данных агентства для поиска подходящих клиентов, обеспечивая предоставление всей необходимой информации.'
    },
    {
      id: 'stage4',
      number: '04',
      title: 'Переговоры и согласование условий',
      description: 'Мы ведем переговоры с потенциальными покупателями, чтобы согласовать условия сделки, включая цену и сроки, защищая интересы наших клиентов на каждом шаге.'
    },
    {
      id: 'stage5',
      number: '05',
      title: 'Проверка документов и заключение сделки',
      description: 'На завершающем этапе мы тщательно проверяем все документы, подготавливаем необходимые справки и организуем подписание договора купли-продажи, закрытую сделку и обеспечиваем безопасность расчетов.'
    }
  ];

  return (
    <section id="stages" className={styles.workStagesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Этапы работы</h2>
        
        <div className={styles.stagesContainer}>
          {workStages.map((stage) => (
            <div key={stage.id} className={styles.stageRow}>
              <div className={styles.stageNumberCol}>
                <div className={styles.stageNumber}>{stage.number}</div>
              </div>
              <div className={styles.stageTitleCol}>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
              </div>
              <div className={styles.stageDescriptionCol}>
                <p className={styles.stageDescription}>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
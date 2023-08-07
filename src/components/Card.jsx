import React from 'react'
import { useTranslation } from 'react-i18next'

function Card({ title, description, mockup, repo, demo, technologies, direction, pos }) {
  const [t, i18n] = useTranslation("global");


  return (
      <div 
      className={`card card--${direction}`}
      data-animation="slide-down-blurred"
      role="listitem" aria-label={title}
      >
        <div className="card__info">
          <div className="card__info-container">
            <div className="card__info-title">
              <h2
                data-section="projects"
                data-value="first-card-title"
              >
              { t(`projects.${pos}.title`) }
              </h2>
            </div>
            <div className="card__info-description">
              <p
                data-section="projects"
                data-value="first-card-description"
              >
              { t(`projects.${pos}.description`) }
              </p>
            </div>
          </div>
        
          <div className="card__links">
            <a href={repo} target="_blank" className='card-icon'>
              <div>
                <img src="/icons/github.svg" alt={t('projects.alt.links.repo')} className='card-icon__sm' loading='lazy'/>
              </div>
            </a>
            {
              demo ? (
                <a href={demo ? demo : null} target="_blank" className='card-icon'>
                  <div>
                    <img src="/icons/link.svg" alt={t('projects.alt.links.demo')} className='card-icon__sm' loading='lazy'/>
                  </div>
                </a>
              ) : null
            }
          </div>
          <div className="card-techs">
            {
              technologies.map((tech, index) => (
                <p className='card-techs__item' key={index}>{tech}</p>
              ))
            }
          </div>
        </div>

        <img
          src={mockup}
          alt={title}
          className={`card__image card__image--${direction}`}
          loading="lazy"
          aria-hidden="true"
        />
    </div>
  )
}

export default Card

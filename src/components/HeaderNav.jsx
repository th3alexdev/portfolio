import React from 'react'
import { useTranslation } from 'react-i18next'

function HeaderNav({ on, toggle }) {

  const [t, i18n] = useTranslation('global');

  return (
    <>
      <div className='burger-pos'>
        <button aria-label={t('header.aria.menu.open')}>
          <img className='burger-pos-btn icon-med' src='/public/icons/menu.svg' alt='Menu' onClick={toggle} />
        </button>
      </div>
      <nav id='headerNav' className={`header-nav ${on ? 'header-nav--active' : ''}`} role='navigation' aria-label='Main navigation'>
        <button className='header-nav-toggle-btn' aria-label={t('header.aria.menu.close')}>
          <img className='icon icon-med' src='/public/icons/close.svg' alt='Close Icon' onClick={toggle} />
        </button>
        <button 
          data-tooltip={t('header.tooltip.lang')} aria-label={t('header.tooltip.lang')} 
          className='header-nav__btn tooltip header-nav-switch-lang' 
          onClick={() => i18n.changeLanguage( t('header.lang') === 'ES' ? 'EN' : 'ES')}
        >
          <p className='mirror-bg'>{t('header.lang')}</p>
        </button>
        <ul className='navbar mirror-bg' role='menubar' >
          <li className='navbar__item' role='menuitem'>
            <a className='link link--nav' href='#home' aria-controls='projects'>
              <span className='navbar__title'>{t('header.home')}</span>
            </a>
          </li>
          <li className='navbar__item' role='menuitem'>
            <a className='link link--nav' href='#projects' aria-controls='projects'>
              <span className='navbar__title'>{t('header.projects')}</span>
            </a>
          </li>
          <li className='navbar__item' role='menuitem'>
            <a className='link link--nav' href='#about' aria-controls='about'>
              <span className='navbar__title'>{t('header.about')}</span>
            </a>
          </li>
          <li className='navbar__item' role='menuitem'>
            <a className='link link--nav' href='#contact' aria-controls='contact'>
              <span className='navbar__title'>{t('header.contact')}</span>
            </a>
          </li>
        </ul>
        <a 
          href='https://drive.google.com/file/d/1VjgsjJ6tcGK0EOA0jecl8geDnz2a-HoH/view?usp=sharing' target='_blank'
          className='link main-link mirror-bg tooltip header-nav__btn header-nav-view-resume' 
          data-tooltip={t('header.tooltip.resume')} role='button'>
            <span>{t('header.resume')}</span>
        </a>
      </nav>
    </>
  )
}

export default HeaderNav

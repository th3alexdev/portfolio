import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

const userLanguage = navigator.language.split('-')[0].toUpperCase();

i18next.init({
  interpolation: { escapeValue: false },
  lng: userLanguage, 
  resources: {
    ES: {
      global: global_es
    },
    EN: {
      global: global_en
    }
  }
})

root.render(
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
)
// app/i18n.ts or lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nConfig from '../next-i18next.config';
import en from '../public/locales/en/common.json';
import ru from '../public/locales/ru/common.json';

// Initialize i18next
i18n
    .use(initReactI18next) // Pass i18next instance to react-i18next
    .init({
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            },
        },
        lng: i18nConfig.i18n.defaultLocale, // Set the default language
        fallbackLng: 'en', // Fallback language if the translation is not available
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;

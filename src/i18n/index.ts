import { createI18n } from 'vue-i18n';
import de from './locales/de.json';
import en from './locales/en.json';

export type MessageSchema = typeof en;

const messages: Record<string, MessageSchema> = { en, de } as const;

const datetimeFormats = Object.fromEntries(
  Object.entries(messages).map((v) => [[v[0]], v[1]._dateTimeFormats])
);

export const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: navigator.language.slice(0, 2),
  datetimeFormats,
  messages
});

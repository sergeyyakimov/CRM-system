import store from '../store';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

const locales = {
  'ru-Ru': ru,
  'en-En': en
};

export default function localizeFilter(key) {
  const locale = store.getters.info.locale || 'ru-Ru';
  return locales[locale][key] || `[Localize error]: key ${key} is not found`;
}

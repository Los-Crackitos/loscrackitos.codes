import { init, getLocaleFromNavigator } from 'svelte-i18n';
import App from './App.svelte';
import './components/Tailwind.svelte';
import './i18n';

import '../public/images/home_bg_dark.jpg';
import '../public/images/home_bg_light.jpg';
import '../public/images/jerome.jpg';
import '../public/images/robin.jpg';

const fallbackLocale = 'en-US';
const navigatorLocale = getLocaleFromNavigator();

init({
  fallbackLocale,
  initialLocale: ['en-US', 'fr-FR'].includes(navigatorLocale) ? navigatorLocale : fallbackLocale,
});

const app = new App({
  target: document.body,
});

export default app;

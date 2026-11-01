import { someFunction } from './utils.js'; // Если есть импорты, пути должны быть верными

// Инициализация
vkBridge.send('VKWebAppInit');

vkBridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppInitResult') {
    const user = e.detail.data;
    document.getElementById('app').innerHTML = `Привет, \${user.first_name}!`;
  }
});

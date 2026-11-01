if (e.detail.type === 'VKWebAppInitResult') {
  const user = e.detail.data;
  // Проверка: если имя есть — показываем его, если нет — показываем запасной текст
  const name = user && user.first_name ? user.first_name : 'Гость';
  document.getElementById('app').innerHTML = `Привет, \${name}!`;
}

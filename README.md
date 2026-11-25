# Ким | Full-Stack Developer

Одностраничное портфолио. В папке `public` находятся HTML, CSS, JavaScript и изображения. Сборка и установка зависимостей не нужны.

## Публикация на Cloudflare Pages

1. В панели Cloudflare откройте **Workers & Pages → Create application → Pages → Connect to Git**.
2. Выберите репозиторий `sohalegenda-wq/check-tg-bit` и ветку `main`.
3. Для **Framework preset** выберите **None**. Оставьте поле **Build command** пустым и укажите `public` в **Build output directory**.
4. Нажмите **Save and Deploy**. Адрес появится в панели проекта Pages.

Для ручной загрузки через **Direct Upload** загрузите содержимое папки `public`. Файл `index.html` должен быть в корне загрузки.

## Telegram

Адрес канала задаётся в секции `id="telegram"` файла `public/index.html`. Чтобы указать ссылку, замените абзац `channel-note` на ссылку такого вида и подставьте имя своего канала.

```html
<a class="button" href="https://t.me/your_channel">Открыть канал</a>
```

## Cookies

Кнопка «Принять» сохраняет выбранную настройку в cookie на 180 дней. Кнопка «Отклонить» запоминает отказ до закрытия вкладки и удаляет cookie согласия, если она была. Настройки можно открыть повторно через кнопку внизу страницы.

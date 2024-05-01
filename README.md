# Hacker News VK mini App

## _ID приложения: 51914430_

## [Cсылка на приложение](https://vk.com/app51914430)


## Возможности приложения

- Используя [Hacker News API](https://github.com/HackerNews/API), приложение отображает 100 самых свежих новостей, отсортированных по дате.
- Список новостей обновляется автоматически каждые 60 секунд, имеется кнопка для принудительного обновления.
- По клику на новость происходит переход на страницу просмотра новости.
- На странице просмотра новости комментраии отображены в виде дерева с возможностью развернуть и свернуть дочерние ветки. Реализован функционал принудительного обновления комментариев по кнопке.
- При переходе обратно на список новостей страница дополнительно не обновляется.


## Используемые технологии


- [React](http://react.dev)
- [Vite](https://vitejs.dev/)
- [VK UI](https://vkcom.github.io/VKUI)
- [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge-react)
- [VK icons](https://vkcom.github.io/icons/)
- [Tanstack query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/ru/docs/intro)
- [VK-mini-apps-router](https://github.com/VKCOM/vk-mini-apps-router)
- [VK-mini-apps-deploy](https://dev.vk.com/ru/mini-apps/development/hosting/overview)


## Установка и запуск приложения

Клонировать репозиторий

```sh
git clone https://github.com/otomilova/hn-vk-mini-app.git
```


Установить зависимости и запустить приложение в режиме разработки

```sh
yarn install
yarn dev
```

Развернуть приложение как сервис VK Mini App

```sh
yarn deploy
```

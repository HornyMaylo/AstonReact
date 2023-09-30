# 1 уровень (необходимый минимум)
* Реализованы Требования к функциональности, описанные в прикрепленном документе.

## React
* Пишем функциональные компоненты c хуками в приоритете над классовыми: [Search](./src/components/Search/Search.jsx)
* Есть разделение на умные и глупые компоненты. Пример умного: [Search](./src/components/Search/Search.jsx), пример глупого: [RegistrationPage](./src/pages/RegistrationPage/RegistrationPage.jsx)
* Есть рендеринг списков: [FavoritesPage](./src/pages/FavoritePage/FavoritesPage.jsx)
* Реализована хотя бы одна форма: [RegForm](./src/components/Registration/RegForm.jsx)
* Есть применение Контекст API: [authContext](./src/store/authObserver.jsx)
* Есть применение предохранителя: [ErrorBoundaries](./src/components/ErrorBoundary/ErrorBoundary.jsx)
* Есть хотя бы один кастомный хук: [useGetCurrentUser](./src/hooks/useGetCurrentUser.js)
* Хотя бы несколько компонентов используют PropTypes:  [RegForm](./src/components/Registration/RegForm.jsx) ,[LogForm](./src/components//Login/LogForm.jsx)
* Поиск не должен триггерить много запросов к серверу:  [useDebounce](./src/hooks/useDebounce.js)
* Есть применение lazy + Suspense: [lazy](./src/components/AppWrapper/componentGenerator.jsx) [Suspense](./src/components//AppWrapper/AppWrapper.jsx)

## Redux
* Используем Modern Redux with Redux Toolkit [store](./src/store/store.jsx)
* Используем слайсы: [historySlice](./src/store/slices/historyReducer.jsx)
* Есть хотя бы одна кастомная мидлвара: [historyMiddlwware](./src/store/middlewares/historyMiddleware.jsx)
* Используется RTK Query: [filmsAPI](./src/store/API/films.jsx)
* Используется Transforming Responses:[filmsAPI](./src/store/API/films.jsx)

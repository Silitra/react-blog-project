# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##  Тестирование и обратная связь пользователей

Тестирование проводилось по функциональным и пользовательским сценариям (просмотр списка постов, открытие поста, создание поста и навигация).

Все материалы по тестированию находятся в папке `/testing`:

| Файл | Содержание |
|------|------------|
| `test_plan.md` | План тестирования |
| `test_report.md` | Таблица тест-кейсов и результатов |
| `feedback_summary.md` | Анализ отзывов пользователей |
| `issues.md` | Найденные ошибки и предложения |

### Итоги тестирования
По результатам тестирования были выявлены и учтены предложения:
- Исправлен баг с отправкой формы при пустых полях
- Запланировано увеличение размеров кнопок
- Запланировано добавление предпросмотра поста
- Запланировано добавление автофокуса на поле ввода

Результаты тестирования и исправления будут обновляться по мере развития проекта.

##  Тестирование и обратная связь

Для проекта React Blog было проведено функциональное и пользовательское тестирование основных сценариев:
- просмотр списка постов;
- открытие отдельного поста;
- создание нового поста через форму;
- проверка валидации формы и навигации.

Вся документация по тестированию находится в папке `/testing`:

- `testing/test_plan.md` — план тестирования (цели, типы тестирования, среда и инструменты)
- `testing/test_report.md` — таблица тест-кейсов с ожидаемыми и фактическими результатами
- `testing/feedback_summary.md` — результаты опроса пользователей и выводы
- `testing/issues.md` — список найденных ошибок и предложений по улучшению

### Итоги тестирования
По итогам тестирования были приняты следующие улучшения:
- исправлен баг с отправкой формы при пустых полях;
- запланировано увеличение размеров кнопок;
- запланировано добавление предпросмотра поста;
- запланировано добавление автофокуса на поле ввода при открытии формы.

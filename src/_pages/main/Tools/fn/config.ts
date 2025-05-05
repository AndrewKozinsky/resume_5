export type ToolConfig = {
	toolName: string
	description: string[]
}

export type ToolsConfig = ToolConfig[]

export const toolsConfig: ToolsConfig = [
	{
		toolName: 'JavaScript и TypeScript',
		description: ['С JS работаю с 2015 года. С TS с 2020-го.'],
	},
	{
		toolName: 'React, Next, And Design, SCSS, Redux, Redux Toolkit, Zustand, React Router, Vite, Eslint, Prettier',
		description: [
				'Реакт и сопутствующие технологии 3 года коммерческого и 5 лет использования. Знаю как разделять хуки для упрощения чтения кода и понимания работы компонента.',
				'Next, год коммерческого использования и для своих проектов.',
				'Стили предпочитаю на SCSS. Ранее на CSS-modules.',
				'Состояние: Redux, затем Redux Toolkit, кое-что писал на Контексте и остановился на Zustand-е. ',
				'Для сложной логики подключал XState и проектировал переходы в их редакторе.',
				'React Router для навигации по страницам.',
				'React Query для управления и кешированием запросов. Запросы через Axios.',
				'На Webpack-е настраивал проект для работы с Реактом  (перевод TS в JavaScript, SCSS в CSS, webpack-dev-server, сборка для разработки и публикации, генерация HTML,). В последнее время Vite.',
				'На последнем месте работы брал компоненты из And Design.',
				'Eslint, Prettier для форматирования кода.',
			]
	},
	{
		toolName: 'Express.js, Nest.js',
		description: [
			'Писал обработчики маршрутов REST и GraphQL.',
			'Проектировал как сервер должен отвечать на успешные и ошибочные запросы.',
			'Писал проверки входящих данных чтобы они не конфликтовали с полями в таблицах.',
			'Работаю по CQRS.',
			'Добавлял  OAuth2 (GitHub и Google), капчу, сохранение файлов в облаке'
		],
	},
	{
		toolName: 'Postgres, TypeORM, PrismaORM',
		description: ['Писал сырые запросы для PG. Использовал транзакции и уровни изоляции. Проектировал таблицы. Взаимодействовал с БД через TypeORM и PrismaORM.'],
	},
	{
		toolName: 'MongoDB и Mongoose',
		description: ['Монгу использовал для знакомства с нереляционными БД для написания учебного проекта и в качестве БД для микросервиса файлов.'],
	},
	{
		toolName: 'Тесты, Supertest, Cypress',
		description: [
				'В основном писал e2e. Для Реакта через Cypress, для сервера Jest и Supertest. Для сервера придерживаюсь концепции «Разработка через тестирование».',
			],
	},
	{
		toolName: 'GraphQL',
		description: [
			'Реализовывал GraphQL на сервере (Nest) и клиенте (React). Писал генератор на клиенте для автоматического создания типов и хуков для манипулирования данными.',
		],
	},
	{
		toolName: 'Docker',
		description: [
			'Запускаю проекты в контейнерах. Пишу Dockerfile и docker-compose.yml.',
		],
	},
	{
		toolName: 'Доставка кода',
		description: [
			'Ansible для установки программ. Дженкинс для автоматического разворачивания приложения после коммита в мастер. Развернул собственный домашний сервер.',
		],
	},
	{
		toolName: 'Прочее',
		description: [
			'Читаю документацию на английском.',
			'Есть небольшой опыт просмотра кода новых членов команды с советами как писать лаконичнее и проще.',
		],
	},
]

export type ToolConfig = {
	toolName: string
	description: string[]
}

export type ToolsConfig = ToolConfig[]

export const toolsConfig: ToolsConfig = [
	{
		toolName: 'HTML и CSS',
		description: ['На протяжении 5 лет проектировал UI и внешний вид классических сайтов. Figma/Sketch/Photoshop. Вёрстал классические сайты на HTML и CSS.'],
	},
	{
		toolName: 'JavaScript и TypeScript',
		description: ['JavaScript с 2015 года. TypeScript последние 5 лет.'],
	},
	{
		toolName: 'React, Next, And Design, SCSS, Redux, Redux Toolkit, Zustand, React Router, Vite, Eslint, Prettier',
		description: [
				'Реакт и сопутствующие технологии 3 года коммерческого и 5 лет использования.',
				'Next, 8 месяцев коммерческого использования и для своих проектов.',
				'Стили предпочитаю на SCSS. Ранее на CSS-modules.',
				'Состояние: Redux, затем Redux Toolkit, кое-что писал на Контексте и остановился на Zustand-е как на простом и удобном решении. ',
				'Для сложной логики подключал XState и проектировал переходы в их редакторе, но не понравился.',
				'React Router для навигации по страницам.',
				'React Query для управления и кешированием запросов. Сами запросы через Axios.',
				'На Webpack-е настраивал проект для работы с Реактом  (перевод TS в JavaScript, SCSS в CSS, webpack-dev-server, сборка для разработки и публикации, генерация HTML,). Vite для быстрой сборки экспериментальных проектов.',
				'На последнем месте работы брал компоненты из And Design.',
				'Eslint, Prettier для форматирования кода.',
			]
	},
	{
		toolName: 'Тесты',
		description: [
				'Писал e2e и модульные тесты. В основном на API. Есть опыт тестирования клиентских компонентов.',
			],
	},
	{
		toolName: 'Git, NPM, Docker',
		description: [
				'Git на уровне клонировать, сделать коммит, обновить, слить. Более глубокие знания не потребовались. Работал по git-flow.',
				'Терминал знаю на уровне поставить пакет из NPM, запуск основных команд NPM и Докера.',
				'Запускаю проекты в Докере. Пишу Dockerfile и docker-compose.yml. Разворачивал сайты на сервере.',
			],
	},
	{
		toolName: 'Node.js',
		description: [
			'Для подробностей перейдите на соответствующую страницу через меню сверху.',
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

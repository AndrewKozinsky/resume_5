export type ToolConfig = {
	toolName: string
	description: string[]
}

export type ToolsConfig = ToolConfig[]

export const toolsConfig: ToolsConfig = [
	{
		toolName: 'Express.js',
		description: ['Разрабатывал API блогов с авторизацией, аутентификацией, токенами JWT, отправкой писем.'],
	},
	{
		toolName: 'Nest.js',
		description: ['Перевёл API блогов с Экспресса на Nest и увеличил функционал. Добавил глобальные настройки, фильтр исключений, проверки тела запроса', 'Делал второй проект клона Инстаграма с делением на рабочие пространства, отдельным микросервисом файлов, добавил CQRS, OAuth2 (GitHub и Google), добавил капчу, сохранение файлов в облаке, конфигурацию, переменные окружения. Работал с ВебСокетами.'],
	},
	{
		toolName: 'MongoDB и Mongoose',
		description: ['Писал сырые запросы и через ORM для API блогов. Также Mongoose использовал в качестве БД для микросервиса файлов для проекта клона Инстаграма.'],
	},
	{
		toolName: 'Postgres, TypeORM, PrismaORM',
		description: ['Писал сырые запросы и через TypeORM для API блогов. Для проекта клона Инстаграма взял PrismaORM.'],
	},
	{
		toolName: 'Тесты',
		description: [
				'Писал e2e (в основном) и модульные тесты для API. Придерживаюсь концепции «Проверять не в Постмане, а в тестах»',
			],
	},
	{
		toolName: 'Git, NPM, Docker',
		description: [
				'Git на уровне клонировать, сделать коммит, обновить, слить. Более глубокие знания не потребовались. Работал по git-flow.',
				'Терминал знаю на уровне поставить пакет из NPM, запуск основных команд NPM.',
				'Знаю как запустить проект в Докере. Писал Dockerfile и docker-compose.yml. Разворачивал сайты на сервере.',
				'Читаю документацию на английском.',
			],
	},
	{
		toolName: 'React.js',
		description: [
			'Для подробностей перейдите на соответствующую страницу через меню сверху.',
		],
	},
]
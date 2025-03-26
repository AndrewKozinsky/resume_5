export enum ProjectType {
	client= 'client',
	server= 'server',
	both = 'both',
}

export type ProjectConfig = {
	type: ProjectType
	name: string
	github?: string
	site?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
	{
		type: ProjectType.client,
		name: 'Графический редактор',
		description: [
			'Небольшой графический редактор. Умеет изменять масштаб, перемещать холст, рисовать предопределённых фигуры, изменять заливку и обводку, перемещать, изменять размеры и местоположение.',
		],
		github: 'github.com/AndrewKozinsky/board',
		site: 'explainit.ru',
		technologies: ['HTML', 'SCSS', 'TypeScript', 'Vite', 'React', 'Zustand', 'Pixi.js'],
	},
	{
		type: ProjectType.client,
		name: 'Образовательная платформа Credu',
		description: [
			'Разработка платформы для школ иностранных языков. Создание курсов, уроков, упражнений, ведение учеников, вывод, фильтрация, заказы, статистика успеваемости, сотрудники, профили пользователей, оплаты, конструктор одностраничников, регистрация, вход.',
			'В проекте написал порядка 90% всего клиентского кода.',
			'Видео с описанием функций: [https://youtube.com/@creduplatform]youtube.com/@creduplatform[]',
		],
		technologies: ['HTML', 'TypeScript', 'React', 'Redux', 'Zustand', 'React Query', 'SCSS', 'Axios'],
	},
	{
		type: ProjectType.client,
		name: 'Сайт английского языка',
		github: 'github.com/AndrewKozinsky/explain-full',
		description: [
			'Реализован механизм преобразования макетов Фигмы в компоненты Реакта для формирования интерактивных статей. Сделан тренажёр по переводу предложений на английский.',
		],
		technologies: ['HTML', 'React', 'NestJS', 'SCSS'],
	},
	{
		type: ProjectType.client,
		name: 'Расширение Фигмы переводящее макеты в данные для построения компонентов Реакта',
		github: 'github.com/AndrewKozinsky/figma-to-code',
		description:  ['Перевод макетов в формат данных для формирования статей.'],
		technologies: ['TypeScript'],
	},
	{
		type: ProjectType.client,
		name: 'Система управления знаниями Minerva Learn',
		description:  ['Описание программы на [https://minervasoft.ru/lms]minervasoft.ru[]. Разрабатывал интерактивные компоненты опросников, табличное представление данных, формы проверки знаний, конструкторы статей и так далее.'],
		technologies: ['HTML', 'TypeScript', 'React', 'Redux', 'SCSS'],
	},
	{
		type: ProjectType.client,
		name: 'Обработчик форм',
		github: 'github.com/AndrewKozinsky/modern-react-form',
		technologies: ['React', 'TypeScript'],
	},
	{
		type: ProjectType.both,
		name:  'Редактор Эдиториум',
		github: 'github.com/AndrewKozinsky/editor',
		description:  [
			'Я придумал принцип его работы, нарисовал и написал код.',
			'Объяснение принципа работы на [https://youtube.com/watch?v=2SB0DEwHLqg]youtube.com[]',
			'Не стал продолжать потому что это нет ни времени, ни денег.',
		],
		technologies: ['React', 'Node', 'Next', 'Nest', 'Docker'],
	},
	{
		type: ProjectType.client,
		name:  'Сайт-каталог отопительного оборудования Русхит',
		description:  [
			'Спроектировал, нарисовал и сверстал каталог отопительного оборудования. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [https://rusheat.ru]rusheat.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
	{
		type: ProjectType.client,
		name:  'Сайт-каталог теплоизоляционных материалов K-Flex',
		description:  [
			'Спроектировал, нарисовал и сверстал каталог K-Flex. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [https://kflex.ru]kflex.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
	{
		type: ProjectType.client,
		name:  'Сайт-каталог тепловентиляторов Volcano',
		description:  [
			'Спроектировал, нарисовал и сверстал тепловентиляторов Volcano. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [http://volcano.ru]volcano.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
	{
		type: ProjectType.server,
		name:  'API блогов',
		github: 'github.com/AndrewKozinsky/blogs-nest',
		description: [
			'Взаимодействие с блогами, заметками, комментариями, пользователями. Авторизация и аутентификация. Игра для двоих участников на скорость и количество правильных ответов на вопросы.',
		],
		technologies: ['Nest', 'Postgres'],
	},
	{
		type: ProjectType.server,
		name: 'API клона Инстаграмма',
		github: 'github.com/AndrewKozinsky/inctagram-backend',
		description: [
			'Регистрация, вход пользователей, редактирование профиля, взаимодействие с микросервисом файлов.',
		],
		technologies: ['Nest', 'Postgres', 'Микросервисы'],
	},
	{
		type: ProjectType.both,
		name: 'API сервера взаимодействия с посыльными ящиками',
		github: 'github.com/AndrewKozinsky/parcelBox',
		description: [
			'Регистрация администратора, отправителя, вход пользователей, создание шаблонов ящиков и ячеек, создание и удаление физических ящиков. Концевое тестирование и сервера и клиента.',
		],
		technologies: ['Nest', 'Postgres', 'GraphQL', 'React', 'Zustand', 'Next', 'Docker'],
	},
]

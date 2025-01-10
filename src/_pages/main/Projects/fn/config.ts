export type ProjectConfig = {
	name: string
	github?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
	{
		name: 'Графический редактор',
		description: [
			'Небольшой графический редактор. Умеет изменять масштаб, перемещать холст, рисовать предопределённых фигуры, изменять заливку и обводку, перемещать, изменять размеры и местоположение.',
		],
		github: 'https://github.com/AndrewKozinsky/board',
		technologies: ['HTML', 'SCSS', 'TypeScript', 'Vite', 'React', 'Zustand', 'Pixi.js'],
	},
	{
		name: 'Образовательная платформа Credu',
		description: [
			'Разработка платформы для школ иностранных языков. Создание курсов, уроков, упражнений, ведение учеников, вывод, фильтрация, заказы, статистика успеваемости, сотрудники, профили пользователей, оплаты, конструктор одностраничников, регистрация, вход.',
			'В проекте написал порядка 90% всего клиентского кода.',
			'Видео с описанием функций: [https://youtube.com/@creduplatform]youtube.com/@creduplatform[]',
		],
		technologies: ['HTML', 'TypeScript', 'React', 'Redux', 'Zustand', 'React Query', 'SCSS', 'Axios'],
	},
	{
		name: 'Сайт английского языка',
		github: 'github.com/AndrewKozinsky/explain-full',
		description: [
			'Реализован механизм преобразования макетов Фигмы в компоненты Реакта для формирования интерактивных статей. Сделан тренажёр по переводу предложений на английский.',
		],
		technologies: ['HTML', 'React', 'NestJS', 'SCSS'],
	},
	{
		name: 'Расширение Фигмы переводящее макеты в данные для построения компонентов Реакта',
		github: 'github.com/AndrewKozinsky/figma-to-code',
		description:  ['Перевод макетов в формат данных для формирования статей.'],
		technologies: ['TypeScript'],
	},
	{
		name: 'Система управления знаниями Minerva Learn',
		description:  ['Описание программы на [https://minervasoft.ru/lms]minervasoft.ru[]. Разрабатывал интерактивные компоненты опросников, табличное представление данных, формы проверки знаний, конструкторы статей и так далее.'],
		technologies: ['HTML', 'TypeScript', 'React', 'Redux', 'SCSS'],
	},
	{
		name: 'Обработчик форм',
		github: 'github.com/AndrewKozinsky/modern-react-form',
		technologies: ['React', 'TypeScript'],
	},
	{
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
		name:  'Сайт-каталог отопительного оборудования Русхит',
		description:  [
			'Спроектировал, нарисовал и сверстал каталог отопительного оборудования. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [https://rusheat.ru]rusheat.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
	{
		name:  'Сайт-каталог теплоизоляционных материалов K-Flex',
		description:  [
			'Спроектировал, нарисовал и сверстал каталог K-Flex. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [https://kflex.ru]kflex.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
	{
		name:  'Сайт-каталог тепловентиляторов Volcano',
		description:  [
			'Спроектировал, нарисовал и сверстал тепловентиляторов Volcano. Другой программист занимался интеграцией с системой управления.',
			'Объяснение принципа работы на [http://volcano.ru]volcano.ru[]',
		],
		technologies: ['HTML', 'CSS'],
	},
]

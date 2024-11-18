export type ProjectConfig = {
	name: string
	github?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
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
		name:  'API блогов',
		github: 'github.com/AndrewKozinsky/blogs-nest',
		description: [
				'Взаимодействие с блогами, заметками, комментариями, пользователями. Авторизация и аутентификация. Игра для двоих участников на скорость и количество правильных ответов на вопросы.',
			],
		technologies: ['Nest', 'Postgres'],
	},
	{
		name: 'API клона Инстаграмма',
		github: 'github.com/AndrewKozinsky/inctagram-backend',
		description: [
				'Регистрация, вход пользователей, редактирование профиля, взаимодействие с микросервисом файлов.',
			],
		technologies: ['Nest', 'Postgres', 'Микросервисы'],
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
		name: 'Векторный графический редактор',
		description: [
			'Вдохновлённый Фигмой в браузере решил сделать свою реализацию векторного редактора. Сначала на двумерном холсте, затем, как понял, что скорость стала проседуть, переделал на трёхмерной. Научил его строить базовые фигуры, менять цвет, перемещать, изменять размер. Мне подсказали формулу изменения размеров и расположения элементов при изменении масштаба, поэтому реализовал изменение масштаба и перемещение по холсту.',
			'Остановил разработку после того, как понял через что рисуются сложные формы в WebGL. Таких знаний математики у меня близко нет. И в тот момент не знал про Вебпак, поэтому пришёл к взаимным зависимостям в коде ). И одному с такой работой не справиться.',
			'Разрабатывал в 2017-18 году до того, как стал понимать для чего нужен GitHub, поэтому код не сохранился.',
		],
		technologies: ['HTML', 'JavaScript', 'CSS'],
	},
]

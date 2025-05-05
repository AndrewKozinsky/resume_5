export type WorkExperienceConfigItem = {
	type: 'workExperience'
	startDate: string
	endDate: string
	duration: string
	companyName: string
	companySite: string
	position: string
	description: string[]
	technologies: string[]
	achievements?: string[]
}
export type LearnExperienceConfigItem = {
	type: 'learnExperience'
}

export type ExperienceItems = (LearnExperienceConfigItem | WorkExperienceConfigItem)[]

export const experienceConfig: ExperienceItems = [
	{
		type: 'workExperience',
		startDate: 'Апрель 2016',
		endDate:  'Август 2020',
		duration: '4 года 5 месяцев',
		companyName: 'ООО «Русхит»',
		companySite: 'kflex.ru',
		position:'Создание и вёрстка классических сайтов',
		description: [
				'Удалённо занимался с оформление и вёрсткой сайтов, писем и другими вещами связанными с рекламой в интернете.',
				'Закончил сотрудничество потому что хотелось полноценно писать сложные приложения на Реакте. А в этой компании таких задач не было.',
			],
		technologies: ['HTML', 'CSS', 'Javascript'],
		achievements: ['Предлагал множество идей для увеличения конверсии сайта.'],
	},
	{
		type: 'workExperience',
		startDate:  'Октябрь 2020',
		endDate: 'Июль 2021',
		duration:  '10 месяцев',
		companyName:'Minervasoft',
		companySite: 'minervasoft.ru',
		position: 'Программист React',
		description: [
				'Описание программы на [https://minervasoft.ru/lms]minervasoft.ru[]. Разрабатывал интерактивные компоненты опросников, табличное представление данных, формы проверки знаний, конструкторы статей и так далее.',
				'Я принял решение об уходе потому что понял, что проект мне не близок. Сейчас об этом жалею потому что сейчас понимаю на сколько там была отлажена работа.',
			],
		technologies: ['React', 'Redux', 'SCSS'],
		achievements: ['Продавил внедрение TypeScript-а для увеличения надёжности кода.'],
	},
	{
		type: 'workExperience',
		startDate: 'Ноябрь 2021',
		endDate: 'Декабрь 2023',
		duration: '2 года 1 месяц',
		companyName: 'Образовательная платформа',
		companySite: 'credu.ai',
		position: 'Программист React',
		description:[
				'Разработка платформы для школ иностранных языков. Создание курсов, уроков, упражнений, ведение учеников, вывод, фильтрация, заказы, статистика успеваемости, сотрудники, профили пользователей, оплаты, конструктор одностраничников, регистрация, вход.',
				'Видео с описанием функций: [https://youtube.com/@creduplatform]youtube.com/@creduplatform[]',
				'Руководитель решил остановить активную разработку потому что работающего функциона было достаточно для запуска.',
			],
		technologies: ['TypeScript', 'React', 'Zustand', 'XState', 'React Query', 'Axios'],
		achievements:  [
				'Перевёл проект на другую систему управления состоянием чтобы уменьшить сложность и сократить время написания кода.',
				'Написал шаблонный компонент формы чтобы упростить переиспользование логики и уменьшить время написания других форм.',
				'Когда потребовалась реализовать сложную логику изучил XState.',
			],
	},
	{
		type: 'learnExperience',
	},
	/*{
		type: 'workExperience',
		startDate: 'Декабрь 2023',
		endDate:  'Настоящее время',
		duration: '1 год',
		companyName: 'It-Инкубатор',
		companySite: 'it-incubator.io/education/back-end',
		position: 'Ученик' ,
		description: [
				'Мне интересно стать разработчиком полного цикла, поэтому с декабря 2023 прохожу обучение. Поэтому поисками работы не занимался. Мне осталось ещё 2 месяца. Это не помешает работе.',
			],
		technologies: ['TypeScript', 'Node', 'Express', 'Nest', 'Mongo', 'Postgres', 'TypeORM'],
	},*/
]

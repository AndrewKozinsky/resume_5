export type ProjectConfig = {
	name: string
	github?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
	{
		name:  'Редактор Эдиториум',
		github: 'github.com/AndrewKozinsky/editor',
		description:  [
				'Я придумал принцип его работы, нарисовал и написал код.',
				'Объяснение принципа работы: youtube.com/watch?v=2SB0DEwHLqg',
				'Не стал продолжать потому что это нет ни времени, ни денег.',
			],
		technologies: ['React', 'Node', 'Next', 'Nest', 'Docker'],
	},
	{
		name: 'Расширение Фигмы',
		github: 'github.com/AndrewKozinsky/figma-to-code',
		description:  ['Перевод макетов в формат данных для формирования статей.'],
		technologies: ['TypeScript'],
	},
	{
		name: 'Обработчик форм',
		github: 'github.com/AndrewKozinsky/modern-react-form',
		technologies: ['React'],
	},
	{
		name:  'API',
		github: 'github.com/AndrewKozinsky/blogs-nest',
		description: [
				'Взаимодействие с блогами, заметками, комментариями, пользователями, авторизациями.',
			],
		technologies: ['Nest', 'Postgres'],
	},
	{
		name: 'API слона Инстаграмма',
		github: 'github.com/AndrewKozinsky/inctagram-backend',
		description: [
				'Регистрация, вход пользователей, редактирование профиля, взаимодействие с микросервисом файлов и с микросервисом платежей',
			],
		technologies: ['Nest', 'Postgres', 'Микросервисы'],
	},
]

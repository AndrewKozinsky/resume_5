export type ProjectConfig = {
	name: string
	github?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
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
]

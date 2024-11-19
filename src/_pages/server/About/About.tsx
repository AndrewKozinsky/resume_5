import React from 'react'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import './About.scss'

function About() {
	return (
		<div>
			<Header tag="h2">Обо мне</Header>
			<div className="about">
				<Paragraph>Начинающий разработчик Node.js. Делал API для своих проектов. В течение 2024 года плотно изучал работу с серверной логикой. Изученные технологии и проекты смотри ниже.</Paragraph>
				<Paragraph>Ищу возможность присоединиться к новой команде для развития проекта. Готов выполнить тестовое задание.</Paragraph>
			</div>
		</div>
	)
}

export default About

import React from 'react'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import './About.scss'

function About() {
	return (
		<div>
			<Header tag="h2">Обо мне</Header>
			<div className="about">
				<Paragraph>Люблю писать понятный и документированный код.</Paragraph>
				<Paragraph>Много времени уделил для собственных проектов, например векторного графического редактора, редактора статей и сайта изучения английского языка. Но сейчас понимаю, что в одиночку с этим справиться сложно. Поэтому оставил попытки что-либо сделать ещё.</Paragraph>
			</div>
		</div>
	)
}

export default About

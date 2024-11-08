import React from 'react'
import Paragraph from '../common/Paragraph/Paragraph'
import './Head.scss'

function Head() {


	return (
		<div className="head">
			<div className="head__left-site">
				<img
					src="/images/my_photo.jpg"
					className="head__author-photo"
					alt='Фотография Андрея Козинского'
				/>
			</div>
			<div className="head__right-site">
				<p className="head__position">Fullstack (React и Nest)</p>
				<h1 className="head__name">Андрей Козинский</h1>
				<div className="head__details">
					<Details />
					<p className="head__pdf-paragraph">
						<a href="/resume.pdf" className="link" title="Резюме в PDF">
							Резюме в PDF
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Head

function Details() {
	const details = [
		{type: 'info', name: 'Уровень', value: 'специалист'},
		{type: 'info', name: 'З/п', value: '180 000 руб.'},
		{type: 'info', name: 'Место', value: 'Россия, Оренбург (не готов к переезду)'},
		{type: 'divider'},
		{type: 'info', name: 'Почта', value: 'andkozinsky@gmail.com', link: 'mailto:andkozinsky@gmail.com', title: 'Почта'},
		{type: 'info', name: 'Телефон', value: '8 (919) 842-35-99', link: 'callto:89198423599', title: 'Телефон'},
		{type: 'info', name: 'Телеграм', value: '@AndrewKozinsky', link: 'https://t.me/AndrewKozinsky', title: 'Telegram'},
		{type: 'info', name: 'GitHub', value: 'github.com/AndrewKozinsky', link: 'https://github.com/AndrewKozinsky', title: 'GitHub'},
		{type: 'divider'},
	]

	return <>
		{details.map(detail => {
			if (detail.type === 'info') {
				const {name, value, link, title} = detail

				const valueMarkup = link && title
					? <a href={link} className="link" title={title}>{value}</a>
					: value

				return (
					<Paragraph><strong>{name}: </strong>{valueMarkup}</Paragraph>
				)
			}

			return <div />
		})}
	</>
}
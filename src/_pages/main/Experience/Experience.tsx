import React from 'react'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
import SectionWrapper from '../common/SectionWrapper/SectionWrapper'
import Sticker from '../common/Sticker/Sticker'
import { experienceConfig, WorkExperienceConfigItem } from './fn/config'
import './Experience.scss'

function Experience() {
	return (
		<SectionWrapper>
			<Header tag="h2">Опыт работы</Header>
			<div className="experience">
				<div className="experience__items">
					{experienceConfig.toReversed().map((configItem) => {
						if (configItem.type === 'workExperience') {
							return <WorkExperienceItem configItem={configItem} />
						}
						else {
							return <LearnExperienceItem />
						}
					})}
				</div>
			</div>
		</SectionWrapper>
	)
}

export default Experience

type ExperienceItemProps = {
	configItem: WorkExperienceConfigItem
}

function WorkExperienceItem(props: ExperienceItemProps) {
	const { configItem } = props

	return (
		<div className="experience__item">
			<div className="experience__item-left">
				<p className="experience__time">
					<span>{configItem.startDate}</span>
					<span>{configItem.endDate}</span>
				</p>
				<p className="experience__duration">{configItem.duration}</p>
			</div>
			<div className="experience__item-content">
				<p className="experience__company-name">{configItem.companyName}</p>
				<p className="experience__company-site">
					<a href={'https://' + configItem.companySite} className="link">
						{configItem.companySite}
						<span className="outer-site-sign" />
					</a>
				</p>
				<p className="experience__position">{configItem.position}</p>
				<ParagraphsContainer>
					{configItem.description.map((item) => {
						return <Paragraph>{item}</Paragraph>
					})}
				</ParagraphsContainer>
				<div className="experience__technologies">
					{configItem.technologies.map((technology) => {
						return <Sticker>{technology}</Sticker>
					})}
				</div>

				{configItem.achievements && (
					<div className="experience__achievements">
						<h4 className="experience__achievements-header">
							Достижения
						</h4>
						<ul className="experience__achievements-list">
							{configItem.achievements.map((achievement) => {
								return <li className="experience__achievement">{achievement}</li>
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

function LearnExperienceItem() {
	return <div className='learn-experience'>
		<Paragraph>2024 год потратил на изучение серверной разработки на учебном курсе.
		Практиковался писать сервера на NodeJS: сначала на Express-е, затем на Nest-е.
		Для данных использовал MongoDB и Postgres через сырые запросы и Mongoose и TypeORM.</Paragraph>
		<Paragraph>Не искал работу чтобы полностью сосредоточиться на обучении. Сейчас оно завершено.</Paragraph>
	</div>
}
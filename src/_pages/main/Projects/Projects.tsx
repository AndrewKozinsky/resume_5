import React from 'react'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
import Sticker from '../common/Sticker/Sticker'
import { projectsConfig, ProjectConfig } from './fn/config'
import './Projects.scss'

function Projects() {
	return (
		<div>
			<Header tag="h2">Проекты</Header>
			<div className="projects">
				{projectsConfig.map((configItem) => {
					return <ExperienceItem configItem={configItem} />
				})}
			</div>
		</div>
	)
}

export default Projects

type ExperienceItemProps = {
	configItem: ProjectConfig
}

function ExperienceItem(props: ExperienceItemProps) {
	const { configItem } = props

	return (
		<div className="project">
			<Header tag="h3">{configItem.name}</Header>
			{configItem.github && (
				<p className="project__site">
					<a href={'https://' + configItem.github} className="link">
						{configItem.github}
					</a>
				</p>
			)}

			{configItem.description && (
				<ParagraphsContainer>
					{configItem.description.map((item) => {
						return <Paragraph>{item}</Paragraph>
					})}
				</ParagraphsContainer>
			)}
			<div className="project__technologies">
				{configItem.technologies.map((item) => {
					return <Sticker>{item}</Sticker>
				})}
			</div>
		</div>
	)
}

import React, {ReactNode} from 'react'
import Header from '../common/Header/Header'
import Paragraph from '../common/Paragraph/Paragraph'
import ParagraphsContainer from '../common/ParagraphsContainer/ParagraphsContainer'
import SectionWrapper from '../common/SectionWrapper/SectionWrapper'
import Sticker from '../common/Sticker/Sticker'
import {ProjectConfig, projectsConfig, ProjectType} from './fn/config'
import './Projects.scss'

function Projects() {
	return (
		<SectionWrapper>
			<Header tag="h2">Проекты</Header>
			<div className="projects">
				{projectsConfig.map((configItem) => {
					return <ExperienceItem configItem={configItem} />
				})}
			</div>
		</SectionWrapper>
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
			<ProjectTypeSticker projectType={configItem.type} />
			<Header tag="h3">{configItem.name}</Header>
			{configItem.github && (
				<p className="project__site">
					<a href={'https://' + configItem.github} className="link">
						{configItem.github}
					</a>
				</p>
			)}
			{configItem.site && (
				<p className="project__site">
					<a href={'https://' + configItem.site} className="link">
						{configItem.site}
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

type ProjectTypeStickerProps = {
	projectType: ProjectType
}

function ProjectTypeSticker(props: ProjectTypeStickerProps) {
	const { projectType } = props

	const componentMapper: Record<ProjectType, ReactNode> = {
		[ProjectType.client]: <p className='project__type-sticker project__type-sticker--client'>Разработка клиента</p>,
		[ProjectType.server]: <p className='project__type-sticker project__type-sticker--server'>Разработка сервера</p>,
		[ProjectType.both]: <p className='project__type-sticker project__type-sticker--both'>Разработка клиента и сервера</p>
	}

	return componentMapper[projectType]
}
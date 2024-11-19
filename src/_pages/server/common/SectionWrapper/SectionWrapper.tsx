import React from 'react'
import './SectionWrapper.scss'

type SectionWrapperProps = {
	children: React.ReactNode
}

function SectionWrapper(props: SectionWrapperProps) {
	const { children } = props

	return <section className='section-wrapper'>{children}</section>
}

export default SectionWrapper

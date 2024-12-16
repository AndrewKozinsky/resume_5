import React from 'react'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import Head from '../Head/Head'
import Projects from '../Projects/Projects'
import Tools from '../Tools/Tools'
import './MainPage.scss'

function MainPage() {
	return (
			<div className="page-part">
				<Head />
				<About />
				<Tools />
				<Experience />
				<Projects />
				<Footer />
			</div>
	)
}

export default MainPage

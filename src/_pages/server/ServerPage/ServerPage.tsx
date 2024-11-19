import React from 'react'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Footer from '../Footer/Footer'
import Head from '../Head/Head'
import Projects from '../Projects/Projects'
import Tools from '../Tools/Tools'
import './ServerPage.scss'

function ServerPage() {
	return (
		<div className="page-part">
			<Head />
			<About />
			<Experience />
			<Tools />
			<Projects />
			<Footer />
		</div>
	)
}

export default ServerPage

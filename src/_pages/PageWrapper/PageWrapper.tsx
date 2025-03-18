'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import './PageWrapper.scss'

type PageWrapperProps = {
	children: React.ReactNode
}

function PageWrapper(props: PageWrapperProps) {
	const { children } = props

	return (
		<div className="page-wrapper">
			{/*<nav className='page-wrapper__menu'>
				<MenuLink title='Разработчик React' href="/" />
				<MenuLink title='Разработчик Node.js' href="/server" />
			</nav>*/}
			{ children }
		</div>
	)
}

export default PageWrapper

type MenuLinkProps = {
	title: string
	href: string
}

function MenuLink(props: MenuLinkProps) {
	const { title, href } = props

	const pathname = usePathname()

	if (pathname === href) {
		return <p>{title}</p>
	} else {
		return <Link href={href} className='link'>{title}</Link>
	}
}
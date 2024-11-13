import React from 'react'
import './Paragraph.scss'

type HeaderProps = {
	children: string | React.ReactNode
}

function Paragraph(props: HeaderProps) {
	const { children } = props

	let content = children

	if (typeof children === 'string') {
		const arr: React.ReactNode[] = []

		parseString(children).forEach(contentObj => {
			if(contentObj.type === 'string') {
				arr.push(contentObj.text)
			} else if (contentObj.type === 'link') {
				arr.push(<a href={contentObj.href} className='link'>{contentObj.text}</a>)
			}
		})

		content = arr
	}

	return <p className="paragraph">{content}</p>
}

export default Paragraph

type ParsedContent = (ParsedContentText | ParsedContentLink)[]
type  ParsedContentText = {
	type: 'string',
	text: string // 'Видео с описанием функций: '
}
type  ParsedContentLink = {
	type: 'link',
	text: string // 'youtube.com/@creduplatform',
	href: string // 'https://youtube.com/@creduplatform'
}

function parseString(input: string) {
	const result: ParsedContent = [];
	const regex = /\[(.*?)\](.*?)\[\]/g;
	let lastIndex = 0;
	let match;

	while ((match = regex.exec(input)) !== null) {
		const [fullMatch, href, text] = match;

		// Add preceding text as a 'string' type if any
		if (match.index > lastIndex) {
			result.push({ type: 'string', text: input.slice(lastIndex, match.index) });
		}

		// Add the matched link as a 'link' type
		result.push({ type: 'link', text, href });

		// Update the lastIndex to the end of the current match
		lastIndex = match.index + fullMatch.length;
	}

	// Add any remaining text after the last match as a 'string' type
	if (lastIndex < input.length) {
		result.push({ type: 'string', text: input.slice(lastIndex) });
	}

	return result;
}

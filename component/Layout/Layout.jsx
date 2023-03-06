import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className='pt-3'>{children}</main>
			<Footer />
		</>
	)
}

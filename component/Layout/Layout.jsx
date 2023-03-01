import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className='pt-4'>{children}</main>
			<Footer />
		</>
	)
}

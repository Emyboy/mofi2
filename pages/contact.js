import ContactForm from '@/component/ContactUs/ContactForm'
import Layout from '@/component/Layout/Layout'
import Link from 'next/link'
import React from 'react'

export default function contact() {
  return (
		<Layout>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(/img/jumbo-img.png)`,
					paddingBottom: '26vh',
				}}
			>
				<div className="auto-container">
					<div className="title-outer">
						<h1
							className="title "
							style={{
								fontWeight: 'normal',
								lineHeight: '79px',
							}}
						>
							Looking to Send us a<br /> Message at MoFI??
						</h1>
						<div className="page-breadcrumb py-3">
							<p className="text-white">
								Our user-friendly interface and intuitive
								features make managing your<br /> finances a breeze,
								so you can focus on the things that matter most.
							</p>
						</div>
						<div className="page-breadcrumb">
							<Link
								href={'/'}
								className="btn bg-theme text-white py-3 px-3 rounded"
							>
								Message Us
							</Link>
							<Link href={'/'} className="mx-4 text-white">
								Send Us Email
							</Link>
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
		</Layout>
  )
}

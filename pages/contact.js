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
					backgroundImage: `url(https://blenderartists.org/uploads/default/original/4X/b/3/6/b3698f33fccfa829c5bfe1fccdd3aade2c44ad2d.jpeg)`,
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
							{/* <p className="text-white">
								Our user-friendly interface and intuitive
								features make managing your
								<br /> finances a breeze, so you can focus on
								the things that matter most.
							</p> */}
						</div>
						<div className="page-breadcrumb">
							<Link
								href={'/contact#message'}
								className="btn bg-theme text-white py-3 px-3 rounded"
							>
								Message Us
							</Link>
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
		</Layout>
  )
}

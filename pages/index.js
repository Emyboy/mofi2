import Layout from '@/component/Layout/Layout'
import React from 'react'

export default function index() {
	return (
		<Layout>
			<div>
				<section
					className="page-title"
					style={{
						backgroundImage: `url(/assets/images/background/page-title.jpg)`,
					}}
				>
					<div className="auto-container">
						<div className="title-outer">
							<h1 className="title">Contact Us</h1>
							<ul className="page-breadcrumb">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

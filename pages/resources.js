import TopNews from '@/component/HomePage/TopNews'
import Layout from '@/component/Layout/Layout'
import Link from 'next/link'
import React from 'react'

export default function resources() {
  return (
		<Layout>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1610736311554-fc17d5c43de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80)`,
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
							Media Room & Resources Communicating Clearly
						</h1>
						<div className="page-breadcrumb py-3">
							<p className="text-white">
								Whether through our periodic press briefings or
								at our annual governing <br /> council meetings,
								we engage to provide context, create awareness
								and elicit understanding
								<br /> for each decision made and investment
								undertaken
							</p>
						</div>
					</div>
				</div>
			</section>
			<TopNews />
		</Layout>
  )
}

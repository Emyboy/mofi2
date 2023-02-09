import Link from 'next/link'
import React from 'react'

export default function AboutUsHero() {
	return (
		<div>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(https://assets.iflscience.com/assets/articleNo/59407/aImg/35612/1618500111-a-dark-forest-on-earth-o-meta.png)`,
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
							The Ministry of{' '}
							<span className="text-theme">
								Finance
								<br /> Incorporated
							</span>{' '}
							(MOFI), 1959
						</h1>
						<div className="page-breadcrumb py-3">
							<p className="text-white">
								a platform to take charge of all investments
								made by the Federal Government of Nigeria.
								<br />
								MOFI manages a significant portfolio of Federal
								Government investments, spanning a wide
								<br /> variety of asset classes, including
								Government Owned Entities (GOEs) and Government
								Linked
								<br /> Companies (GLCs). As such, it is well
								placed to support the Federal Government to
								address its
								<br /> economic challenges and spur a renewal of
								the economy.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

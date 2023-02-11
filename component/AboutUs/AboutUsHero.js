import Link from 'next/link'
import React from 'react'

export default function AboutUsHero() {
	return (
		<div>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(https://assets.iflscience.com/assets/articleNo/59407/aImg/35612/1618500111-a-dark-forest-on-earth-o-meta.png)`,
					padding: '16vh 0px',
				}}
			>
				<div className="auto-container">
					<div className="title-outer">
						<h1
							className="title "
							style={{
								fontWeight: 'normal',
								lineHeight: '79px',
								fontSize: `43px`
							}}
						>
							The Ministry of{' '}
							<span className="text-theme">
								Finance Incorporated
							</span>{' '}
							(MOFI), 1959
						</h1>
						<div className="page-breadcrumb py-3">
							<p className="text-white">
								MOFI was incorporated under the provisions of
								Sections 2 and 3 of the Ministry of Finance
								Incorporated (MOFI) Act of 1959 as an asset
								holding company under the Federal Ministry of
								Finance.
							</p>
							<p className="text-white">
								Its mandate as the sole manager of all federal
								government investment interests, estates,
								easement and rights, positions it as a strategic
								institution to support the Federal Government’s
								effort to address several economic challenges
								and spur a renewal of the economy.
							</p>
							<p className="text-white">
								Over the decades of its existence, MOFI, by
								virtue of the provisions of its enabling Act, is
								in charge of the management of a significant
								portfolio of Federal Government investments,
								spanning a wide range of about 130 asset
								classifications, including Government Owned
								Entities (GOEs) and Government Linked Companies
								(GLCs), in which it controls a majority stake in
								more than half of them.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

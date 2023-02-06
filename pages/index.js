import InvestInToday from '@/component/HomePage/InvestInToday'
import Portfolio from '@/component/HomePage/Portfolio'
import PortfolioCompanies from '@/component/HomePage/PortfolioCompanies'
import TopNews from '@/component/HomePage/TopNews'
import Transformation from '@/component/HomePage/Transformation'
import Layout from '@/component/Layout/Layout'
import Link from 'next/link'
import React from 'react'

export default function index() {
	return (
		<Layout>
			<div>
				<section
					className="page-title"
					style={{
						backgroundImage: `url(/img/jumbo-img.png)`,
						paddingBottom: '20vh'
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
								Investing in{' '}
								<span className="text-theme">
									Tomorrow,
									<br /> Today
								</span>{' '}
								& The Future.
							</h1>
							<div className="page-breadcrumb py-3">
								<p className="text-white">
									Investing in tomorrow, today is a smart
									choice for a brighter future. With careful
									planning
									<br /> and a long-term perspective, you can
									secure your financial future and achieve
									your goals.
								</p>
							</div>
							<div className="page-breadcrumb">
								<Link
									href={'/'}
									className="btn bg-theme text-white py-3 px-3 rounded"
								>
									Contact Support
								</Link>
								<Link href={'/'} className="mx-4 text-white">
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</section>
				<Transformation />
				<InvestInToday />
				<Portfolio />
				<PortfolioCompanies />
				<TopNews />
			</div>
		</Layout>
	)
}

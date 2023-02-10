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
		<Layout pageName={'home'}>
			<div>
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
								Investing in{' '}
								<span className="text-theme">
									Tomorrow,
									<br /> Today
								</span>{' '}
								& The Future.
							</h1>
							<div className="page-breadcrumb py-3">
								<p className="text-white">
									MOFI is the investment vehicle of the
									Federal Government of Nigeria. We are
									helping to<br /> transform Nigeria’s economy,
									making it more diverse, prosperous, and
									optimised for investments and growth.
								</p>
							</div>
							<div className="page-breadcrumb">
								<Link
									href={'/about'}
									className="btn bg-theme text-white py-3 px-3 rounded"
								>
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

import ArrowRight from '@/public/img/arrow-right'
import Link from 'next/link'
import React from 'react'

export default function Transformation() {
	return (
		<section className="services-section pt-0 pb-0">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<div className="card h-100 bg-gray">
							<div className="card-body">
								<p className="text-theme text-uppercase m-0">
									Who we are
								</p>
								<h3 className="font-weight-normal my-4">
									Mofi - A Vehicle of Transformation
								</h3>
								<p className="text-muted font-weight-bold">
									The Ministry of Finance Incorporated (MOFI)
									was established in 1959 as a platform to
									take charge of all investments made by the
									Federal Government of Nigeria. MOFI manages
									a significant portfolio of Federal
									Government investments, spanning a wide
									variety of asset classes, including
									corporate assets, financial assets, fixed
									assets, mineral and intangible assets,
									cash-flow-generating transactions.
								</p>
								<Link href={'/'} className="text-theme fw-bold">
									Learn More <ArrowRight />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="card  bg-gray">
							<div className="card-body">
								<p className="fw-bold">
									Corporate, Fixed & Financial assets
								</p>
								<p className="text-muted">
									Corporate assets owned wholly or partly by
									the federal government. I.e. shares of
									publicly traded entities, limited-liability
									entities, and foreign-based and other
									businesses. Financial assets (such as public
									and private equity investment, fixed income,
									and hedge funds). Fixed assets (including
									real estate)
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-lg-6 mt-3">
								<div className="card h-100 bg-theme-light">
									<div className="card-body">
										<p className="fw-bold">
											Mineral and intangible assets
										</p>
										<p className="text-muted">
											Mineral and intangible assets
											(hydrocarbons)
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 mt-3">
								<div className="card h-100 bg-theme">
									<div className="card-body">
										<p className="text-white fw-bold">
											Cash-flow-generating transactions
										</p>
										<p className="text-white">
											Cash-flow-generating transactions,
											such as concession agreements and
											public private partnerships
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

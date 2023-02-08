import Bin from '@/public/img/bin'
import React from 'react'

export default function Portfolio() {
	return (
		<section
			className="bg-theme news-section bg-theme bg-img "
			style={{ backgroundImage: `url(/img/portfolio.png)` }}
		>
			<div className="container py-0">
				<div className="row justify-content-between">
					<div className="col-md-5 col-sm-12">
						<h3 className="text-white mb-4">
							A snapshot of
							<br /> our portfolio
						</h3>
						<p
							className="text-white"
							style={{ lineHeight: '50px' }}
						>
							Mofi is tasked with thinking about tomorrow today.We
							aspire to grow our portfolio to a minimum of NGN 100
							Trillion over the next 10 years.
						</p>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="row">
							<div className="col-sm-12 col-lg-6">
								<div className="card bg-theme h-100">
									<div className="card-body p-5">
										<div className="d-flex">
											{/* <Bin /> */}
											<h3 className=" font-weight-normal text-white">
												₦ 37 bn
											</h3>
										</div>
										<p className=" text-white fw-light">
											Dividend contribution
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6">
								<div className="card bg-theme h-100">
									<div className="card-body p-5">
										<div className="d-flex">
											{/* <Bin /> */}
											<h3 className=" font-weight-normal text-white">
												₦ 18 bn
											</h3>
										</div>
										<p className=" text-white fw-light">
											Total value of top 10 MOFI portfolio
											companies
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="card bg-theme mt-4">
							<div className="card-body p-5 text-center">
								<div className="d-flex justify-content-center">
									{/* <Bin /> */}
									<h3 className=" font-weight-normal text-white">
										₦ 52 Entities
									</h3>
								</div>
								<p className=" text-white fw-light">
									Total entities with confirmed MOFI
									shareholding
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

import React from 'react'

export default function MissionAndVision() {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<div className="card bg-gray mb-3">
							<div className="card-body p-5">
								<h4 className="font-weight-normal mb-4">
									<img src={`/img/dart.svg`} /> Vision
								</h4>
								<p>
									To become a world-class active investment
									vehicle that creates wealth for all
									generations and contributes to the
									development of the Nigerian economy.
								</p>
							</div>
						</div>
						<div className="card bg-gray ">
							<div className="card-body p-5">
								<h4 className="font-weight-normal mb-4">
									<img src={`/img/dart.svg`} /> Mission
								</h4>
								<p>
									To play a leading role in driving sustained
									economic development for the benefit of all
									Nigerians through:
								</p>
								<ul>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										Enhancing the financial performance of
										portfolio companies.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										Investing with the intent of preserving
										socioeconomic value through catalyzing
										growth in priority sectors.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										Developing a culture of performance and
										efficiency.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										Building a prosperous nation that
										attracts investors.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="card bg-gray h-100">
							<div className="card-body p-5">
								<h4 className="font-weight-normal mb-4">
									<img src={`/img/dart.svg`} /> Strategic
									Pillars
								</h4>
								<p>
									To become a world-class active investment
									vehicle that creates wealth for all
									generations and contributes to the
									development of the Nigerian economy.
								</p>
								<ul>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										We work to ensure all state owned
										entities are professionally managed and
										positioned to achieve economic impact.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										With 52 companies, ₦18 Trillion
										estimated value of holdings and over
										15,000 people employed; we are a
										significant financial driver of the
										Nigerian economy.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										We are equipped with the capacity to
										source for and acquire required funding
										for the growth and development of all
										the companies under our portfolio.
									</li>
									<li
										style={{ listStyle: 'outside' }}
										className="text-muted"
									>
										At our core, we are focussed on
										initiatives designed to not just
										generate profit for the economy, but
										also ensure impact across all key
										sectors and areas of the Nigerian
										economy.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

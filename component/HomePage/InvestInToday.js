import React from 'react'

export default function InvestInToday() {
  return (
		<section className="services-section pt-0 pb-0 bg-gray">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-5">
						<div className="card" style={{ position: 'absolute', bottom: '35%', width: '600px' }}>
							<div className="card-body p-5">
								<h3 className="font-weight-normal">
									Invest in today & watch your future
									flourish.
								</h3>
								<p className='text-muted'>
									MOFI is tasked with thinking about tomorrow
									today.We aspire to grow our portfolio to a
									minimum of NGN 100 Trillion over the next 10
									years.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-7">
                        <img src={'/img/InvestInToday.svg'} alt='invest' />
                    </div>
				</div>
			</div>
		</section>
  )
}

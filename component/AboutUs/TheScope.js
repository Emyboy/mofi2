import Constants from '@/constants'
import React from 'react'
import { useWindowSize } from 'react-use'

export default function TheScope() {
	return (
		<section className="news-section bg-gray">
			<h3 className="text-center">THE SCOPE OF MOFI’S ACTIVITIES</h3>
			<div className="container">
				<EachScope img={`/img/growth.png`} />
				<EachScope img={`/img/geography.png`} />
				<EachScope img={`/img/assets.png`} />
			</div>
		</section>
	)
}

const EachScope = ({ img }) => {
	const { width } = useWindowSize()
	return (
		<div className="row mb-5 justify-content-between">
			<div className="col-sm-12 col-md-6">
				<div
					className="card shadow-sm"
					style={{
						zIndex: 10,
                        position: 'relative',
                        left: 125,
                        top: 55,
                        minHeight: '400px',
                        minWidth: '400px',
					}}
				>
					<div className="card-body p-5 d-flex flex-column justify-content-center">
						<h4 className="font-weight-normal">
							Invest in today & watch your future flourish.
						</h4>
						<p className="text-muted m-0">
							MOFI is tasked with thinking about tomorrow today.We
							aspire to grow our portfolio to a minimum of NGN 100
							Trillion over the next 10 years.
						</p>
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-6">
				<img src={img} alt="invest" />
			</div>
		</div>
	)
}

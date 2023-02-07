import ArrowRight from '@/public/img/arrow-right'
import Link from 'next/link'
import React from 'react'

export default function TopNews() {
	return (
		<section className="pb-4">
			<div className="container">
				<span className="bg-theme-light text-theme p-2">News</span>
				<h3 className="font-weight-normal mt-5">Top News</h3>
				<p>
					Stay Ahead of the Game: Stay Informed with the Latest
					Breaking News
				</p>
				<div className="row">
					<EachNews
						text={`Nigeria Names Ex-Finance Minister to Revitalize Investment Firm`}
						img={`https://www.vanguardngr.com/wp-content/uploads/2019/09/CBN-e1490307285906.jpg`}
					/>

					<EachNews
						text={`Nigeria Names Ex-Finance Minister to Revitalize Investment Firm`}
						img={`https://www.vanguardngr.com/wp-content/uploads/2019/09/CBN-e1490307285906.jpg`}
					/>

					<EachNews
						text={`Nigeria Names Ex-Finance Minister to Revitalize Investment Firm`}
						img={`https://www.vanguardngr.com/wp-content/uploads/2019/09/CBN-e1490307285906.jpg`}
					/>
				</div>
			</div>
		</section>
	)
}

const EachNews = ({ text, link, img }) => {
	return (
		<div className="col-sm-12 col-md-4 mb-3">
			<div className="card bg-theme">
				<div className="card-body p-4 text-white">
					<p className="text-white">{text}</p>
					<Link href={link || '/'} className="text-white">
						Read More <ArrowRight color="white" />
					</Link>
				</div>
				<div
					className="bg-img"
					style={{ backgroundImage: `url(${img})`, height: '260px' }}
				/>
			</div>
		</div>
	)
}

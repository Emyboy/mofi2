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
						text={`MOFI: Nigeria’s strategic vision for sustainable economic recovery`}
						img={`https://f5p3e9e4.stackpathcdn.com/wp-content/uploads/2023/01/Ministry-Of-Finance-MOFI.jpg`}
						link={`https://www.thecable.ng/mofi-nigerias-strategic-vision-for-sustainable-economic-recovery/amp`}
					/>

					<EachNews
						text={`Nigeria Names Ex-Finance Minister to Revitalize Investment Firm`}
						img={`https://media.premiumtimesng.com/wp-content/files/2012/09/Shamsudeen-Usman.jpg`}
						link={`https://www.bloomberg.com/news/articles/2023-01-21/nigeria-names-ex-finance-minister-to-revitalize-investment-firm`}
					/>

					<EachNews
						text={`What is Ministry of Finance Incorporated?`}
						img={`https://pbs.twimg.com/media/Fn4avepWIAo6Xeh?format=jpg&name=900x900`}
						link={`https://twitter.com/finminnigeria/status/1620762338818404363?s=46&t=_nbibBBHudCXntMfroTBag`}
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
					<a href={link || '/'} target='_blank' className="text-white">
						Read More <ArrowRight color="white" />
					</a>
				</div>
				<div
					className="bg-img"
					style={{ backgroundImage: `url(${img})`, height: '260px' }}
				/>
			</div>
		</div>
	)
}

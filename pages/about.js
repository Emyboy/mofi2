import AboutUsHero from '@/component/AboutUs/AboutUsHero'
import MissionAndVision from '@/component/AboutUs/MissionAndVision'
import Layout from '@/component/Layout/Layout'
import React from 'react'

export default function about() {
	return (
		<Layout>
			<AboutUsHero />
			<br />
			<br />
			<div className="container my-5">
				<div className="row">
					<EachAboutCard
						heading={`Cash-flow-generating transactions`}
						body={`Cash-flow-generating transactions, such as concession agreements and public private partnerships`}
					/>
					<EachAboutCard
						heading={`Corporate, Fixed & Financial assets`}
						body={`Corporate assets owned wholly or partly by the federal government. i.e. shares of publicly traded entities etc`}
					/>
					<EachAboutCard
						heading={`Mineral and intangible assets`}
						body={`Mineral and intangible assets (hydrocarbons)`}
					/>
				</div>
			</div>
			<MissionAndVision />
		</Layout>
	)
}

const EachAboutCard = ({ heading, body }) => {
    return (
		<div className="col-sm-12 col-md-4">
			<div className="card bg-theme h-100">
				<div className="card-body p-5">
					<h6 className="fw-bold text-white">{heading}</h6>
					<p className=" text-white">{body}</p>
				</div>
				<div
					className="bg-img"
					style={{ backgroundImage: `url(/img/about-card-bg.png)`, height: '200px' }}
				/>
			</div>
		</div>
	)
}

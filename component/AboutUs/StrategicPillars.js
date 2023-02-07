import React from 'react'

export default function StrategicPillars() {
	return (
		<section className="news-section">
			<div className="container">
				<h3 className="text-theme mb-5">Our Strategic Pillars</h3>
				<br />
				<div className="row">
					<EachCard
						img={`https://www.rightsourcemarketing.com/wp-content/uploads/2014/11/Spotting-the-Ownership-Mentality-in-Employees.jpg`}
						heading={`Professionalising 
state ownership`}
						subHeading={`We work to ensure all state owned entities are professionally managed and positioned to achieve economic impact.`}
					/>
					<EachCard
						img={`https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg`}
						heading={`Finance the economy`}
						subHeading={`With 52 companies, ₦18 Trillion estimated value of holdings and over 15,000 people employed; we are a significant financial driver of the Nigerian economy.`}
					/>
					<EachCard
						heading={`Source funding and investments for Government owned entities [GOE] and Government linked companies [GLCs]`}
						subHeading={`We are equipped with the capacity to source for and acquire required funding for the growth and development of all the companies under our portfolio.`}
						img={`https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/07/finance.jpeg.jpg`}
					/>
					<EachCard
						heading={`Advance socioeconomic objectives`}
						subHeading={`At our core, we are focussed on initiatives designed to not just generate profit for the economy, but also ensure impact across all key sectors and areas of the Nigerian economy.`}
						img={`https://cdn.punchng.com/wp-content/uploads/2018/11/06045957/entreppreneu-pers-finance.jpg`}
					/>
				</div>
			</div>
		</section>
	)
}

const EachCard = ({ img, heading, subHeading }) => {
	return (
		<div className="col-md-4 mb-4">
			<div
				className="card bg-dark mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
				style={{
					minWidth: '300px',
					height: '540px',
					backgroundImage: `url(${img})`,
				}}
			>
				<div
					className="overlay p-4"
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						bottom: 0,
						right: 0,
					}}
				/>
				<div
					className="card-body d-flex flex-column justify-content-end"
					style={{ zIndex: 10 }}
				>
					<div className="card">
						<div className="card-body">
							<h6>{heading}</h6>
							<small className="text-muted">{subHeading}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

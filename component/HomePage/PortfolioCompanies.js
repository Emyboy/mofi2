import ArrowRight from '@/public/img/arrow-right'
import React from 'react'

export default function PortfolioCompanies() {
	return (
		<section>
			<div className="container ">
				<small className="text-theme">PORTFOLIO</small>
				<h3 className='text-theme-dark'>Our Portfolio Companies</h3>
				<div className="d-flex my-5" style={{ overflowX: 'scroll' }}>
					<EachCompany />
					<EachCompany />
					<EachCompany />
					<EachCompany />
					<EachCompany />
					<EachCompany />
					<EachCompany />
					<EachCompany />
				</div>
			</div>
		</section>
	)
}

const EachCompany = () => {
	return (
		<div
			className="card bg-dark mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
			style={{
				minWidth: '300px',
				height: '430px',
				backgroundImage: `url(https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/5ba1a-top-companies-in-india.jpg?fit=1000%2C665&ssl=1)`,
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
			<div className="card-body d-flex flex-column justify-content-end" style={{zIndex: 10}}>
				<p className='text-white fw-bold'>Infrastructure & Services</p>
				<p className='text-white fw-light'>Explore <ArrowRight color={'white'} /></p>
			</div>
		</div>
	)
}

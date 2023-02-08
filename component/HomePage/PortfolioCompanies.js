import ArrowRight from '@/public/img/arrow-right'
import Link from 'next/link'
import React from 'react'

export default function PortfolioCompanies() {
	return (
		<section>
			<div className="container pb-2">
				<small className="text-theme">PORTFOLIO</small>
				<h3 className="text-theme-dark">Our Portfolio Companies</h3>
				<div className="d-flex my-5" style={{ overflowX: 'scroll' }}>
					<EachCompany
						title={`Infrastructure & Services`}
						img={`https://media.istockphoto.com/id/1297780288/photo/delivering-quality-construction-for-a-quality-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=Mdr_fFyIHi2jBYU2ns-Fs2JlYPk0QdP9oK3UW6jhayM=`}
					/>
					<EachCompany
						title={`Financial Services`}
						img={`https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg`}
					/>
					<EachCompany
						title={`Energy & Extractives`}
						img={`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80`}
					/>
				</div>
			</div>
		</section>
	)
}

const EachCompany = ({ title, img }) => {
	return (
		<div
			className="card bg-dark mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
			style={{
				minWidth: '300px',
				height: '430px',
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
				<p className="text-white fw-bold">{title}</p>
				<Link href={`/investment#companies`}>
					<p className="text-white fw-light">
						Explore <ArrowRight color={'white'} />
					</p>
				</Link>
			</div>
		</div>
	)
}

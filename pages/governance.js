import Layout from '@/component/Layout/Layout'
import React from 'react'

export default function governance() {
	return (
		<Layout>
			<div className='mb-5'>
				<SectionHeader
					heading={`Governance council`}
					subHeading={`
						The Governing Council led by the President; H.E.
						Muhammadu Buhari is accountable for monitoring
						regulatory compliance and ensuring best practices across
						board in the organization.
					`}
				/>
				<div className="container">
					<div className="row">
						<EachGov />
						<EachGov />
						<EachGov />
						<EachGov />
					</div>
				</div>
			</div>
			<div className='mb-5'>
				<SectionHeader
					heading={`Governance council`}
					subHeading={`
						The Governing Council led by the President; H.E.
						Muhammadu Buhari is accountable for monitoring
						regulatory compliance and ensuring best practices across
						board in the organization.
					`}
				/>
				<div className="container">
					<div className="row">
						<EachGov />
						<EachGov />
						<EachGov />
						<EachGov />
					</div>
				</div>
			</div>
			<div className='mb-5'>
				<SectionHeader
					heading={`Governance council`}
					subHeading={`
						The Governing Council led by the President; H.E.
						Muhammadu Buhari is accountable for monitoring
						regulatory compliance and ensuring best practices across
						board in the organization.
					`}
				/>
				<div className="container">
					<div className="row">
						<EachGov />
						<EachGov />
						<EachGov />
						<EachGov />
					</div>
				</div>
			</div>
		</Layout>
	)
}

const EachGov = () => {
	return (
		<div className="col-md-4 mb-4">
			<div
				className="card bg-dark mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
				style={{
					minWidth: '300px',
					height: '430px',
					backgroundImage: `url(https://www.blueprint.ng/wp-content/uploads/2020/09/NNPC-LOGO.jpe)`,
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
					<p className="text-white fw-bold">
						Infrastructure & Services
					</p>
					<p className="text-white fw-light">Explore </p>
				</div>
			</div>
		</div>
	)
}

const SectionHeader = ({ heading, subHeading }) => {
	return (
		<section className="py-5 bg-white">
			<div className="auto-container">
				<div className="title-outer">
					<h3
						className="title font-weight-normal"
						style={{
							fontWeight: 'normal',
							lineHeight: '79px',
						}}
					>
						{heading}
					</h3>
					<div className="page-breadcrumb py-3 col-md-7 col-sm-12">
						<p>{subHeading}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

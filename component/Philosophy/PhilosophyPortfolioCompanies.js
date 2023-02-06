import React from 'react'

export default function PhilosophyPortfolioCompanies() {
	return (
		<section>
			<div className="container pt-0">
				<h3 className="font-weight-normal">Our Portfolio Companies</h3>
				<div className="d-flex mb-5">
					<EachNav text={`Infrastructure`} active />
					<EachNav text={`Infrastructure`} />
					<EachNav text={`Infrastructure`} />
					<EachNav text={`Infrastructure`} />
				</div>
				<br />
				<br />
				<div className="row">
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

const EachNav = ({ text, active, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`mx-2 btn py-2 ${
				active ? 'bg-theme text-white' : 'text-theme bg-theme-light'
			}`}
		>
			{text}
		</button>
	)
}

const EachCompany = () => {
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

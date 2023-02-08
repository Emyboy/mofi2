import Data from '@/Data'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function PhilosophyPortfolioCompanies() {
	return (
		<section id="portfolio-companies">
			<div className="container pt-0">
				<h3 className="font-weight-normal">Our Portfolio Companies</h3>
				<div className="d-flex mb-5">
					<EachNav text={`Infrastructure`} active />
					<EachNav text={`Financial Services`} />
					<EachNav text={`Services`} />
					<EachNav text={`Industrials`} />
					<EachNav text={`Energy & Extractives`} />
				</div>
				<br />
				<br />
				<div className="row">
					{Data.companies.map((val, i) => {
						return (
							<EachCompany
								heading={val.title}
								subHeading={val.category}
								img={val.img}
								description={val.description}
							/>
						)
					})}
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

const EachCompany = ({ heading, subHeading, img, description }) => {
	const [show, setShow] = useState(false)

	return (
		<div className="col-md-4 mb-4">
			<Modal show={show} onHide={() => setShow(false)} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Learn More</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src={img} width={140} className="mb-3" />
					{
						<div className="col-sm-12 col-md-7">
							<p>{description}</p>
						</div>
					}
					<br />
					<div class="col-md-5">
						<h6 className='mb-0'>Operation & Governance</h6>
						<table className="table table-bordered cart-total">
							<tbody>
								<tr>
									<td>Cart Subtotal</td>
									<td>$180.00</td>
									<td>Cart Subtotal</td>
									<td>$180.00</td>
								</tr>
								<tr>
									<td>Shipping and Handling</td>
									<td>$70.00</td>
									<td>Shipping and Handling</td>
									<td>$70.00</td>
								</tr>
								<tr>
									<td>Order Total</td>
									<td>$250.00</td>
									<td>Order Total</td>
									<td>$250.00</td>
								</tr>
							</tbody>
						</table>
						<a
							class="theme-btn btn-style-one"
							href="shop-checkout.html"
						>
							<span class="btn-title">Proceed to Checkout</span>{' '}
						</a>{' '}
					</div>
				</Modal.Body>
			</Modal>
			<div
				onClick={() => setShow(true)}
				className="card mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
				style={{
					minWidth: '300px',
					height: '330px',
					cursor: 'pointer',
					// backgroundImage: `url(${img})`,
				}}
			>
				<div className="text-center ">
					<img src={img} width={200} />
				</div>
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
					className="card-body d-flex flex-column justify-content-end pt-0"
					style={{ zIndex: 10 }}
				>
					<p className="text-white fw-bold mb-2">{heading}</p>
					<p className="text-white fw-light">{subHeading} </p>
				</div>
			</div>
		</div>
	)
}

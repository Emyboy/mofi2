import React from 'react'
import { BsCheckLg, BsXLg } from 'react-icons/bs'

export default function Metrics({ company }) {
	const iconSize = 22

	const Check = ({ check }) => {
		if (check) {
			return <BsCheckLg size={iconSize} className="text-theme" />
		} else {
			return <BsXLg size={iconSize} className="text-danger" />
		}
	}

	return (
		<div>
			<div className="row" style={{ overflowX: 'auto' }}>
				<div>
					<div className="card bg-theme-light w-100 p-2">
						<h6 className="mb-0 font-weight-normal">
							Operation & Governance
						</h6>
					</div>
					<table className="table table-bordered cart-total">
						<tbody>
							<tr>
								<td>CAC Compliance</td>
								<td>
									<Check check={company.cac_compliance} />
								</td>
								<td>MOFI Board Rep</td>
								<td>
									<Check check={company.board_rep} />{' '}
								</td>
							</tr>
							<tr>
								<td>MOFI Shareholding</td>
								<td>{company.shareholding} </td>
								<td>Staff Strength</td>
								<td>{company.staff_strength}</td>
							</tr>
							<tr>
								<td>Operation cluster</td>
								<td>{company.cluster} </td>
								<td>Total Board Members</td>
								<td> {company.board_members}</td>
							</tr>
							<tr>
								<td>Adequate Operating Structure</td>
								<td>
									{' '}
									<Check
										check={company.operating_structure}
									/>{' '}
								</td>
								<td>Executive Directors</td>
								<td> {company.executive_directors}</td>
							</tr>
						</tbody>
					</table>
					{/* <a
								class="theme-btn btn-style-one"
								href="shop-checkout.html"
							>
								<span class="btn-title">
									Proceed to Checkout
								</span>{' '}
							</a>{' '} */}
				</div>
			</div>
			<div className="row" style={{ overflowX: 'auto' }}>
				<div>
					<div className="card bg-theme-light w-100 p-2">
						<h6 className="mb-0 font-weight-normal">
							Financial Health
						</h6>
					</div>
					<table class="table table-bordered cart-total">
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">FY18 </th>
								<th scope="col">FY19 </th>
								<th scope="col">FY20</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Profit Margin</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">ROE</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">Debt to Equity</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
						</tbody>
					</table>
					{/* <a
								class="theme-btn btn-style-one"
								href="shop-checkout.html"
							>
								<span class="btn-title">
									Proceed to Checkout
								</span>{' '}
							</a>{' '} */}
				</div>
				<div className="d-flex">
					<div className="w-100">
						<div className="card bg-theme-light">
							<div className="card-body">
								<h6 className="text-theme fw-bold mb-2">
									{company.mofi_equity}
								</h6>
								<p className="m-0">
									MOFI Equity Stake (Precedent EV/Revenue)
								</p>
							</div>
						</div>
					</div>
					<span className="px-3" />
					<div className="w-100">
						<div className="card bg-theme-light h-100">
							<div className="card-body">
								<h6 className="text-theme fw-bold mb-2">
									{company.asset_stake}
								</h6>
								<p className="m-0">Net Asset Stake</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

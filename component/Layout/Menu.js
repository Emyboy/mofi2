import * as React from 'react'
import Link from 'next/link'
// import { useWindowSize } from 'react-use'

export const MenuOne = () => {
	return (
		<>
			<div className="">
				<div className="bg-menu">
					<div className="col-lg-12">
						{/* <div className="row"> */}
						<div className="row">
							<div className="col-lg-5 ">
								<div className="column-0">
									<div className="h4 text-white pb-3 fw-bold">
										About us
									</div>
									<p className="text-white col-lg-8 link1">
										An investment institution of the
										Federation set up to manage funds in
										excess of budgeted hydrocarbon revenues.
									</p>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="row">
									<div className="col-lg-3 column-bg2">
										<div className="p-2">
											<img
												src="./img/About.svg"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/about">
												<div className="row d-flex arrow1 p-0">
													<p className="link2 col-lg-10 p-0 text-white ">
														About us
													</p>

													<div className="col-lg-2 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
															className=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-3 column-bg1">
										<div className="p-2">
											<img
												src="./img/Mission.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/about">
												<div className="row d-flex arrow1  p-0">
													<p className="link2 col-lg-11 text-white p-0">
														Mission & Vision
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-3 column-bg2">
										<div className="p-2">
											<img
												src="./img/Pillars.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>

										<div className="mt-2">
											<Link href="/about">
												<div className="row d-flex arrow1 ">
													<p className="link2 col-lg-11 p-0 text-white">
														Strategic pillars
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-3 column-bg1">
										<div className="p-2">
											<img
												src="./img/Scope.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/about">
												<div className="row d-flex arrow1 ">
													<p className="link2 col-lg-11 p-0 text-white">
														Scope of activity
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const MenuTwo = () => {
	return (
		<>
			<div className="">
				<div className="bg-menu">
					<div className="col-lg-12">
						{/* <div className="row"> */}
						<div className="row">
							<div className="col-lg-5 ">
								<div className="column-0">
									<div className="h4 text-white pb-3 fw-bold">
										Governance
									</div>
									<p className="text-white col-lg-7 link1">
										Accountable for monitoring regulatory
										compliance and ensuring best practices
										across board in the organization.
									</p>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="row">
									{/* <div className="col-lg-3  column-bg2">
										<div className="p-2">
											<img
												src="./img/Corporate.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>

										<div className="mt-2">
											<Link href="/governance">
												<div className="row d-flex arrow1">
													<p className="link2 col-lg-10 p-0 text-white">
														Corporate
													</p>

													<div className="col-lg-2 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div> */}
									<div className="col-lg-4 column-bg2">
										<div className="p-2">
											<img
												src="./img/Governance.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/governance">
												<div className="row d-flex arrow1">
													<p className="link2 col-lg-11 p-0 text-white">
														Governing Council
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-4 column-bg1">
										<div className="p-2">
											<img
												src="./img/Board.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/governance">
												<div className="row d-flex arrow1 p-0">
													<p className="link2 col-lg-11 p-0 text-white">
														Board of Directors
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-4 column-bg2">
										<div className="p-2">
											<img
												src="./img/Executive.svg"
												// className="w-100"
												width={'48px'}
												alt=""
											/>
										</div>
										<div className="mt-2">
											<Link href="/governance">
												<div className="row d-flex arrow1">
													<p className="link2 col-lg-11 p-0 text-white">
														Executive Mangement
													</p>

													<div className="col-lg-1 p-0">
														<img
															src="./img/Frame.svg"
															// className="w-5"
															width={'28px'}
															alt=""
														/>
													</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const MenuThree = () => {
	return (
		<>
			<div className="">
				<div className="bg-menu">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-7 column-0">
								<div className="col-lg-8">
									<div className="h4 text-white pb-3 fw-bold">
										Investment
									</div>
									<p className="text-white link1">
										Across the three funds, investments are
										made in high-priority projects with the
										aim of catalysing developments on a
										national scale to stimulate economic
										growth.
									</p>
								</div>
							</div>

							<div className="col-lg-2 column-bg">
								<div className="p-2">
									<img
										src="./img/Port.svg"
										width={'48px'}
										alt=""
									/>
								</div>

								<div className="mt-2">
									<Link href="/investment">
										<div className="row d-flex arrow1">
											<p className="link2 col-lg-11 p-0 text-white">
												Portfolio Companies
											</p>

											<div className="col-lg-1 p-0">
												<img
													src="./img/Frame.svg"
													// className="w-5"
													width={'28px'}
													alt=""
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 column-bg1">
								<div className="p-2">
									<img
										src="./img/Invest.svg"
										width={'48px'}
										alt=""
									/>
								</div>

								<div className="mt-2">
									<Link href="/investment">
										<div className="row d-flex arrow1 p-0">
											<p className="link2 col-lg-11 p-0 text-white">
												Investment Philosophy
											</p>

											<div className="col-lg-1 p-0">
												<img
													src="./img/Frame.svg"
													// className="w-5"
													width={'28px'}
													alt=""
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export const MenuFour = () => {
	return (
		<>
			<div className="">
				<div className="bg-menu">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-9 column-0">
								<div className="col-lg-8">
									<div className="h4 text-white pb-3 fw-bold">
										Resources
									</div>
									<p className="text-white col-lg-8 link1">
										Whether through our periodic press
										briefings or at our annual governing
										council meetings, we engage to provide
										context, create awareness and elicit
										understanding for each decision made and
										investment undertaken.
									</p>
								</div>
							</div>
							<div className="col-lg-3 column-bg">
								<div className="p-2">
									<img
										src="./img/Port.svg"
										// className="w-100"
										width={'48px'}
										alt=""
									/>
								</div>
								<div className="mt-2">
									<Link href="/media">
										<div className="row d-flex arrow1 p-0">
											<p className="link2 col-lg-11 p-0 text-white">
												News/Media
											</p>

											<div className="col-lg-1 p-0">
												<img
													src="./img/Frame.svg"
													// className="w-5"
													width={'28px'}
													alt=""
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
							{/* <div className="col-lg-3 column-bg1">
								<img
									src="./img/Invest.svg"
									// className="w-100"
									width={'48px'}
									alt=""
								/>
								<div className="mt-2">
								<Link href="/">
								
								</Link>
									<div className="row d-flex">
										<p className="link col-lg-7 text-white">
											Investment Philosophy
										</p>

										<div className="col-lg-5 p-0">
											<img
												src="./img/Frame.svg"
												// className="w-5"
												width={'28px'}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

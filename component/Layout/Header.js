import React from 'react'
import Img from 'next/image'
import Link from 'next/link'

export default function Header() {
	const toggleSideNav = () => {}

	return (
		<header className="navbar navbar-expand-lg navbar-light bg-light px-5 py-1">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-between"
				id="navbarTogglerDemo01"
			>
				<a className="navbar-brand" href="#">
					<Img src='/img/logo.png' width={100} height={100} />
				</a>
				<nav className="main-menu">
					<div className="navbar-collapse show collapse clearfix">
						<ul className="navigation clearfix">
							<li className="current ">
								<Link className="text-dark" href="/">
									Home
								</Link>
							</li>
							<li className="">
								<Link className="text-dark" href="/about">
									About
								</Link>
							</li>
							<li className=" ">
								<Link className="text-dark" href="/governance">
									Governance
								</Link>
							</li>
							<li className=" ">
								<Link className="text-dark" href="/investment">
									Investment
								</Link>
							</li>
							<li className=" ">
								<Link className="text-dark" href="/governance">
									Resources
								</Link>
							</li>
							<li className="dropdown">
								<a href="#" className='text-dark'>Dropdown</a>
								<ul>
									<li>
										<a href="page-about.html">About</a>
									</li>
									<li className="dropdown">
										<a href="#" className='text-dark'>Projects</a>
										<ul>
											<li>
												<a href="page-projects.html">
													Projects List
												</a>
											</li>
											<li>
												<a href="page-project-details.html">
													Project Details
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li className="dropdown">
										<a href="#" className='text-dark'>Team</a>
										<ul>
											<li>
												<a href="page-team.html">
													Team List
												</a>
											</li>
											<li>
												<a href="page-team-details.html">
													Team Details
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li>
										<a href="page-testimonial.html">
											Testimonial
										</a>
									</li>
									<li>
										<a href="page-faq.html">FAQ</a>
									</li>
									<li>
										<a href="page-404.html">Page 404</a>
									</li>
								</ul>
								<div className="dropdown-btn">
									<i className="fa fa-angle-down"></i>
								</div>
							</li>
							
						</ul>
					</div>
				</nav>
				<form className="form-inline my-2 my-lg-0">
					<button
						className="bg-theme text-white btn my-2 my-sm-0"
						type="submit"
					>
						Contact Us
					</button>
				</form>
			</div>
		</header>
	)
}

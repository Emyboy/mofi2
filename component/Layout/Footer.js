import Link from 'next/link'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

export default function Footer() {
	return (
		<footer className="main-footer">
			<div className="bg-pattern"></div>

			<div className="widgets-section">
				<div className="auto-container">
					<div className="row">
						<div className="footer-column col-xl-3 col-lg-4">
							<div className="footer-widget links-widget">
								<h6 className="widget-title">Explore</h6>
								<ul className="user-links">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/governance">
											Corporate Governance
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-column col-xl-3 col-lg-4">
							<div className="footer-widget links-widget">
								<h6 className="widget-title">Quick Links</h6>
								<ul className="user-links">
									<li>
										<Link href="/investment">
											Our Investment Philosophy
										</Link>
									</li>
									<li>
										<Link href="/resources">
											News, Media & Resources
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-column col-xl-3 col-lg-4">
							<div className="footer-widget links-widget">
								<h6 className="widget-title">Support</h6>
								<ul className="user-links">
									<li>
										<Link href="/contact">Give us feedback</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="footer-column col-xl-3 col-lg-4">
							<div className="footer-widget contacts-widget">
								<h6 className="widget-title">Contact</h6>
								<div className="text">
									Tower 2 BOI Bldg, Plot 256 A O., Herbert
									Macaulay Way, CBD, Abuja
								</div>
								<ul className="contact-info">
									<li>
										{/* <i className="las fa la-envelope-open text-theme"></i> */}
										<a href="mailto:info@mofi.com.ng">
											info@mofi.com.ng
										</a>
										<br />
									</li>
									<li>
										{/* <BsFillTelephoneFill /> */}
										<a href="tel:0916-194-9158">
											0916-194-9158
										</a>
										<br />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="auto-container">
					<div className="inner-container row justify-content-between">
						<div className="copyright-text col-lg-4 col-sm-12">
							<img
								alg="flag"
								src="/img/flag.png"
								className="mx-1 bg-white rounded-circle"
							/>
							© 2023 MOFI. All right reserved.
						</div>
						<div className="copyright-text col-lg-4 col-sm-12">
							<ul className="nav">
								<li className="nav-item d-flex">
									<a
										className="nav-link text-white fw-light"
										aria-current="page"
										href="#"
									>
										Twitter
									</a>
									<a
										className="nav-link text-white fw-light"
										aria-current="page"
										href="#"
									>
										Instagram
									</a>
									<a
										className="nav-link text-white fw-light"
										aria-current="page"
										href="#"
									>
										Facebook
									</a>
									<a
										className="nav-link text-white fw-light"
										aria-current="page"
										href="#"
									>
										Linkedin
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

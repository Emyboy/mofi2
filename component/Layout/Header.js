import React from 'react'

export default function Header() {
	return (
		<header className="main-header header-style-one">
			<div className="header-lower">
				<div className="container-fluid">
					<div className="main-box">
						<div className="logo-box">
							<div className="logo">
								<a href="index.html">
									<img
										src="/assets/images/logo.png"
										alt=""
										title="Tronis"
									/>
								</a>
							</div>
						</div>

						<div className="nav-outer">
							<nav className="nav main-menu">
								<ul className="navigation">
									<li className="current dropdown">
										<a href="index.html">Home</a>
										<ul>
											<li>
												<a href="index.html">
													Home page 01
												</a>
											</li>
											<li>
												<a href="index-2.html">
													Home page 02
												</a>
											</li>
											<li>
												<a href="index-3.html">
													Home page 03
												</a>
											</li>
											<li className="dropdown">
												<a href="#">Header Styles</a>
												<ul>
													<li>
														<a href="index.html">
															Header Style One
														</a>
													</li>
													<li>
														<a href="index-2.html">
															Header Style Two
														</a>
													</li>
													<li>
														<a href="index-3.html">
															Header Style three
														</a>
													</li>
												</ul>
												<div className="dropdown-btn">
													<i className="fa fa-angle-down"></i>
												</div>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li className="dropdown">
										<a href="#">Pages</a>
										<ul>
											<li>
												<a href="page-about.html">
													About
												</a>
											</li>
											<li className="dropdown">
												<a href="#">Projects</a>
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
												<a href="#">Team</a>
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
												<a href="page-404.html">
													Page 404
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li className="dropdown">
										<a href="#">Services</a>
										<ul>
											<li>
												<a href="page-services.html">
													Services List
												</a>
											</li>
											<li>
												<a href="page-service-details.html">
													Service Details
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li className="dropdown">
										<a href="#">Shop</a>
										<ul>
											<li>
												<a href="shop-products.html">
													Products
												</a>
											</li>
											<li>
												<a href="shop-products-sidebar.html">
													Products with Sidebar
												</a>
											</li>
											<li>
												<a href="shop-product-details.html">
													Product Details
												</a>
											</li>
											<li>
												<a href="shop-cart.html">
													Cart
												</a>
											</li>
											<li>
												<a href="shop-checkout.html">
													Checkout
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li className="dropdown">
										<a href="#">News</a>
										<ul>
											<li>
												<a href="news-grid.html">
													News Grid
												</a>
											</li>
											<li>
												<a href="news-details.html">
													News Details
												</a>
											</li>
										</ul>
										<div className="dropdown-btn">
											<i className="fa fa-angle-down"></i>
										</div>
									</li>
									<li>
										<a href="page-contact.html">
											Get in Touch
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div className="outer-box">
							<div className="ui-btn-outer">
								<button className="ui-btn ui-btn search-btn">
									<span className="icon lnr lnr-icon-search"></span>
								</button>
							</div>

							<a href="tel:+92(8800)9806" className="info-btn">
								<i className="icon fa fa-phone"></i>
								<small>Call Anytime</small>+ 88 ( 9800 ) 6802-00
							</a>

							<div className="mobile-nav-toggler">
								<span className="icon lnr-icon-bars"></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-menu">
				<div className="menu-backdrop"></div>

				<nav className="menu-box">
					<div className="upper-box">
						<div className="nav-logo">
							<a href="index.html">
								<img src="/assets/images/logo-2.png" alt="" title="" />
							</a>
						</div>
						<div className="close-btn">
							<i className="icon fa fa-times"></i>
						</div>
					</div>

					<ul className="navigation clearfix">
						<li className="current dropdown">
							<a href="index.html">Home</a>
							<ul>
								<li>
									<a href="index.html">Home page 01</a>
								</li>
								<li>
									<a href="index-2.html">Home page 02</a>
								</li>
								<li>
									<a href="index-3.html">Home page 03</a>
								</li>
								<li className="dropdown">
									<a href="#">Header Styles</a>
									<ul>
										<li>
											<a href="index.html">
												Header Style One
											</a>
										</li>
										<li>
											<a href="index-2.html">
												Header Style Two
											</a>
										</li>
										<li>
											<a href="index-3.html">
												Header Style three
											</a>
										</li>
									</ul>
									<div className="dropdown-btn">
										<i className="fa fa-angle-down"></i>
									</div>
								</li>
							</ul>
							<div className="dropdown-btn">
								<i className="fa fa-angle-down"></i>
							</div>
						</li>
						<li className="dropdown">
							<a href="#">Pages</a>
							<ul>
								<li>
									<a href="page-about.html">About</a>
								</li>
								<li className="dropdown">
									<a href="#">Projects</a>
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
									<a href="#">Team</a>
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
						<li className="dropdown">
							<a href="#">Services</a>
							<ul>
								<li>
									<a href="page-services.html">
										Services List
									</a>
								</li>
								<li>
									<a href="page-service-details.html">
										Service Details
									</a>
								</li>
							</ul>
							<div className="dropdown-btn">
								<i className="fa fa-angle-down"></i>
							</div>
						</li>
						<li className="dropdown">
							<a href="#">Shop</a>
							<ul>
								<li>
									<a href="shop-products.html">Products</a>
								</li>
								<li>
									<a href="shop-products-sidebar.html">
										Products with Sidebar
									</a>
								</li>
								<li>
									<a href="shop-product-details.html">
										Product Details
									</a>
								</li>
								<li>
									<a href="shop-cart.html">Cart</a>
								</li>
								<li>
									<a href="shop-checkout.html">Checkout</a>
								</li>
							</ul>
							<div className="dropdown-btn">
								<i className="fa fa-angle-down"></i>
							</div>
						</li>
						<li className="dropdown">
							<a href="#">News</a>
							<ul>
								<li>
									<a href="news-grid.html">News Grid</a>
								</li>
								<li>
									<a href="news-details.html">News Details</a>
								</li>
							</ul>
							<div className="dropdown-btn">
								<i className="fa fa-angle-down"></i>
							</div>
						</li>
						<li>
							<a href="page-contact.html">Get in Touch</a>
						</li>
					</ul>
					<ul className="contact-list-one">
						<li>
							<div className="contact-info-box">
								<i className="icon lnr-icon-phone-handset"></i>
								<span className="title">Call Now</span>
								<a href="tel:+92880098670">
									+92 (8800) - 98670
								</a>
							</div>
						</li>
						<li>
							<div className="contact-info-box">
								<span className="icon lnr-icon-envelope1"></span>
								<span className="title">Send Email</span>
								<a href="mailto:help@company.com">
									help@company.com
								</a>
							</div>
						</li>
						<li>
							<div className="contact-info-box">
								<span className="icon lnr-icon-clock"></span>
								<span className="title">Send Email</span>
								Mon - Sat 8:00 - 6:30, Sunday - CLOSED
							</div>
						</li>
					</ul>

					<ul className="social-links">
						<li>
							<a href="#">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fa-pinterest"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="search-popup">
				<span className="search-back-drop"></span>
				<button className="close-search">
					<span className="fa fa-times"></span>
				</button>

				<div className="search-inner">
					<form
						method="post"
						action="https://kodesolution.com/html/2023/amiso-html/index.html"
					>
						<div className="form-group">
							<input
								type="search"
								name="search-field"
								value=""
								placeholder="Search..."
								required=""
							/>
							<button type="submit">
								<i className="fa fa-search"></i>
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="sticky-header">
				<div className="auto-container">
					<div className="inner-container">
						<div className="logo">
							<a href="index.html" title="">
								<img src="/assets/images/logo-2.png" alt="" title="" />
							</a>
						</div>

						<div className="nav-outer">
							<nav className="main-menu">
								<div className="navbar-collapse show collapse clearfix">
									<ul className="navigation clearfix">
										<li className="current dropdown">
											<a href="index.html">Home</a>
											<ul>
												<li>
													<a href="index.html">
														Home page 01
													</a>
												</li>
												<li>
													<a href="index-2.html">
														Home page 02
													</a>
												</li>
												<li>
													<a href="index-3.html">
														Home page 03
													</a>
												</li>
												<li className="dropdown">
													<a href="#">
														Header Styles
													</a>
													<ul>
														<li>
															<a href="index.html">
																Header Style One
															</a>
														</li>
														<li>
															<a href="index-2.html">
																Header Style Two
															</a>
														</li>
														<li>
															<a href="index-3.html">
																Header Style
																three
															</a>
														</li>
													</ul>
													<div className="dropdown-btn">
														<i className="fa fa-angle-down"></i>
													</div>
												</li>
											</ul>
											<div className="dropdown-btn">
												<i className="fa fa-angle-down"></i>
											</div>
										</li>
										<li className="dropdown">
											<a href="#">Pages</a>
											<ul>
												<li>
													<a href="page-about.html">
														About
													</a>
												</li>
												<li className="dropdown">
													<a href="#">Projects</a>
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
													<a href="#">Team</a>
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
													<a href="page-faq.html">
														FAQ
													</a>
												</li>
												<li>
													<a href="page-404.html">
														Page 404
													</a>
												</li>
											</ul>
											<div className="dropdown-btn">
												<i className="fa fa-angle-down"></i>
											</div>
										</li>
										<li className="dropdown">
											<a href="#">Services</a>
											<ul>
												<li>
													<a href="page-services.html">
														Services List
													</a>
												</li>
												<li>
													<a href="page-service-details.html">
														Service Details
													</a>
												</li>
											</ul>
											<div className="dropdown-btn">
												<i className="fa fa-angle-down"></i>
											</div>
										</li>
										<li className="dropdown">
											<a href="#">Shop</a>
											<ul>
												<li>
													<a href="shop-products.html">
														Products
													</a>
												</li>
												<li>
													<a href="shop-products-sidebar.html">
														Products with Sidebar
													</a>
												</li>
												<li>
													<a href="shop-product-details.html">
														Product Details
													</a>
												</li>
												<li>
													<a href="shop-cart.html">
														Cart
													</a>
												</li>
												<li>
													<a href="shop-checkout.html">
														Checkout
													</a>
												</li>
											</ul>
											<div className="dropdown-btn">
												<i className="fa fa-angle-down"></i>
											</div>
										</li>
										<li className="dropdown">
											<a href="#">News</a>
											<ul>
												<li>
													<a href="news-grid.html">
														News Grid
													</a>
												</li>
												<li>
													<a href="news-details.html">
														News Details
													</a>
												</li>
											</ul>
											<div className="dropdown-btn">
												<i className="fa fa-angle-down"></i>
											</div>
										</li>
										<li>
											<a href="page-contact.html">
												Get in Touch
											</a>
										</li>
									</ul>
								</div>
							</nav>

							<div className="mobile-nav-toggler">
								<span className="icon lnr-icon-bars"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

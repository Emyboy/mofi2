import React from 'react'
import { AiFillMail, AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'

export default function ContactForm() {
	return (
		<>
			<section>
				<div className="container">
					<div className="card bg-theme">
						<div className="card-body p-5">
							<h3 className="font-weight-normal text-white">
								{' '}
								Whistle Blowing
							</h3>
							<p className="text-white">
								You can report a concern using any of our
								available reporting channels.
							</p>
							<div className="bg-theme-dark mt-4 p-4">
								<h6 className="text-white fw-light">
									Hotline:{' '}
									<strong className="text-white">
										0916-194-9158 0700-CALL-MOFI
										(0700-2255-6634)
									</strong>
								</h6>
								<h6 className="text-white fw-light">
									Website:{' '}
									<strong className="text-white">
										http://mofi.com.ng
									</strong>
								</h6>
								<h6 className="text-white fw-light">
									E-mail:{' '}
									<strong className="text-white">
										info@mofi.com.ng
									</strong>
								</h6>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="contact-details">
				<div className="container ">
					<div className="row">
						<div className="col-xl-5 col-lg-6 mb-md-60">
							<div className="contact-details__right">
								<div className="sec-title">
									<span className="sub-title">
										Need any help?
									</span>
									<h2>Get in touch with us</h2>
									<div className="text">
										Our user-friendly interface and
										intuitive features make managing your
										finances a breeze, so you can focus on
										the things that matter most.
									</div>
								</div>
								<ul className="list-unstyled contact-details__info">
									<li>
										<div className="icon">
											<span>
												<AiFillPhone />
											</span>
										</div>
										<div className="text">
											<h6>Have any question?</h6>
											<a href="tel:0916-194-9158">
												<span>Free</span> 0916-194-9158
											</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span>
												<AiFillMail />
											</span>
										</div>
										<div className="text">
											<h6>Write email</h6>
											<a href="mailto:Info@mofi.com.ng">
												Info@mofi.com.ng
											</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span>
												<ImLocation2 />
											</span>
										</div>
										<div className="text">
											<h6>Visit anytime</h6>
											<span>
												Tower 2 BOI Bldg, Plot 256 A O
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-7 col-lg-6">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.147500347042!2d7.486077214786811!3d9.050307293506078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba3b9a67473%3A0xa9752fe58c8b73c3!2sBank%20Of%20Industry!5e0!3m2!1sen!2sng!4v1675791711525!5m2!1sen!2sng"
								width="100%"
								height="550"
								frameborder="0"
								allowfullscreen=""
								// style="border:0;"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								className="rounded"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			<section className="team-contact-form" id="message">
				<div className="container pb-100">
					<div className="sec-title text-center">
						<span className="sub-title">Contact With Us Now</span>
						<h2 className="section-title__title">
							Feel Free to Write Our <br /> Tecnology Experts
						</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<form
								id="contact_form"
								name="contact_form"
								className=""
								action="includes/sendmail.php"
								method="post"
								novalidate="novalidate"
							>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input
												name="form_name"
												className="form-control"
												type="text"
												placeholder="Enter Name"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input
												name="form_email"
												className="form-control required email"
												type="email"
												placeholder="Enter Email"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input
												name="form_subject"
												className="form-control required"
												type="text"
												placeholder="Enter Subject"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input
												name="form_phone"
												className="form-control"
												type="text"
												placeholder="Enter Phone"
											/>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<textarea
										name="form_message"
										className="form-control required"
										rows="5"
										placeholder="Enter Message"
									></textarea>
								</div>
								<div className="mb-3 text-center">
									<input
										name="form_botcheck"
										className="form-control"
										type="hidden"
										value=""
									/>
									<button
										type="submit"
										className="theme-btn btn-style-one"
										data-loading-text="Please wait..."
									>
										<span className="btn-title">
											Send message
										</span>
									</button>
									{/* <button
										type="reset"
										className="theme-btn btn-style-one"
									>
										<span className="btn-title">Reset</span>
									</button> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

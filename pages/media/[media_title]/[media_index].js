import { Media } from '@/Media'
import Layout from '@/component/Layout/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import renderHTML from 'react-render-html'

export default function mediaDetails() {
	const router = useRouter()
	const { media_index } = router.query

	const renderIndex = () => {
		switch (media_index) {
			case '0':
				return 0
			case '1':
				return 1
			default:
				return 0
		}
	}

	return (
		<Layout>
			<section className="blog-details">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-7">
							<div className="blog-details__left">
								<div className="blog-details__img">
									<div
										style={{
											backgroundImage: `url(${
												Media[renderIndex()].img
											})`,
											height: '500px',
											borderRadius: '10px',
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}
									/>
									{/* <div className="blog-details__date">
										<span className="day">28</span>
										<span className="month">Aug</span>
									</div> */}
								</div>
								<div className="blog-details__content">
									{/* <ul className="list-unstyled blog-details__meta">
										<li>
											<a href="news-details.html">
												<i className="fas fa-user-circle"></i>{' '}
												Admin
											</a>{' '}
										</li>
										<li>
											<a href="news-details.html">
												<i className="fas fa-comments"></i>{' '}
												02 Comments
											</a>
										</li>
									</ul> */}
									<h3 className="blog-details__title">
										Delivering the best web design agency
									</h3>
									{renderHTML(Media[renderIndex()].body)}
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5">
							<div className="sidebar ">
								<div
									className="sidebar__single sidebar__post bg-theme-light"
									style={{ zIndex: 0 }}
								>
									<h3 className="sidebar__title">
										Latest Posts
									</h3>
									<ul className="sidebar__post-list list-unstyled">
										{Media.map((med, index) => {
											return (
												<li key={`med-${index}`}>
													<div className="sidebar__post-image">
														{' '}
														<div
															style={{
																backgroundImage: `url(${med.img})`,
																height: '100px',
																borderRadius:
																	'10px',
																backgroundSize:
																	'cover',
																backgroundPosition:
																	'center',
																width: '97px',
															}}
														/>
													</div>
													<div className="sidebar__post-content">
														<h3>
															{' '}
															{/* <span className="sidebar__post-content-meta">
																<i className="fas fa-user-circle"></i>
																Admin
															</span>{' '} */}
															<Link
																href={`/media/${med.title}/${index}`}
															>
																{med.title}
															</Link>
														</h3>
													</div>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

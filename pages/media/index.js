import { Media } from '@/Media'
import Layout from '@/component/Layout/Layout'
import EachMedia from '@/component/Media/EachMedia'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function media() {
	return (
		<Layout>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(https://media.istockphoto.com/id/1350299630/photo/empty-dark-space-3d-illustration-n.jpg?s=612x612&w=0&k=20&c=QuzQ5vEUr8xSeFL9fK9K9Q34aMkQD7LLTvAVx54Qx-w=)`,
				}}
			>
				<div className="auto-container">
					<div className="title-outer">
						<h1 className="title">Media</h1>
						<ul className="page-breadcrumb">
							<li>
								<Link href={`/`}>Home</Link>
							</li>
							<li>Media</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="bg-silver-light">
				<div className="container pb-90">
					<div className="d-flex justify-content-end">
						<div class="sidebar__single sidebar__search mb-4 col-md-5 col-sm-12">
							<form action="#" class="sidebar__search-form">
								<input
									type="search"
									placeholder="Search here"
									className="text-black"
									style={{ backgroundColor: '#FFFFFF' }}
								/>
								<button type="submit">
									<FaSearch className="text-muted" />
								</button>
							</form>
						</div>
					</div>
					<div className="row">
						{Media.map((media, i) => {
							return <EachMedia key={i} media={media} index={i} />
						})}
					</div>
					<section className="d-flex justify-content-center my-4">
						{[
							new Array(10).fill(null).map((media, i) => {
								return (
									<div
										className={`bg-white mx-1 d-flex align-items-center justify-content-center ${
											i === 4 && `bg-theme`
										}`}
										style={{
											width: '60px',
											height: '60px',
										}}
									>
										<p
											className={`m-0 ${
												i === 4 && `text-white`
											}`}
										>
											{i + 1}
										</p>
									</div>
								)
							}),
						]}
					</section>
				</div>
			</section>
		</Layout>
	)
}

import { Media } from '@/Media'
import Layout from '@/component/Layout/Layout'
import EachMedia from '@/component/Media/EachMedia'
import Link from 'next/link'
import React from 'react'

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
						<h1 className="title">News</h1>
						<ul className="page-breadcrumb">
							<li>
								<Link href={`/`}>Home</Link>
							</li>
							<li>News</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="bg-silver-light">
				<div className="container pb-90">
					<div className="row">
						{Media.map((media, i) => {
							return <EachMedia key={i} media={media} index={i} />
						})}
					</div>
				</div>
			</section>
		</Layout>
	)
}

import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function EachMedia({ media, index }) {
	return (
		<div className="news-block col-xl-4 col-lg-6 col-md-6">
			<div className="inner-box">
				<div className="image-box">
					<figure className="image">
						<Link href={`/media/${media?.title}/${index}`}>
							<img src={media?.img} alt="" />
						</Link>
					</figure>
				</div>
				<div className="content-box">
					{/* <span className="date">12 Jan, 2023</span> */}
					{/* <span className="post-info">
						<i className="fa fa-user-circle"></i> by Admin
					</span> */}
					<h5 className="title">
						<Link href={`/media/${media?.title}/${index}`}>
							{media.title}
						</Link>
					</h5>
					{/* <div className="text">
						Lorem ipsum dolor sit amet, coned sectetur notte elit
						sed do.
					</div> */}
					<Link
						href={`/media/${media?.title}/${index}`}
						className="read-more"
					>
						<i><BsArrowRight /></i> Read More
					</Link>
				</div>
			</div>
		</div>
	)
}

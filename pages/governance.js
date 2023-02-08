import Layout from '@/component/Layout/Layout'
import Data from '@/Data'
import React from 'react'

export default function governance() {
	return (
		<Layout>
			<div className="mb-5">
				{Data.governance.map((val, index) => {
					return (
						<>
							<SectionHeader
								heading={val.sectionTitle}
								subHeading={val.sectionDescription}
							/>
							<div className="container">
								<div className="row">
									{val.people?.map((person, i) => {
										return <EachGov person={person} />
									})}
								</div>
							</div>
						</>
					)
				})}
			</div>
		</Layout>
	)
}

const EachGov = ({ person }) => {
	return (
		<div className="col-md-4 mb-4">
			<div
				className="card bg-dark mx-3 bg-img image-1 overlay-anim wow fadeInUp animated"
				style={{
					minWidth: '300px',
					height: '430px',
					backgroundImage: `url(${person?.img})`,
				}}
			>
				<div
					className="overlay p-4"
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						bottom: 0,
						right: 0,
					}}
				/>
				<div
					className="card-body d-flex flex-column justify-content-end"
					style={{ zIndex: 10 }}
				>
					<p className="text-white fw-bold m-0">{person.title}</p>
					{person.subTitle && (
						<p className="text-white fw-light mb-1">
							{person.subTitle}{' '}
						</p>
					)}
					<p className="fw-bold text-white m-0">{person.position} </p>
				</div>
			</div>
		</div>
	)
}

const SectionHeader = ({ heading, subHeading }) => {
	return (
		<section className="py-5 bg-white">
			<div className="auto-container">
				<div className="title-outer">
					<h3
						className="title font-weight-normal"
						style={{
							fontWeight: 'normal',
							lineHeight: '79px',
						}}
					>
						{heading}
					</h3>
					<div className="page-breadcrumb py-3 col-sm-12">
						<p>{subHeading}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

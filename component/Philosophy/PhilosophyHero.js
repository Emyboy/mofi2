import Constants from '@/constants'
import React, { useEffect, useState } from 'react'
import { AiFillPieChart } from 'react-icons/ai'
import { useWindowSize } from 'react-use'

export default function PhilosophyHero() {
	return (
		<>
			<section
				className="page-title"
				style={{
					backgroundImage: `url(https://i.pinimg.com/originals/8f/5a/e7/8f5ae70811c317d0e861fde6cd3a9646.jpg)`,
					paddingBottom: '26vh',
				}}
			>
				<div className="auto-container">
					<div className="title-outer">
						<h1
							className="title "
							style={{
								fontWeight: 'normal',
								lineHeight: '79px',
							}}
						>
							Our Investment Philosophy
						</h1>
						<div className="page-breadcrumb py-3">
							<p className="text-white">
								MOFI’s investment philosophy is based on a set
								of principles derived from its mandate and
								<br /> mission statement, which guides its
								decision making when it comes to investments.
								The
								<br /> philosophy is defined along four
								dimensions:
							</p>
						</div>
					</div>
				</div>
			</section>
			<div
				className="container"
				style={{ position: 'relative', top: '-171px' }}
			>
				<div className="row my-5">
					<EachCard
						text={`Portfolio composition and asset mix`}
						Icon={<img src={`/img/home.png`} />}
					/>
					<EachCard
						text={`Portfolio management & Value-creation approach`}
						Icon={<img src={`/img/chart.png`} />}
					/>
					<EachCard
						Icon={<img src={`/img/company.png`} />}
						text={`Governance and interaction with portfolio companies`}
					/>
				</div>
			</div>
		</>
	)
}

const EachCard = ({ text, Icon }) => {
	const { width } = useWindowSize()
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	if(!show){
		return null
	}

	return (
		<div className="col-sm-12 col-md-4 mb-4">
			<div
				className="card"
				style={{
					backgroundImage: `url(/img/philosophy-card-bg.png)`,
					height: width < Constants.tablet_width ? '300px' : '318px',
					backgroundSize: 'auto',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="card-body p-5">
					<p className="text-white h4">{text}</p>
					<span
						style={{
							position: 'absolute',
							right: 20,
							bottom: 20,
							fontSize: 60,
						}}
						className="m-0 text-theme"
					>
						{Icon}
					</span>
				</div>
			</div>
		</div>
	)
}

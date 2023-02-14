import AboutUsHero from '@/component/AboutUs/AboutUsHero'
import MissionAndVision from '@/component/AboutUs/MissionAndVision'
import StrategicPillars from '@/component/AboutUs/StrategicPillars'
import TheScope from '@/component/AboutUs/TheScope'
import Layout from '@/component/Layout/Layout'
import React from 'react'

export default function about() {
	return (
		<Layout>
			<AboutUsHero />
			<br />
			<br />
			<StrategicPillars />
			<MissionAndVision />
			<TheScope />
			<section>
				<div className="container my-">
					<h3 className="mb-4 text-theme">Our Asset Classes</h3>
					<br />
					<div className="row">
						<EachAboutCard
							heading={`Corporate assets`}
							body={`Cash-flow-generating transactions, such as concession agreements and public private partnerships`}
							img={`https://cdn.punchng.com/wp-content/uploads/2023/01/24103941/POS-operator.jpg`}
						/>
						<EachAboutCard
							heading={`Financial assets`}
							body={`Corporate assets owned wholly or partly by the federal government. i.e. shares of publicly traded entities etc`}
							img={`https://cloudinary.hbs.edu/hbsit/image/upload/s--KVUY10MC--/f_auto,c_fill,h_375,w_750,/v20200101/25180C59E7106063072ED42149A6C880.jpg`}
						/>
						<EachAboutCard
							heading={`Fixed assets`}
							body={`Fixed assets (including real estate)`}
							img={`https://www.genequityco.com/images/general/11-57bc678b26fe8.jpg`}
						/>
						<EachAboutCard
							heading={`Mineral and intangible assets`}
							body={`Mineral and intangible assets (hydrocarbons)`}
							img={`https://media.istockphoto.com/id/1202891900/photo/3d-illustration-of-molecule-model-atom-benzil-a-compound-of-hydrogen-and-carbon.jpg?s=612x612&w=0&k=20&c=XP7dMalFeh1PToeB3paEZS7__vVm5qJuTxUqLAwEumQ=`}
						/>
						<EachAboutCard
							heading={`Cash-flow-generating transactions`}
							body={`Cash-flow-generating transactions, such as concession agreements and public private partnerships`}
							img={`https://www.brookings.edu/wp-content/uploads/2016/07/dollars_naira001.jpg`}
						/>
					</div>
				</div>
			</section>
		</Layout>
	)
}

const EachAboutCard = ({ heading, body, img }) => {
    return (
		<div className="col-sm-12 col-md-12 col-lg-4 mb-3">
			<div className="card bg-theme h-100">
				<div className="card-body p-5">
					<h6 className="fw-bold text-white">{heading}</h6>
					<p className=" text-white">{body}</p>
				</div>
				<div
					className="bg-img"
					style={{ backgroundImage: `url(${img})`, height: '200px' }}
				/>
			</div>
		</div>
	)
}

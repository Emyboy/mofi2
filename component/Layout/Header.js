import React, { useEffect, useState } from 'react'
import Img from 'next/image'
import Link from 'next/link'
import { useWindowSize } from 'react-use'
import Constants from '@/constants'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MenuOne, MenuTwo, MenuThree, MenuFour } from './Menu.js'
import {
	BsFacebook,
	BsLinkedin,
	BsMailbox,
	BsMap,
	BsPhone,
	BsTwitter,
	BsX,
} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const navs = [
	{
		name: 'Home',
		route: '/',
	},
	{
		name: 'About Us',
		route: '/about',
	},
	{
		name: 'Governance',
		route: '/governance',
	},
	{
		name: 'Investment',
		route: '/investment',
	},
	{
		name: 'Resources',
		route: '/resources',
	},
]
export default function Header({ pageName }) {
	const [show, setShow] = useState(false)
	const { width } = useWindowSize()
	const [showNav, setShowNav] = useState(false)

	const toggleSideNav = () => {
		setShowNav(!showNav)
	}

	useEffect(() => {
		if (showNav) {
			document.querySelector('body').classList.add('mobile-menu-visible')
		} else {
			document
				.querySelector('body')
				.classList.remove('mobile-menu-visible')
		}
	}, [showNav])

	useEffect(() => {
		setShow(true)
	}, [])

	if (width < Constants.tablet_width && show) {
		return (
			<>
				{showNav && <MobileMenu onClose={toggleSideNav} />}
				<header
					className="navbar bg-white px-2 py-4 d-flex justify-content-between"
					onClick={toggleSideNav}
				>
					<Link className="navbar-brand" href="/">
						<Img src="/img/logom.svg" width={100} height={100} />
					</Link>
					<button className="btn p-0">
						<HiMenuAlt3 size={30} />
					</button>
				</header>
			</>
		)
	}
	if (!show || width < Constants.tablet_width) {
		return null
	}

	return (
		<header className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3">
			<div
				className="collapse navbar-collapse justify-content-between"
				id="navbarTogglerDemo01"
			>
				<Link className="navbar-brand" href="/">
					<Img src="/img/logom.svg" width={200} height={100} />
				</Link>
				<div className="navbar1 ">
					<Link
						href="/"
						className={`link2 lii ${
							pageName === 'home' && 'active1'
						}`}
					>
						Home
					</Link>

					<div className="dropdown1">
						<button className="dropbtn1 lii link2">
							About
							{/* <i className="fa fa-angle-down"></i> */}
							<FontAwesomeIcon
								icon={faAngleDown}
								className="arrow"
							/>
							{/* <FontAwesomeIcon icon={faAngle} /> */}
						</button>
						<div className="dropdown-content1">
							<MenuOne />
						</div>
					</div>
					<div className="dropdown1">
						<button className="dropbtn1 lii link2">
							Governance
							{/* <i className="fa fa-angle-down"></i> */}
							<FontAwesomeIcon
								icon={faAngleDown}
								className="arrow"
							/>
						</button>
						<div className="dropdown-content1">
							<MenuTwo />
						</div>
					</div>
					<div className="dropdown1">
						<button className="dropbtn1 lii link2">
							Investment
							{/* <i className="fa fa-angle-down"></i> */}
							<FontAwesomeIcon
								icon={faAngleDown}
								className="arrow"
							/>
						</button>
						<div className="dropdown-content1">
							<MenuThree />
						</div>
					</div>
					<div className="dropdown1">
						<button className="dropbtn1 lii link2">
							Resources
							{/* <i className="fa fa-angle-down"></i> */}
							<FontAwesomeIcon
								icon={faAngleDown}
								className="arrow"
							/>
						</button>
						<div className="dropdown-content1">
							<MenuFour />
						</div>
					</div>
				</div>
				<form className="form-inline my-2 my-lg-0">
					<Link
						className="bg-theme text-white btn my-2 my-sm-0"
						href={`/contact`}
					>
						Contact Us
					</Link>
				</form>
			</div>
		</header>
	)
}

const MobileMenu = ({ onClose }) => {
	return (
		<div className="mobile-menu">
			<nav className="menu-box">
				<div className="upper-box">
					<div className="nav-logo">
						<Link className="navbar-brand" href="/">
							<Img src="/img/logo.png" width={100} height={100} />
						</Link>
					</div>
					<div className="close-btn" onClick={onClose}>
						<i className="icon">
							<BsX size={30} className="mt-2" />
						</i>
					</div>
				</div>

				<ul className="navigation clearfix">
					{navs.map((val) => {
						return (
							<li className="dropdown" onClick={onClose}>
								<Link href={val.route}>{val.name}</Link>
							</li>
						)
					})}
				</ul>
				<ul className="contact-list-one">
					<li>
						<div className="contact-info-box">
							<i className="icon">
								<BsPhone />
							</i>
							<span className="title">Call Now</span>
							<a href="tel:0916-194-9158">0916-194-9158</a>
						</div>
					</li>
					<li>
						<div className="contact-info-box">
							<span className="icon ">
								<BsMailbox />
							</span>
							<span className="title">Send Email</span>
							<a href="mailto:info@mofi.com.ng">
								info@mofi.com.ng
							</a>
						</div>
					</li>
					<li>
						<div className="contact-info-box">
							<span className="icon">
								<BsMap />
							</span>
							<span className="title">Address</span>
							Tower 2 BOI Bldg, Plot 256 A O., Herbert Macaulay
							Way, CBD, Abuja
						</div>
					</li>
				</ul>

				<ul className="social-links">
					<li>
						<a href="#">
							<i className="text-theme">
								<BsTwitter />
							</i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="text-theme">
								<BsLinkedin />
							</i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="text-theme">
								<BsFacebook />
							</i>
						</a>
					</li>
					{/* <li>
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
					</li> */}
				</ul>
			</nav>
		</div>
	)
}

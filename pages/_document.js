import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Mofi | Ministry of Finance Incorporated</title>
				<meta
					name="description"
					content="Investing in Nigeria's future today"
				></meta>
				<script
					src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossorigin="anonymous"
				></script>
				<script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
					integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
					crossorigin="anonymous"
				></script>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
					integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
					crossorigin="anonymous"
				></script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					rel="stylesheet"
					href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

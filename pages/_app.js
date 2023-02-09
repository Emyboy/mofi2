import '../public/assets/css/bootstrap.min.css'
import '../public/assets/plugins/revolution/css/settings.css'
import '../public/assets/plugins/revolution/css/layers.css'
import '../public/assets/plugins/revolution/css/navigation.css'
import '../public/assets/css/style.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/fontawesome.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<div className="page-wrapper">
			<Component {...pageProps} />
		</div>
	)
}

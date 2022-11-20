import '../styles/globals.css'
import '../styles/transition.css';
import Transition from '../Components/Transition/transition';
function MyApp({ Component, pageProps }) {
  return (
		<Transition>
			<Component {...pageProps} />
		</Transition>
	);
}

export default MyApp

import App from '../components/App'
import withData from '../lib/withData'

const Index = () =>
	<App>
		<h2>Home</h2>
	</App>

export default withData(Index)
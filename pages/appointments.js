import withData from '../lib/withData'
import App from '../components/App'
import Appointments from '../components/Appointments'

const AppointmentsPage = props => 
	<App>
		<Appointments />
	</App>

export default withData(AppointmentsPage)
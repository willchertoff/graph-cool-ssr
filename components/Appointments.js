import { graphql } from 'react-apollo'
import App from './App';
import gql from 'graphql-tag';

const Appointments = ({ data: { loading, error, allAppointments }}) => {
	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	const renderAppointments = allAppointments && allAppointments.length ? (
			<ul>
				{
					allAppointments.map(a =>
						<li key={a.id}>{a.title}</li>
					)
				}
			</ul>
		) : <p>No Appointments</p>

	return renderAppointments;
}

const allAppointments = gql`
  query allAppointments($first: Int!, $skip: Int!) {
    allAppointments(first: $first, skip: $skip) {
      id
      title
    }
  }
`

export default graphql(
	allAppointments,
	{
		options: {
			variables: {
				skip: 0,
				first: 3,
			}
		},
		props: ({ data }) =>({
			data
		})
	}
)(Appointments)
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    getUsers {
      _id
      username
      email
    }
  }
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.getUsers.map(user => (
        <li key={user._id}>{user.username} - {user.email}</li>
      ))}
    </ul>
  );
}
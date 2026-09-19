import ResourceList from './ResourceList.jsx'

function Users() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/'

  return (
    <ResourceList
      endpoint={endpoint}
      resource="users"
      title="Athletes"
      emptyMessage="No athletes found."
      renderItem={(user) => (
        <article className="resource-card" key={user._id}>
          <span className="card-kicker">@{user.username}</span>
          <h2>{user.name}</h2>
          <p>{user.team || 'Independent athlete'}</p>
          <strong>{user.points} points</strong>
        </article>
      )}
    />
  )
}

export default Users

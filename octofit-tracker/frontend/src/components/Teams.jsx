import ResourceList from './ResourceList.jsx'

function Teams() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/'

  return (
    <ResourceList
      endpoint={endpoint}
      resource="teams"
      title="Teams"
      emptyMessage="Create a team to start competing together."
      renderItem={(team) => (
        <article className="resource-card" key={team._id}>
          <span className="card-kicker">Team</span>
          <h2>{team.name}</h2>
          <p>{team.members?.length ?? 0} members</p>
          <strong>{team.totalPoints} points</strong>
        </article>
      )}
    />
  )
}

export default Teams

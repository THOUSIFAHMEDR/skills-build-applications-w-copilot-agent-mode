import ResourceList from './ResourceList.jsx'

function Teams() {
  return (
    <ResourceList
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

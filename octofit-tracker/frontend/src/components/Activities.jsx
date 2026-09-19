import ResourceList from './ResourceList.jsx'

function Activities() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/'

  return (
    <ResourceList
      endpoint={endpoint}
      resource="activities"
      title="Activity feed"
      emptyMessage="No activities have been recorded yet."
      renderItem={(activity) => (
        <article className="resource-card" key={activity._id}>
          <span className="card-kicker">{activity.type}</span>
          <h2>{activity.durationMinutes} minute session</h2>
          <p>{activity.points} points earned</p>
          <small>{new Date(activity.recordedAt).toLocaleDateString()}</small>
        </article>
      )}
    />
  )
}

export default Activities

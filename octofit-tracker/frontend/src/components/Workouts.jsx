import ResourceList from './ResourceList.jsx'

function Workouts() {
  return (
    <ResourceList
      resource="workouts"
      title="Workout suggestions"
      emptyMessage="No workout suggestions are available."
      renderItem={(workout) => (
        <article className="resource-card" key={workout._id}>
          <span className="card-kicker">{workout.difficulty}</span>
          <h2>{workout.name}</h2>
          <p>{workout.description}</p>
          <small>{workout.durationMinutes} min · {workout.target}</small>
        </article>
      )}
    />
  )
}

export default Workouts

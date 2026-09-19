import ResourceList from './ResourceList.jsx'

function Leaderboard() {
  return (
    <ResourceList
      resource="leaderboard"
      title="Leaderboard"
      emptyMessage="The leaderboard is waiting for its first scores."
      renderItem={(entry) => (
        <article className="resource-card rank-card" key={entry._id}>
          <span className="rank">#{entry.rank}</span>
          <div>
            <h2>{entry.points} points</h2>
            <p>Keep moving to climb the rankings.</p>
          </div>
        </article>
      )}
    />
  )
}

export default Leaderboard

import ResourceList from './ResourceList.jsx'

function Leaderboard() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/'

  return (
    <ResourceList
      endpoint={endpoint}
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

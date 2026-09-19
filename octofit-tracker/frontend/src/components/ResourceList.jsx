import { useEffect, useState } from 'react'
import { fetchResources } from '../api.js'

function ResourceList({ resource, title, renderItem, emptyMessage }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchResources(resource)
      .then((nextItems) => {
        if (active) setItems(nextItems)
      })
      .catch((requestError) => {
        if (active) setError(requestError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [resource])

  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>{title}</h1>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>
      {loading && <div className="status-card">Loading {resource}...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && items.length === 0 && (
        <div className="status-card">{emptyMessage}</div>
      )}
      {!loading && !error && items.length > 0 && (
        <div className="resource-grid">{items.map(renderItem)}</div>
      )}
    </section>
  )
}

export default ResourceList

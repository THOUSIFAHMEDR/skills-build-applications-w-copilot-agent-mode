import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['Users', '/users'],
  ['Teams', '/teams'],
  ['Activities', '/activities'],
  ['Leaderboard', '/leaderboard'],
  ['Workouts', '/workouts'],
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/users">
          <img src={logo} alt="OctoFit Tracker" />
          <span>OctoFit Tracker</span>
        </NavLink>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, path]) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              key={path}
              to={path}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate replace to="/users" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

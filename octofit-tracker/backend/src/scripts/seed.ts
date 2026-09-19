import mongoose from 'mongoose';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Team } from '../models/team';
import { User } from '../models/user';
import { Workout } from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'alex.runner', email: 'alex@example.com', name: 'Alex Rivera', team: 'Trail Blazers', points: 420 },
      { username: 'sam.cyclist', email: 'sam@example.com', name: 'Sam Chen', team: 'Trail Blazers', points: 360 },
      { username: 'jordan.lifts', email: 'jordan@example.com', name: 'Jordan Lee', team: 'Peak Performers', points: 510 },
    ]);
    const teams = await Team.create([
      { name: 'Trail Blazers', members: [users[0]._id, users[1]._id], totalPoints: 780 },
      { name: 'Peak Performers', members: [users[2]._id], totalPoints: 510 },
    ]);
    await Activity.create([
      { user: users[0]._id, type: 'Running', durationMinutes: 35, points: 210 },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 50, points: 240 },
      { user: users[2]._id, type: 'Strength training', durationMinutes: 45, points: 300 },
    ]);
    await Leaderboard.create([
      { user: users[2]._id, rank: 1, points: 510 },
      { user: users[0]._id, rank: 2, points: 420 },
      { user: users[1]._id, rank: 3, points: 360 },
    ]);
    await Workout.create([
      { name: 'Morning Momentum', description: 'A balanced full-body starter session.', difficulty: 'beginner', durationMinutes: 20, target: 'Full body' },
      { name: 'Cardio Builder', description: 'Intervals to improve stamina and pace.', difficulty: 'intermediate', durationMinutes: 30, target: 'Cardio' },
      { name: 'Power Circuit', description: 'A challenging strength and conditioning circuit.', difficulty: 'advanced', durationMinutes: 45, target: 'Strength' },
    ]);
    console.log(`Seeded ${users.length} users, ${teams.length} teams, and all activity resources`);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

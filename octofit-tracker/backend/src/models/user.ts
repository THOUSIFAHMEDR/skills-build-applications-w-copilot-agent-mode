import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    team: { type: String, trim: true },
    points: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);

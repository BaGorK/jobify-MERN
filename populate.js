import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import User from './models/userModel.js';
import Job from './models/jobModel.js';

try {
  await mongoose.connect(process.env.DB_URI);

  // const user = await User.findOne({ email: 'edmealem@gmail.com' });
  const user = await User.findOne({ email: 'guest@gmail.com' });

  const jsonJobs = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );

  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log('MOCK DATA UPLOADED SUCCESSFULLY!!!');
  process.exit(0);
} catch (error) {
  console.log('ERROR WHEN UPLOADING MOCK DATA: ', error);
  process.exit(1);
}

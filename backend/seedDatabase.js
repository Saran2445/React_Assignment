const mongoose = require('mongoose');
require('dotenv').config();
const Skill = require('./models/skill');
const Project = require('./models/Project');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const skills = [
  { name: 'HTML', description: 'Proficient in creating structured, semantic HTML5 markup.' },
  { name: 'CSS', description: 'Skilled in styling web pages, including responsive design and CSS animations.' },
  { name: 'JavaScript', description: 'Experienced in both vanilla JavaScript and modern frameworks like React.' }
];

const projects = [
  {
    name: 'EcoElegance',
    description: 'An e-commerce website dedicated to eco-friendly shopping, featuring products made from recycled materials.',
    technologies: 'HTML, CSS, PHP, jQuery, MySQL'
  },
  {
    name: 'AppleGuard',
    description: 'Real-time detection of apple leaf diseases using image processing in MATLAB.',
    technologies: 'Machine Learning, MATLAB'
  },
  {
    name: 'KickOffKits',
    description: 'An e-commerce platform for football jerseys with real-time inventory updates and secure payment options.',
    technologies: 'HTML, CSS, React, PHP, jQuery, MySQL'
  }
];

const seedDatabase = async () => {
  try {
    await Skill.deleteMany({});
    await Project.deleteMany({});

    await Skill.insertMany(skills);
    await Project.insertMany(projects);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
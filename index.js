const express = require('express')
const app = express()
const port = 3000;

const students = require('./models/students');
const sequelize = require('./models/index');
const { Sequelize, DataTypes } = require('sequelize');

const startServer = async() => {
  app.get('/', (req, res) => {
    res.send('Hello World Jakarta!')
  });
  
  app.get('/students', async(req, res) => {
    const studentsData = await students(sequelize.sequelize, DataTypes).findAll();
    res.json(studentsData);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
};

startServer();
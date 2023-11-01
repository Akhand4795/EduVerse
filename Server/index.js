const express = require('express');

const mongoose= require('mongoose');


//exportion routes//
const StudentRoutes=require('./routes/StudentRoutes')

const app=express()
app.use(express.json())


const port = 7000;
const mdburl='mongodb+srv://Abhidemo03:9696858107@cluster0.jf2t9qo.mongodb.net/EduVerse?retryWrites=true&w=majority';



mongoose.connect(mdburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(StudentRoutes)
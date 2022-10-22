const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error',()=>{
   console.log('Error in DB connection')
});

connection.on('Connected', ()=>{
   console.log('Connected to DB')
})

module.exports = connection;
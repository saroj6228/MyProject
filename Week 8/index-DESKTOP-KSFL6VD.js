const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/Week8'; // Change the URI if using MongoDB Atlas
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', function(err) {
  console.log('Error occurred during connection: ' + err);
});
db.once('connected', function() {
  console.log(`Connected to ${MONGO_URI}`);
});
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
  });
  const Person = mongoose.model('Person', PersonSchema, 'personCollection');
  const person1 = new Person({
    name: 'Ramesh',
    age: 21,
    gender: 'Male',
    salary: 7666
  });
  
  person1.save()
    .then((doc) => {
      console.log('New person added:', doc);
    })
    .catch((err) => {
      console.error(err);
    });
        const manyPersons = [
            { name: 'Umesh', age: 32, gender: 'Male', salary: 3466 },
            { name: 'Diya', age: 23, gender: 'Female', salary: 1600 },
            { name: 'Riya', age: 17, gender: 'Female', salary: 5702 },
            { name: 'Aryan', age: 32, gender: 'Male', salary: 4919 },
            { name: 'Kiran', age: 28, gender: 'Female', salary: 3000 },
            { name: 'Raj', age: 26, gender: 'Male', salary: 3800 },
            { name: 'Simran', age: 25, gender: 'Female', salary: 4500 },
            { name: 'Aman', age: 29, gender: 'Male', salary: 4200 },
            { name: 'Pooja', age: 21, gender: 'Female', salary: 2200 },
            { name: 'Vikas', age: 35, gender: 'Male', salary: 5600 },
            { name: 'Neha', age: 30, gender: 'Female', salary: 4900 },
            { name: 'Ankit', age: 27, gender: 'Male', salary: 5300 },
            { name: 'Priya', age: 22, gender: 'Female', salary: 3100 },
            { name: 'Sandeep', age: 38, gender: 'Male', salary: 6000 },
            { name: 'Meera', age: 31, gender: 'Female', salary: 4700 },
            { name: 'Ravi', age: 33, gender: 'Male', salary: 5500 },
            { name: 'Nisha', age: 27, gender: 'Female', salary: 4200 },
            { name: 'Vijay', age: 41, gender: 'Male', salary: 7100 },
            { name: 'Sanya', age: 24, gender: 'Female', salary: 3600 },
            { name: 'Rohit', age: 28, gender: 'Male', salary: 4100 }
          ];
      
      Person.insertMany(manyPersons)
        .then(() => {
          console.log('Data inserted successfully');
        })
        .catch((error) => {
          console.log('Error:', error);
        });

        Person.find().limit(5)
        .then((docs) => {
          console.log('Fetched documents:', docs);
        })
        .catch((err) => {
          console.error(err);
        });
        Person.find({ gender: 'Female', age: { $gt: 25} })
        .then((docs) => {
          console.log('Filtered documents:', docs);
        })
        .catch((err) => {
          console.error(err);
        });
        Person.countDocuments()
        .then((count) => {
          console.log('Total documents count:', count);
        })
        .catch((err) => {
          console.error(err);
        });
        Person.deleteMany({ age: { $gte: 24 } })
        .then((result) => {
          console.log('Deleted documents:', result);
        })
        .catch((err) => {
          console.error(err);
        });
        Person.updateMany({ gender: 'Female' }, { salary: 3347 })
        .then((result) => {
          console.log('Updated documents:', result);
        })
        .catch((err) => {
          console.error(err);
        });
      
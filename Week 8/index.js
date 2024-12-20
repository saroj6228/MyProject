const mongoose = require("mongoose");

// MongoDB Connection URI
const MONGO_URI = "mongodb://localhost:27017/Week8";
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log(`Connected to ${MONGO_URI}`))
  .catch((err) => console.log("Error occurred during connection: ", err));

// Define the Schema
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number,
});

// Create Model
const Person = mongoose.model("Person", PersonSchema, "personCollection");

// Task 1: Insert a Single Document
const insertSingleDoc = async () => {
  const doc1 = new Person({ name: "Jack", age: 36, Gender: "Male", Salary: 3456 });
  try {
    const result = await doc1.save();
    console.log("Single document inserted: ", result);
  } catch (error) {
    console.error("Error inserting document: ", error);
  }
};

// Task 2: Insert Multiple Documents
const insertMultipleDocs = async () => {
  const manyPersons = [
    { name: "Simon", age: 42, Gender: "Male", Salary: 3456 },
    { name: "Neesha", age: 23, Gender: "Female", Salary: 1000 },
    { name: "Mary", age: 27, Gender: "Female", Salary: 5402 },
    { name: "Mike", age: 40, Gender: "Male", Salary: 4519 },
    { name: "James", age: 34, Gender: "Male", Salary: 4321 },
  { name: "Sophia", age: 30, Gender: "Female", Salary: 6200 },
  { name: "John", age: 55, Gender: "Male", Salary: 3500 },
  { name: "Emma", age: 29, Gender: "Female", Salary: 4700 },
  { name: "Lucas", age: 36, Gender: "Male", Salary: 5100 },
  { name: "Olivia", age: 25, Gender: "Female", Salary: 5200 },
  { name: "Jack", age: 22, Gender: "Male", Salary: 2800 },
  { name: "Isabella", age: 31, Gender: "Female", Salary: 5400 },
  { name: "Ethan", age: 28, Gender: "Male", Salary: 6000 },
  { name: "Ava", age: 24, Gender: "Female", Salary: 4900 },
  { name: "Liam", age: 33, Gender: "Male", Salary: 5500 },
  { name: "Mia", age: 26, Gender: "Female", Salary: 4600 },
  { name: "David", age: 44, Gender: "Male", Salary: 4000 },
  { name: "Amelia", age: 37, Gender: "Female", Salary: 6300 },
  { name: "Benjamin", age: 40, Gender: "Male", Salary: 5200 },
  { name: "Charlotte", age: 32, Gender: "Female", Salary: 5800 },
  ];
  try {
    const result = await Person.insertMany(manyPersons);
    console.log("Multiple documents inserted: ", result);
  } catch (error) {
    console.error("Error inserting multiple documents: ", error);
  }
};

// Task 3: Fetch Data
const fetchData = async () => {
  try {
    const allDocs = await Person.find().limit(5);
    console.log("All documents (limited to 5): ", allDocs);

    const filteredDocs = await Person.find({ Gender: "Female", age: { $gt: 25 } });
    console.log("Filtered documents (Female, age > 25): ", filteredDocs);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

// Task 4: Count Documents
const countDocuments = async () => {
  try {
    const count = await Person.countDocuments();
    console.log("Total documents count: ", count);
  } catch (error) {
    console.error("Error counting documents: ", error);
  }
};

// Task 5: Delete Documents
const deleteDocuments = async () => {
  try {
    const result = await Person.deleteMany({ age: { $gte: 25 } });
    console.log("Deleted documents: ", result.deletedCount);
  } catch (error) {
    console.error("Error deleting documents: ", error);
  }
};

// Task 6: Update Documents
const updateDocuments = async () => {
  try {
    const result = await Person.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } });
    console.log("Updated documents: ", result.modifiedCount);
  } catch (error) {
    console.error("Error updating documents: ", error);
  }
};

// Execute Tasks Sequentially
const executeTasks = async () => {
  await insertSingleDoc();
  await insertMultipleDocs();
  await fetchData();
  await countDocuments();
  await deleteDocuments();
  await updateDocuments();
  mongoose.connection.close();
};

executeTasks();

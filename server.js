const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(fileUpload());
app.use(cors());

mongoose.connect(
  'mongodb+srv://saddam:myt3g4s0@cluster0.tmc4q.mongodb.net/resultDB?retryWrites=true&w=majority'
);

const resultSchema = new mongoose.Schema({
  title: String,
  result: String,
  txt: String,
  path: String,
});

const Result = mongoose.model('Result', resultSchema);

const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

app.get('/', (req, res) => {
  Result.find().then((foundResults) => res.json(foundResults));
});

app.post('/upload', (req, res) => {
  const newTitle = req.body.title;
  let newResult = 'Empty';
  let fileData = 'Empty File';
  let filePath = '';
  if (req.files !== null) {
    const file = req.files.file;
    fileData = file.data.toString('utf8');
    const isValid = re.test(fileData);
    if (isValid) {
      const calculatedData = eval(fileData);
      newResult = calculatedData.toString();
      filePath = './storage/' + file.name;
      file.mv(__dirname + '/client/public/storage/' + file.name);
    } else {
      newResult = 'Invalid';
      fileData = 'Invalid Math';
    }
  }
  const result = new Result({
    title: newTitle,
    result: newResult,
    txt: fileData,
    path: filePath,
  });
  result
    .save()
    .then((_) => Result.find().then((foundResults) => res.json(foundResults)));
});

app.listen(5000, () => console.log('Server Started...'));

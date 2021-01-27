const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

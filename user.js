const mongoose = require("mongoose");

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate(value){
      if(value.length < 10)
        throw new Error('password must be at least 10 char')
    }
  }
})

module.exports = User
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const incomeSchema = new Schema({
   
    value: {
        type: Number
    },

   

    incomeDate: {
        type: Date,
        default: Date.now
    }

})

const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    comission: {
        type: Number,
        default: 35
    },

    incomeList: [incomeSchema],


   date: {
       type: Date,
       default: Date.now
   }



    
})

module.exports = mongoose.model('users' , userSchema)
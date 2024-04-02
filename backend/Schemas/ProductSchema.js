const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    name_of_the_artist : {
        type : String,
        required : true 
    },
    art_category : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : false
    },
    net_worth : {
        type : String,
        required : false
    },
    famous_art : {
        type : String,
        required : false
    },
    country : {
        type: String,
        required: true
    },
    artSrc : {
        type: String,
        required: true
    }
})

const userData = mongoose.model('userData', userDataSchema);

module.exports = userData
const { model , Schema } = require('mongoose');

const taskSchema = new Schema({
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
}, {timeseries : true})

module.exports = model('Task', taskSchema);
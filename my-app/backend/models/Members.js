const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
    memId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "Staff", "Member"]
    }
})

const MembersModel = mongoose.model('members', MembersSchema);

module.exports = MembersModel;
const mongoose =require ('mongoose')

const emailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: false
    },
    from: {
        type: String,
        required: false
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        required: false
    },
    image: String,
    name: {
        type: String,
        required: false
    },
    starred: {
        type: Boolean,
        required: false,
        default: false
    },
    bin: {
        type: Boolean,
        required: false,
        default: false
    },
    type: {
        type: String,
        required: false,
    }
})

const email = mongoose.model('emails',emailSchema)

module.exports = email


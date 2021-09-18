const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    id: mongoose.ObjectId,
    sessionId: { type: String, required: true},
    cart: { type: Map, of: Number },
    size: { type: Map, of: String },
    totalProducts: { type: Number },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Session', SessionSchema);
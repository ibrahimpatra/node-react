const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true,
});

const Information = mongoose.model('Information', infoSchema);

module.exports = Information;
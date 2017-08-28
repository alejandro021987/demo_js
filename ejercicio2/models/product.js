var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var productSchema = new Schema({
  name:    { type: String },
  description:     { type: String },
  category:  { type: String },
  price:   { type: Number }
});

module.exports = mongoose.model('product', productSchema);
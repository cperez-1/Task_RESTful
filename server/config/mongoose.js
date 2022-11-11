const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dbTaskAPI", {useNewUrlParser: true});
module.exports = mongoose
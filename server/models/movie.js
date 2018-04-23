const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MovieSchema = new Schema({
  _id: { type: String },
  moviedb_id: { type: String },
  title: { type: String },
  overview: { type: String },
  vote_average: { type: Number },
  vote_count: { type: Number },
  poster_url: { type: String },
  backdrop_url: { type: String }
})

export default mongoose.model('Model', MovieSchema, 'Movie')

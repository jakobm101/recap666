import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Place = mongoose.models.place || mongoose.model("Place", placeSchema);

export default Place;

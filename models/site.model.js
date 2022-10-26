import mongoose from "mongoose";

const { Schema } = mongoose;

const SiteSchema = new Schema({
  siteName: String,
});

export const Site = mongoose.model("Site", SiteSchema);

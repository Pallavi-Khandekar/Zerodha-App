const { Schema } = require("mongoose");

const WatchlistSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    percent: { type: String, required: true },
    isDown: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = { WatchlistSchema };

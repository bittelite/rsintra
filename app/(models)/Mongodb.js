import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    department: String,
    active: Boolean,
  },
  {
    timestamps: true,
  },
  {
    collection: "tickets",
  }
);

const wikiSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    department: String,
    active: Boolean,
  },
  {
    timestamps: true,
  },
  {
    collection: "wikis",
  }
);

export const Ticket =
  mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export const Wiki = mongoose.models.Wiki || mongoose.model("Wiki", wikiSchema);

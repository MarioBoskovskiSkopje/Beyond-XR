import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BoardsSchema = new Schema({
  title: { type: String },
  id: { type: Number },
  image: { type: String },
});

const ShowRoomSchema = new Schema(
  {
    title: { type: String },
    boards: [BoardsSchema],
  },
  {
    collection: "showroombrands",
  }
);

export const ShowRoomTc = mongoose.model("ShowRoomSchema", ShowRoomSchema);
export const ShowRoom = composeWithMongoose(ShowRoomTc);

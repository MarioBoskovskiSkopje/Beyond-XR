import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserActivitySchema = new Schema(
  {
    timestamp: { type: String },
    page: { type: String },
    entity_id: { type: String },
    event_type: { type: String },
    data: { board_id: String },
  },
  {
    collection: "useractivities",
  }
);

export const UserActivityTc = mongoose.model(
  "UserActivitySchema",
  UserActivitySchema
);
export const UserActivity = composeWithMongoose(UserActivityTc);

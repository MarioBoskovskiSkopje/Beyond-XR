const { SchemaComposer } = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {
  ShowRoomMutation,
  ShowRoomQuery,
} = require("./db/ShowRoomMutationQuery");
const {
  UserActivityMutation,
  UserActivityQuery,
} = require("./db/UserActivityMutationQuery");

schemaComposer.Query.addFields({
  ...ShowRoomQuery,
  ...UserActivityQuery,
});

schemaComposer.Mutation.addFields({
  ...ShowRoomMutation,
  ...UserActivityMutation,
});

export default schemaComposer.buildSchema();

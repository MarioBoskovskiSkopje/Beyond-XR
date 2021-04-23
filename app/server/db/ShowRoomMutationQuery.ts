const { ShowRoom } = require("./ShowRoomModel");

const ShowRoomQuery ={
    showRoomById: ShowRoom.getResolver("findById"),
    showRoomByIds: ShowRoom.getResolver("findByIds"),
    showRoomOne: ShowRoom.getResolver("findOne"),
    showRoomMany: ShowRoom.getResolver("findMany"),
    showRoomCount: ShowRoom.getResolver("count"),
    showRoomConnection: ShowRoom.getResolver("connection"),
    showRoomPagination: ShowRoom.getResolver("pagination"),
  }
 const ShowRoomMutation = {
    showRoomCreateOne: ShowRoom.getResolver("createOne"),
    showRoomCreateMany: ShowRoom.getResolver("createMany"),
    showRoomUpdateById: ShowRoom.getResolver("updateById"),
    showRoomUpdateOne: ShowRoom.getResolver("updateOne"),
    showRoomUpdateMany: ShowRoom.getResolver("updateMany"),
    showRoomRemoveById: ShowRoom.getResolver("removeById"),
    showRoomRemoveOne: ShowRoom.getResolver("removeOne"),
    showRoomRemoveMany: ShowRoom.getResolver("removeMany"),
  }
  export { ShowRoomQuery, ShowRoomMutation };

const { UserActivity } = require("./UserActivityModel");

const UserActivityQuery = {
  userActivityById: UserActivity.getResolver("findById"),
  userActivityByIds: UserActivity.getResolver("findByIds"),
  userActivityOne: UserActivity.getResolver("findOne"),
  userActivityMany: UserActivity.getResolver("findMany"),
  userActivityCount: UserActivity.getResolver("count"),
  userActivityConnection: UserActivity.getResolver("connection"),
  userActivityPagination: UserActivity.getResolver("pagination"),
};

const UserActivityMutation = {
  userActivityCreateOne: UserActivity.getResolver("createOne"),
  userActivityCreateMany: UserActivity.getResolver("createMany"),
  userActivityUpdateById: UserActivity.getResolver("updateById"),
  userActivityUpdateOne: UserActivity.getResolver("updateOne"),
  userActivityUpdateMany: UserActivity.getResolver("updateMany"),
  userActivityRemoveById: UserActivity.getResolver("removeById"),
  userActivityRemoveOne: UserActivity.getResolver("removeOne"),
  userActivityRemoveMany: UserActivity.getResolver("removeMany"),
};

export { UserActivityQuery, UserActivityMutation };

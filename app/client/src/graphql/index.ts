import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const getShowRoomData = () => {
  return client
    .query({
      query: gql`
        {
          showRoomMany {
            title
            boards {
              title
              id
              image
            }
          }
        }
      `,
    })
    .then((result) => result)
    .catch((err) => console.log(err));
};

const addUserActivityMutation = gql`
  mutation($records: [CreateManyUserActivitySchemaInput!]!) {
    userActivityCreateMany(records: $records) {
      records {
        timestamp
        page
        entity_id
        event_type
        data {
          board_id
        }
      }
    }
  }
`;

const addUserActivity = (
  timestamp: string,
  page: string,
  entity_id: string,
  event_type: string,
  board_id: string
) => {
  let objData = {
    timestamp,
    page,
    entity_id,
    event_type,
    data: { board_id },
  };

  const data = JSON.parse(localStorage.getItem("data") || "[]");

  data.push(objData);

  localStorage.setItem("data", JSON.stringify(data));

  if (event_type === "click" && data.length === 5) {
    localStorage.removeItem("data");

    return client
      .mutate({
        mutation: addUserActivityMutation,
        variables: {
          records: data,
        },
      })
      .then((res) => {
        localStorage.removeItem("data");
        console.log(res);
        return res;
      })
      .catch((err) => err);
  }

  if (event_type === "hover" && data.length > 20) {
    console.log("data", data);
    localStorage.removeItem("data");
    return client
      .mutate({
        mutation: addUserActivityMutation,
        variables: {
          records: data,
        },
      })
      .then((res) => {
        localStorage.removeItem("data");
        return res;
      })
      .catch((err) => err);
  }
};

export { getShowRoomData, addUserActivity };

import { useEffect, useState, useCallback } from "react";
import Main from "./components/Main";
import "./App.css";

import { getShowRoomData, addUserActivity } from "./graphql";

function App() {
  const [data, dataSet] = useState<any>(null); // dump data from server

  const handleClick = useCallback((event: any) => { // click event not need type
    const timestamp = event.timeStamp.toString();
    const page = event.target.textContent || "1";
    const entity_id = "1";
    const event_type = "click";
    const board_id = event.target.value || "1";

    addUserActivity(timestamp, page, entity_id, event_type, board_id);
  }, []);

  const handleMouseOver = useCallback((event: any) => { // click event not need type
    const timestamp = event.timeStamp.toString();
    const page = event.currentTarget.location.host;
    const entity_id = "1";
    const event_type = "hover";
    const board_id = event.target.value || "1";

    addUserActivity(timestamp, page, entity_id, event_type, board_id);
  }, []);

  useEffect(() => {
    const timestamp = new Date().getTime().toString();
    const page = window.location.origin;
    const event_type = "onload";

    addUserActivity(timestamp, page, "1", event_type, "1");

    const getData = async () => {
      let dataRes = await getShowRoomData();

      dataSet(dataRes);
    };

    getData();

    window.addEventListener("mouseup", handleClick);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseup", handleClick);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleClick, handleMouseOver]);

  return (
    <div className="App">
      <Main {...data} />
    </div>
  );
}

export default App;

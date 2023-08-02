import { useEffect, useState } from "react";

import "./style.css";
import Header from "./components/Header";
import Notification from "./components/Notification";
import AllNotification from "./components/AllNotification";

// function Counter() {
//   //1. difine state variable
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <span style={{ fontSize: "40px" }}>{count}</span>
//       <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
//         +1
//       </button>
//     </div>
//   );
// }

function App() {
  const [showForm, setShowForm] = useState(false);
  const [shown, setShown] = useState(false);

  const [todo, setTodo] = useState([]);

  useEffect(function () {}, []);

  return (
    <div>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <Notification setTodo={setTodo} setShowForm={setShowForm} />
      ) : null}

      <h1>Your Notification</h1>

      {/* <AllNotification shown={shown} setShown={setShown} /> */}
    </div>
  );
}

export default App;

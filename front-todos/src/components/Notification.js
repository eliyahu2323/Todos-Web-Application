import { useEffect, useState } from "react";
import axios from "axios";

function NewFactForm() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSumbmit = async (e) => {
    e.preventDefault();
    if (typeof text === "string" && time && date) {
      const sendDate = new Date(`${date},${time}`);
      if (sendDate) {
        await axios.post(
          "http://127.0.0.1:8080/api/v1/todo/createNotification",
          {
            content: text,
            deadline: sendDate,
          }
        );
      }
    }
    setDate("");
    setTime("");
    setText("");
  };

  return (
    <form className="fact-form" onSubmit={handleSumbmit}>
      <input
        type="text"
        placeholder="Write the content of the notification..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="YYYY/MM/DD"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="hour:seconds"
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn btn-large">create</button>
    </form>
  );
}

export default NewFactForm;

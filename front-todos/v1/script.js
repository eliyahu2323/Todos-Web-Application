const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

async function loadFacts() {
  const res = await fetch(
    "https://gtczmhzozrnupyykawfj.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Y3ptaHpvenJudXB5eWthd2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MjcxMTIsImV4cCI6MTk5MzEwMzExMn0.7mWfGhq5InvzvCb8xIxlxr5QgFzXgfN2x-Ypur1ZsXc",
        authorization:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Y3ptaHpvenJudXB5eWthd2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MjcxMTIsImV4cCI6MTk5MzEwMzExMn0.7mWfGhq5InvzvCb8xIxlxr5QgFzXgfN2x-Ypur1ZsXc",
      },
    }
  );
  const data = await res.json();
  creatFactsList(data);
}

loadFacts();

function creatFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>
         ${fact.text}
        <a
          class="source"
          href=${fact.source}
          target="_blank"
        >Link</a>
      </p>
      <span class="tag" style="background-color:${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }"
      >${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

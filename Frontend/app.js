const taskInput = document.getElementById("task");
const taskMsg = document.getElementById("message");
const submit = document.getElementById("submit");
const todoData = document.getElementById("todoData");

const displayData = (data) => {
  let display = "";

  data.forEach((item, index) => {
    display += `
      <div class="bg-gray-800 text-white p-4 rounded-lg mb-4 shadow-lg flex justify-between items-center">
        <div>
          <h2 class="text-xl font-bold">${item.task}</h2>
          <p class="text-gray-300">${item.taskMsg}</p>
        </div>
        <button 
          class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          onclick="deleteTask(${index})">
          Delete
        </button>
      </div>
    `;
  });

  todoData.innerHTML = display;
};

const fetchData = async () => {
  const res = await fetch("http://localhost:5065/todo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ task: taskInput.value, taskMsg: taskMsg.value }),
  });
  const data = await res.json();
  displayData(data);

  taskInput.value = "";
  taskMsg.value = "";
};

submit.addEventListener("click", () => {
  if (!taskInput.value.trim() || !taskMsg.value.trim()) {
    alert("Please fill both filleds!");
    return;
  }

  fetchData();
});

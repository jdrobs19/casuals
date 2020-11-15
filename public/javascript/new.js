const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="game-title"]').value;

  const token = localStorage.getItem("token");
  await fetch(`/api/games`, {
    method: "POST",
    body: JSON.stringify({
      title
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#new-game-form")
  .addEventListener("submit", newFormHandler);
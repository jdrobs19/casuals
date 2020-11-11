const newFormHandler = async function(event) {
    event.preventDefault();
  
    const genre_id = document.querySelector('input[name="game-title"]').value;
    const game = document.querySelector('textarea[name="game-body"]').value;
  
    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        genre_id,
        game
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
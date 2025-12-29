let jokeBtn = document.querySelector(".jokeBtn");
let jokeDiv = document.querySelector(".jokeDiv");
jokeBtn.addEventListener("click", loadJoke);

async function loadJoke() {
  try {
    let jokeFetch = await fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let jokeData = await jokeFetch.json();
    jokeDiv.innerHTML = jokeData.value;
  } catch (error) {
    console.log(error);
  }
}

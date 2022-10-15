const cardbox = document.getElementById("cardbox");
const searchBar = document.getElementById("search-bar");
// const sortBtn = document.getElementById("sort");

// const box = document.getElementById("box");

// sortBtn.addEventListener("click", () => {
//   console.log("hello!");
// });

const API = "https://randomuser.me/api/?results=50";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    //console.log("DATA!", data);

    data.results.forEach((person) => {
      //console.log("person", person);

      cardbox.innerHTML += `
      <div class="cardliststyle">
       
        <img class="profilepic" src="${person.picture.medium}" alt="picture" />
      <div class="bg-white">
        <div class="name-city">
          <p class="name">${person.name.first} ${person.name.last}</p>
          <p class="city">${person.location.city}</p>
        </div>
        <div class="phone-email">
          <a class="email" href="mailto:${person.email}"> <i class="fa fa-envelope"></i></a>
          <a class="phone" href="tel:${person.phone}"><i class="fa fa-phone"></i></a>
        </div>
        </div>
      </div>
      
      `;
    });

    const sort = document.getElementById("sort");

    sort.addEventListener("click", function () {
      console.log("helloooo", data);
    });
  });

searchBar.addEventListener("click", (e) => {
  const API_SEARCH = `https://randomuser.me/api/?${e.target.value}`;
  fetch(API_SEARCH).then((res) =>
    res.json().then((data2) => {
      console.log("DATA", data2);

      if (data2.Error) {
        cardbox.innerHTML = "Oups, no person found.";
      } else {
      }
    })
  );
});

function setGrid() {
  const theme = document.getElementById("theme");
  const grid = document.getElementById("grid");
  const list = document.getElementById("list");

  if (theme.getAttribute("href") == "stylelist.css") {
    theme.setAttribute("href", "stylegrid.css");
    // grid.classList.add("hide");
  }
}

function setList() {
  const theme = document.getElementById("theme");
  const grid = document.getElementById("grid");
  const list = document.getElementsByClassName("list");

  if (theme.getAttribute("href") == "stylegrid.css") {
    theme.setAttribute("href", "stylelist.css");
    //list.classList.remove("hide");
  }
}

const cardbox = document.getElementById("cardbox");
const searchBar = document.getElementById("search-bar");
const sort = document.getElementById("sort");

// FETCHING FROM API AND STORING IN ARRAY

const peopleArray = [];

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then(function (result) {
    console.log("Result", result);
    for (var i = 0; i < result.results.length; i++) {
      peopleArray.push(result.results[i]);
    }
    console.log("peoplearray", peopleArray);

    peopleArray.sort(function (a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });

    // PRINTING THE FETCH

    peopleArray.forEach((person) => {
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

      // THE SEARCHBAR FUNCTION

      searchBar.addEventListener("input", (e) => {
        // if (e.target.value === "") {
        //   return;
        // }

        // const searchResults = peopleArray.filter((person) => {
        //   return person.name.first
        //     .toLowerCase()
        //     .includes(e.target.value.toLowerCase());
        // });

        //console.log("test3", peopleArray);

        searchResults.forEach((person) => {
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
      });
    });
  })
  .catch((error) => console.log("error", error));

// SORTING THE LIST

sort.addEventListener("click", function () {
  const newOrder = peopleArray.reverse();
  console.log("annan ordning", peopleArray);

  // cardbox.innerHTML = newOrder;
  newOrder.forEach((person) => {
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

  console.log("helloooo", peopleArray);
  console.log("helloooo2", peopleArray[0].name.first);
});

// SETTING THE LIST/GRID-LAYOUT

function setGrid() {
  const theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "stylelist.css") {
    theme.setAttribute("href", "stylegrid.css");
  }
}

function setList() {
  const theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "stylegrid.css") {
    theme.setAttribute("href", "stylelist.css");
  }
}

// OOOOLD FETCH !

const API = "https://randomuser.me/api/?results=50";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    //console.log("DATA!", data);
    // data.results.forEach((person) => {
    //   //console.log("person", person);
    //   cardbox.innerHTML += `
    //   <div class="cardliststyle">
    //     <img class="profilepic" src="${person.picture.medium}" alt="picture" />
    //   <div class="bg-white">
    //     <div class="name-city">
    //       <p class="name">${person.name.first} ${person.name.last}</p>
    //       <p class="city">${person.location.city}</p>
    //     </div>
    //     <div class="phone-email">
    //       <a class="email" href="mailto:${person.email}"> <i class="fa fa-envelope"></i></a>
    //       <a class="phone" href="tel:${person.phone}"><i class="fa fa-phone"></i></a>
    //     </div>
    //     </div>
    //   </div>
    //   `;
    // });
    // const sort = document.getElementById("sort");
    // sort.addEventListener("click", function () {
    //   console.log("helloooo", data);
    // });
  });

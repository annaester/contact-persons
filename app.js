const cardbox = document.getElementById("cardbox");

const API = "https://randomuser.me/api/?results=50";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log("DATA!", data);

    data.results.forEach((person) => {
      console.log("person", person);

      cardbox.innerHTML += `
      <div class="cardliststyle">
        <p>${person.name.first} ${person.name.last}</p>
        <img src="${person.picture.medium}" alt="picture" />
        <p>${person.location.city}</p>
        <p>${person.email}</p>
        <p>${person.phone}</p>
      </div>
      
      `;
    });
  });

// cardbox.innerHTML = data.forEach((person) => {
//   console.log("person", person);
// });

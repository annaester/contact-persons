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
      <div class="bg-color">
      
      </div>
      <img class="profilepic" src="${person.picture.medium}" alt="picture" />
      <div class="bg-white">
      <div class="name-city">
      <p class="name">${person.name.first} ${person.name.last}</p>
        <p>${person.location.city}</p>
        </div>
        <div class="phone-email">

        <a href="mailto:${person.email}"> <img src="images/navigation_icon/email.png"> </a>
            <p class="email">${person.email}</p>

            <a href="tel:${person.phone}">o</a>
            <p class="phone">${person.phone}</p>
        </div>
        </div>
      </div>
      
      `;
    });
  });

// cardbox.innerHTML = data.forEach((person) => {
//   console.log("person", person);
// });

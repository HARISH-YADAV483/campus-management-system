//timing of hostle
const arrow = document.getElementById('foli');
const pokemonDiv = document.getElementById('pokemon');
const text = "There are no strict rule of timings of the hostle gates. Students can go to library during any time interval of the day. But the offficiall timing of the main gate is about 10:00 pm";
arrow.addEventListener('click', function() {
  if (pokemonDiv.textContent === "") {
    pokemonDiv.textContent = text;
  } else {
    pokemonDiv.textContent = "";
  }
});
  //parking of hostle
const arro = document.getElementById('yuki');
 const divi = document.getElementById('pokemono');
   const texti = "You can park your bicycles inside the hostle but any other automobile is strictly prohibited even you are not allowed to ride bikes inside the Nit campuss.";
    arro.addEventListener('click', function() {
   
    if (divi.textContent === "") {
      divi.textContent = texti;
    } else {
      divi.textContent = "";
    }
  });
  //coustimization in rooms
const arre = document.getElementById('tuki');
 const divu = document.getElementById('pokemoni');
   const textu = "You are allowed to paste posters on the walls but drilling is strictly not allowed there are fine if such activity is observed by any other sudent.";
    arre.addEventListener('click', function() {
   
    if (divu.textContent === "") {
      divu.textContent = textu;
    } else {
      divu.textContent = "";
    }
  });
  //electrical appliamces
const arrp = document.getElementById('pooki');
 const divp = document.getElementById('pokemonp');
   const textp = " heavy electric appliances like a.c. are strictly not allowed but other small electric are allowed (including coller ). ";
    arrp.addEventListener('click', function() {
   
    if (divp.textContent === "") {
      divp.textContent = textp;
    } else {
      divp.textContent = "";
    }
  });
  //bathrooms in hostle
const arrq = document.getElementById('luki');
 const divq = document.getElementById('pokemonq');
   const textq = "The conditions are really good .";
    arrq.addEventListener('click', function() {
   
    if (divq.textContent === "") {
      divq.textContent = textq;
    } else {
      divq.textContent = "";
    }
  });

const img = document.getElementById('readme');
const sidebarDiv = document.getElementById('readmore');

img.onclick = function() {
  if (sidebarDiv.style.display === 'none' || sidebarDiv.style.display === '') {
    sidebarDiv.style.display = 'block';
    img.style.display = 'none'
  } 
};

  document.querySelectorAll(".btni").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const isExpanded = card.classList.contains("expanded");

      document.querySelectorAll(".card").forEach(c => {
        c.classList.remove("expanded");
        c.classList.add("collapsed");
        c.querySelector(".btni").textContent = "Read More";
      });

      if (!isExpanded) {
        card.classList.remove("collapsed");
        card.classList.add("expanded");
        button.textContent = "Show Less";
      }
    });
  });

  
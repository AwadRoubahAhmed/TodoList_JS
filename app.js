"use strict";

//////////////////////////////////////////////////////////////////////

//Récupérer les listes dans LocalStorage
ol.innerHTML = localStorage.getItem("list");


//Récupération des éléments dans le DOM ;
const form = document.querySelector("#form");
const champ = document.querySelector("#champ");
const btnAjouter = document.querySelector("#btnAjouter");
const noTache = document.querySelector("#noTache");

const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) {
  span.onclick = () => del(span.parentElement.parentElement);
}

const spanUrgs = document.querySelectorAll(".urgent");
for (let span of spanUrgs) {
  span.onclick = () => urgent(span);
}

//Donné du style à notre smallTag
noTache.style.display = ol.innerHTML === "" ? "block" : "none";


form.onsubmit = (e) => {
  //Création des listes et span
  // 1.
  const li = document.createElement("li");

  // 2.
  const texte = document.createElement("span");
  texte.classList.add("texte");
  texte.textContent = champ.value;

  // 3.
  const spanDel = document.createElement("span");
  spanDel.classList.add("delete", "material-symbols-outlined", "md-24");
  spanDel.textContent = " delete_forever";

  // 4.
  const spanUrg = document.createElement("span");
  spanUrg.classList.add("urgent", "material-symbols-outlined", "md-24");
  spanUrg.textContent = "star";

  // 12.
  spanDel.onclick = () => del(li);
  spanUrg.onclick = () => urgent(spanUrg);

  // 5.
  const spanOpt = document.createElement("span");
  spanOpt.classList.add("spanOpt");

  // 6.
  spanOpt.appendChild(spanUrg);
  spanOpt.appendChild(spanDel);

  // 7.
  li.appendChild(texte);
  li.appendChild(spanOpt);

  // 8.
  ol.appendChild(li);

  // 9.
  champ.value = "";

  noTache.style.display = "none";

  localStorage.setItem("list", ol.innerHTML);

  return false;
};

// 10.
//fonction delette 
function del(element) {
  element.remove();

  // if (ol.innerHTML === "") noTache.style.display = "block";

  //Alternatif if statement ;
  noTache.style.display = ol.innerHTML === "" ? "block" : "none";

  //Crée / enregistré dans localstorage à chaque fois qu'une liste s'ajoute ;
  //paramètre => ("key", "value") => ("list", ol.innerHTML) ;
  localStorage.setItem("list", ol.innerHTML);
}

// 11.
//function urgent
function urgent(element) {
  element.classList.toggle("gold");

  localStorage.setItem("list", ol.innerHTML);
}

/* Empécher le resizing */
const metas = document.getElementsByTagName("meta");
metas[1].content = `width=device-width, heigth=${window.innerHeight} initial-scale=1.0`;



////////////////////////////////////////////////////////////////////

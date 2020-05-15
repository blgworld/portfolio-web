function toggler() {
  const div = document.querySelector(".myDIV");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function god() {
  document.querySelector(".txtDes").style.display = "none";
  document.querySelector(".txtFro").style.display = "block";
}

function evil() {
  document.querySelector(".txtDes").style.display = "block";
  document.querySelector(".txtFro").style.display = "none";
}

const fir = document.querySelector(".fir");
const imgFir = document.querySelector(".img-1");
const sec = document.querySelector(".sec");
const imgSec = document.querySelector(".img-2");
const thi = document.querySelector(".thi");
const imgThi = document.querySelector(".img-3");


function skillRes() {
  document.querySelector(".code-txt").style.display = "none";
  document.querySelector(".res-txt").style.display = "none";
  document.querySelector(".ui-txt").style.display = "block";
  fir.classList.add("circle-bg");

  imgFir.classList.add("img-bg");

  sec.classList.add("circle-bg-ant");
  imgSec.classList.add("img-bg-ant");
  thi.classList.add("circle-bg-ant");
  imgThi.classList.add("img-bg-ant");
  fir.classList.remove("circle-bg-ant");
  imgFir.classList.remove("img-bg-ant");
}

function skillUi() {
  document.querySelector(".code-txt").style.display = "none";
  document.querySelector(".ui-txt").style.display = "none";
  document.querySelector(".res-txt").style.display = "block";
  sec.classList.add("circle-bg");
  imgSec.classList.add("img-bg");
  fir.classList.add("circle-bg-ant");
  imgFir.classList.add("img-bg-ant");
  thi.classList.add("circle-bg-ant");
  imgThi.classList.add("img-bg-ant");
  sec.classList.remove("circle-bg-ant");
  imgSec.classList.remove("img-bg-ant");
}

function skillCode() {
  document.querySelector(".ui-txt").style.display = "none";
  document.querySelector(".res-txt").style.display = "none";
  document.querySelector(".code-txt").style.display = "block";
  thi.classList.add("circle-bg");
  imgThi.classList.add("img-bg");
  fir.classList.add("circle-bg-ant");
  imgFir.classList.add("img-bg-ant");
  sec.classList.add("circle-bg-ant");
  imgSec.classList.add("img-bg-ant");
  thi.classList.remove("circle-bg-ant");
  imgThi.classList.remove("img-bg-ant");
}


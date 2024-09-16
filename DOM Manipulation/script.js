// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// const changebutton = document.getElementById("change-text");
// const heading = document.getElementById("main-title");

// const changebutton = document.getElementsByClassName("change-button")[0];
// const heading = document.getElementsByClassName("heading-text");
// console.log("🚀 ~ heading:", heading);

// const changebutton = document.getElementsByTagName("button")[0];
// const heading = document.getElementsByTagName("h1")[0];

// const changebutton = document.querySelector("#change-text");
// const heading = document.querySelector("#main-title-1");

// const changebutton = document.querySelector(".change-button");
// const heading = document.querySelector(".heading-text");

const changebutton = document.querySelector("button");
const heading = document.querySelector("h1");

// const headings = document.querySelectorAll("h1");
// console.log("🚀 ~ headings:", headings);

const image = document.getElementsByTagName("img")[0];

changebutton.addEventListener("click", function () {
  image.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
  );

  //   if (heading.textContent === "This is a Success heading")
  //     heading.innerHTML = "This is the Error heading";
  //   else heading.textContent = "This is a Success heading";
});

changebutton.addEventListener("dblclick", function () {
  image.removeAttribute("src");

  console.log(image.getAttribute("alt"));

  heading.style.width = "500px";

  //   heading.classList.remove("success");
  //   heading.classList.add("error");
  //   heading.textContent = "This is a error heading.";
  //   heading.classList.toggle("error");
});

const addItemsBtn = document.getElementById("add-items");
const removeItemsBtn = document.getElementById("remove-items");
const ul = document.getElementsByTagName("ul")[0];
const li = document.getElementsByTagName("li");

addItemsBtn.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.textContent = `Item ${li.length + 1}`;

  ul.appendChild(newLi);
});

removeItemsBtn.addEventListener("click", () => {
  ul.removeChild(li[0]);
});

// innerHTML;
// textContent;
// setAttribute, getAttribute, removeAttribute
// add(), remove(), toggle()

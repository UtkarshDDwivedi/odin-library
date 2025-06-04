function Book(title, author, pages, progress) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;
}

function createBookCard(title, author, pages, progress, id) {
    let titlePara = document.createElement("p");
    titlePara.textContent = title;
    titlePara.classList.add("title");

    let authorPara = document.createElement("p");
    let authorSpan = document.createElement("span");
    authorSpan.textContent = "Author:";
    authorSpan.classList.add("heading");
    authorPara.appendChild(authorSpan);
    authorPara.appendChild(document.createTextNode(author));

    let pagesPara = document.createElement("p");
    let pagesSpan = document.createElement("span");
    pagesSpan.textContent = "Pages:";
    pagesSpan.classList.add("heading");
    pagesPara.appendChild(pagesSpan);
    pagesPara.appendChild(document.createTextNode(pages));

    let progressPara = document.createElement("p");
    let progressSpan = document.createElement("span");
    progressSpan.textContent = "Progress:";
    progressSpan.classList.add("heading");
    progressPara.appendChild(progressSpan);
    progressPara.appendChild(document.createTextNode(progress));

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-book");

    let card = document.createElement("div");
    card.appendChild(titlePara);
    card.appendChild(authorPara);
    card.appendChild(pagesPara);
    card.appendChild(progressPara);
    card.appendChild(removeButton);
    card.classList.add("card");

    let main = document.querySelector(".main");
    main.appendChild(card);
}

let dialog = document.querySelector("dialog");
let form = document.querySelector("form");
let showModalBtn = document.querySelector("header button");
let closeModalBtn = document.querySelector("#cancel");

showModalBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let progress = formData.get("progress");
      
    createBookCard(title, author, pages, progress);
    form.reset();
    dialog.close();
})

let main = document.querySelector(".main");
main.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-book")) {
        let card = e.target.closest(".card");
        card.remove();
    }
})
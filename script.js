function Book(title, author, pages, progress) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;
    this.id = crypto.randomUUID();
}

let dialog = document.querySelector("dialog");
let showModalBtn = document.querySelector("header button");
let closeModalBtn = document.querySelector("#cancel");
let addBookBtn = document.querySelector("#add-book");

showModalBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})
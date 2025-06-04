function Book(title, author, pages, progress) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;
    this.id = crypto.randomUUID();
}
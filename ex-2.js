function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //Binary Search
  let index = -1;
  let left = 0,
    right = books.length - 1;
  for (let i = 0; i < books.length; i++) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title === searchTitle) {
      index = mid;
    } else if (books[mid].title > searchTitle) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}
const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Gone with the Wind"));
console.log(findBookIndex(books, "The Master Mind"));

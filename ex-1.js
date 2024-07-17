function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //Binary Search
  let index = -1;
  let left = 0,
    right = students.length - 1;
  for (let i = 0; i < students.length; i++) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      index = mid;
    } else if (students[mid] > searchStudent) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}
console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "John"
  )
);
console.log(
  findStudentIndex(
    ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],
    "Andrew"
  )
);
// ยังจำได้ไหมว่า Binary Search มี Big O เป็นเท่าไร เพราะอะไร
// ตอบคำถามตรงนี้จ้า
// Binary Search มี Big O เป็น log n เพราะ การวน loop ในการหาคำตอบแต่ละครั้ง จำนวนการค้นหาจะลดลงครึ่งหนึ่งเสมอ

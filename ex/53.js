'use strict'

console.log('Ex 53')
console.log('Students')
// reviewed ✔️

/*
53. Students:
a. Create a students array (use the same algorithm as before and name it createStudents())
b. Read the student name from the user until “quit” is entered. Populate the students array with student objects.
c. Read 3 grades for each student (each student should have a grades array).
d. Calculate the average of each student.
e. Write the function findWorstStudent(students).
f. Write the function sortStudentsByGrade(students).
g. Write the function sortStudentsByName(students) 
*/

var gNextId = 101
var gStudents = createStudents()
console.log('gStudents : ', gStudents)

enterGrades(gStudents)
calcAvg(gStudents)

var worstStudent = findWorstStudent(gStudents)
console.log('worstStudent : ', worstStudent)

sortStudentsByGrade(gStudents)
console.log('After sort gStudents : ', gStudents)

function createStudents() {
  var students = []
  var studentName = prompt('Enter student name. type quit to exit')
  while (studentName !== 'quit') {
    var student = createStudent(studentName)
    students.push(student)
    studentName = prompt('Enter student name. type quit to exit')
  }
  return students
}

function createStudent(name) {
  var student = {
    id: gNextId++,
    name: name,
  }
  student.id
  return student
}

function enterGrades(students) {
  for (var i = 0; i < students.length; i++) {
    var currStudent = students[i]
    currStudent.grades = readGrades(currStudent.name)
  }
}

function readGrades(studentName) {
  var grades = []
  for (var i = 0; i < 3; i++) {
    var grade = +prompt('Enter a grade for ' + studentName)
    grades.push(grade)
  }
  return grades
}

function calcAvg(students) {
  for (var i = 0; i < students.length; i++) {
    var cuttStudent = students[i]
    var sum = 0
    var gradesLength = cuttStudent.grades.length
    for (var j = 0; j < gradesLength; j++) {
      sum += cuttStudent.grades[j]
    }
    cuttStudent.avg = sum / gradesLength
  }
}

function findWorstStudent(students) {
  var worstStudent = null

  for (var i = 0; i < students.length; i++) {
    var currStudent = students[i]
    if (!worstStudent || currStudent.avg < worstStudent.avg) {
      worstStudent = currStudent
    }
  }
  return worstStudent
}

function sortStudentsByGrade(students) {
  students.sort((s1, s2) => {
    return s2.avg - s1.avg
  })
}

function sortStudentsByName(students) {
  students.sort(function (s1, s2) {
    if (s1.name.toLowerCase() > s2.name.toLowerCase()) return 1
    if (s2.name.toLowerCase() > s1.name.toLowerCase()) return -1
    return 0
  })
}

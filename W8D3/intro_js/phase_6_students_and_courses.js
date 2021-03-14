function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName; 
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.firstName} ${this.lastName}`;
};

const student1 = new Student('Sky', 'Kumtong');
// console.log(student1.name());

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.addStudent(this);
  }
};



Student.prototype.courseLoad = function(student) {
  const courseLoad = {};

  this.courses.forEach(course => {
    let dept = course.department;
    courseLoad[dept] = 0;
    courseLoad[dept] += course.credits;
  });

  return courseLoad;
};

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  if (!this.students.includes(student)) {
    this.students.push(student);
    student.enroll(this);
  }
};

const course1 = new Course('101', 'CS', 4);

student1.enroll(course1);
console.log(student1.courses);



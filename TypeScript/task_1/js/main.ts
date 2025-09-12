interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const teacher3: Teacher = {
  firstName: 'Sebastian',
  fullTimeEmployee: false,
  lastName: 'Salgue',
  location: 'Rodez',
  contract: false,
};

const director1: Directors = {
  firstName: 'Evgeni',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Kiev',
  numberOfReports: 5,
};

const app = document.createElement('pre');
app.textContent = JSON.stringify({ teacher3, director1 }, null, 2);
document.body.appendChild(app);

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Sebastien", "Salgue"));
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName());
console.log(student1.workOnHomework());

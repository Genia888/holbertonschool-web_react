// define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create two students
const student1: Student = {
  firstName: "Evgeni",
  lastName: "Khalepo",
  age: 39,
  location: "Rodez city",
};

const student2: Student = {
  firstName: "Sebastien",
  lastName: "Salgue",
  age: 47,
  location: "Rodez Downtown",
};

// table of students
const studentsList: Student[] = [student1, student2];

// Create vanilla table
const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  const ageCell = document.createElement('td');
  ageCell.textContent = student.age.toString();

  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = student.lastName; 

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  row.appendChild(ageCell);
  row.appendChild(lastNameCell);
  table.appendChild(row);
});

document.body.appendChild(table);

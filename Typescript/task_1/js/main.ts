// Definition of the 'Teacher' interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: string | boolean | number | undefined; // To allow any attribute
}

// Definition of the 'Directors' interface that extends 'Teacher'
interface Directors extends Teacher {
  numberOfReports: number;
}

// Definition of the 'printTeacherFunction' interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example of use with 'Teacher' interface
const teacher3: Teacher = {
  firstName: 'Ruben',
  fullTimeEmployee: false,
  lastName: 'Cardenas',
  location: 'Lima',
  contract: false,
};

console.log(teacher3);

// Example of use with 'Directors' interface
const director1: Directors = {
  firstName: 'Gabriel',
  lastName: 'Bedoya',
  location: 'Lima',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Implementation of the 'printTeacher' function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  return `${firstLetter}. ${lastName}`;
};

// Example of use with the 'printTeacher' function
const printedTeacher = printTeacher('John', 'Doe');
console.log(printedTeacher);

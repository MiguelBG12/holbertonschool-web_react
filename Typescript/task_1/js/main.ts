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

// Definition of the 'Student' interface
interface Student {
  firstName: string;
  lastName: string;
}

// Definition of the 'StudentClass' interface
interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

// Definition of the 'StudentClass' class
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example of use with 'StudentClass'
const student1: StudentClass = new StudentClass('Miguel', 'Bautista');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: Alice

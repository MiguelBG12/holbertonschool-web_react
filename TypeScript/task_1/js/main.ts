interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number | undefined;
  }

const teacher3: Teacher = {
  firstName: 'Fracisco',
  fullTimeEmployee: false,
  lastName: 'Contreras',
  location: 'Lima',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Carlos',
  lastName: 'Gutierrez',
  location: 'Lima',
  fullTimeEmployee: true,
  numberOfReports: 25,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printedTeacher: string = printTeacher("John", "Doe");
console.log(printedTeacher);

class StudentClass implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
      return "Currently working";
  }

  displayName(): string {
      return this.firstName;
  }
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

const studentInstance: StudentInterface = new StudentClass("Alice", "Smith");
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
// Definition of the 'Teacher' interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number | undefined; // To allow any attribute
  }
  
  // Example of use
  const teacher3: Teacher = {
    firstName: 'Ruben',
    fullTimeEmployee: false,
    lastName: 'Cardenas',
    location: 'Lima',
    contract: false,
  };
  
  console.log(teacher3);
  
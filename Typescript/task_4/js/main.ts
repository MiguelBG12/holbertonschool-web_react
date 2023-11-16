import { Cpp, Java, React, Subjects } from './subjects/Cpp'; // Import classes and namespaces

// Create and export constant for Cpp Subjects
export const cpp = new Subjects.Cpp();

// Create and export constant for Java Subjects
export const java = new Subjects.Java();

// Create and export constant for React Subjects
export const react = new Subjects.React();

// Create and export a Teacher object with 'experienceTeachingC = 10'
export const cTeacher: Subjects.Teacher = { experienceTeachingC: 10 };

// For Cpp subject, log to the console 'C++', set 'cTeacher' as the teacher, 
// call the two methods 'getRequirements' and 'getAvailableTeacher', 
// and print the strings they return
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject, log to the console 'Java', set 'cTeacher' as the teacher, 
// call the two methods 'getRequirements' and 'getAvailableTeacher', 
// and print the strings they return
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject, log to the console 'React', set 'cTeacher' as the teacher, 
// call the two methods 'getRequirements' and 'getAvailableTeacher', 
// and print the strings they return
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// Create 'MajorCredits' interface with a 'credits' number property and a unique brand
interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits'; // Brand property for identification
}
  
// Create 'MinorCredits' interface with a 'credits' number property and a unique brand
interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits'; // Brand property for identification
}

// Create 'sumMajorCredits' function returning 'MajorCredits' value by summing 2 subjects' credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, __brand: 'MajorCredits' };
}
  
// Create 'sumMinorCredits' function returning 'MinorCredits' value by summing 2 subjects' credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, __brand: 'MinorCredits' };
}

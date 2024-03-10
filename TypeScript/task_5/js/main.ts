interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCreditsSum",
  };
  return sum;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCreditsSum',
  };
  return sum;
}

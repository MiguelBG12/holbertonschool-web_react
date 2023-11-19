import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Testing getFullYear function
describe('getFullYear function', () => {
  it('returns the current year', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Check if getFullYear() returns the current year as a string
    expect(getFullYear()).toBe(currentYear.toString());
  });
});

// Testing getFooterCopy function
describe('getFooterCopy function', () => {
  // Test for true argument in getFooterCopy function
  it('returns "Holberton School" when the argument is true', () => {
    // Check if getFooterCopy(true) returns 'Holberton School'
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  // Test for false argument in getFooterCopy function
  it('returns "Holberton School main dashboard" when the argument is false', () => {
    // Check if getFooterCopy(false) returns 'Holberton School main dashboard'
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

// Testing getLatestNotification function
describe('getLatestNotification function', () => {
  // Test the returned string from getLatestNotification function
  it('returns the correct string', () => {
    // Get the string returned by getLatestNotification
    const latestNotification = getLatestNotification();
    // Check if the returned string contains specific phrases
    expect(latestNotification).toContain('Urgent requirement');
    expect(latestNotification).toContain('complete by EOD');
  });
});

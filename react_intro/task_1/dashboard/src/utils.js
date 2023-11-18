// Function to get the current year
export function getFullYear() {
    return new Date().getFullYear();
}
  
// Function to get the footer text based on isIndex
export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
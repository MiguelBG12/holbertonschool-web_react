// Function to get the current year
export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear.toString(); // Convert to string explicitly
}
  
  
// Function to get the footer text based on isIndex
export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

// This function returns the latest notification with a specific format
export function getLatestNotification() {
    // Returns an HTML-formatted string that represents an urgent notification
    return '<strong>Urgent requirement</strong> - complete by EOD';
}
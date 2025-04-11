//your JS code here. If required.
// Function to detect the user's browser and version
function getBrowserInfo() {
    // Get the user agent string
    const userAgent = navigator.userAgent;

    // Initialize variables for browser name and version
    let browserName, version;

    // Check for different browsers in the user agent string
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        version = userAgent.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        version = userAgent.match(/Version\/(\d+\.\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        version = userAgent.match(/(MSIE |rv:)(\d+\.\d+)/)[2];
    } else {
        browserName = "Unknown";
        version = "Unknown";
    }

    // Create the message to display
    const message = `You are using ${browserName} version ${version}`;

    // Display the message in the div with id 'browser-info'
    document.getElementById('browser-info').textContent = message;
}

// Call the function to get and display browser information
getBrowserInfo();
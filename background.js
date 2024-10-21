chrome.runtime.onInstalled.addListener(() => {
    // Set the default theme when the extension is installed
    chrome.storage.sync.set({ theme: "light" });
});

// Function to update the theme based on user preference (if applicable)
function updateTheme(isDarkMode) {
    const theme = isDarkMode ? "dark" : "light";
    chrome.storage.sync.set({ theme });
}

// Check for dark mode preference during startup
chrome.runtime.onStartup.addListener(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(isDarkMode);
});

// Unfortunately, you cannot use window.matchMedia in a service worker
// So, you should let the popup handle the theme detection

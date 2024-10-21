# Technician Bookmark Manager & Student Password Generator

This Chrome extension is for private use by UoBAT staff in the IT department.

## Features

### 1. **Bookmarks**
- A dedicated bookmark manager that allows IT technicians to store and manage their frequently used URLs and share across the department with synced backend storage.
- Automatically prepends `https://` to URLs, ensuring that all bookmarks are saved with the correct protocol.
- Bookmarks are stored persistently using Firebase (TODO)

### 2. **Student Password Generator**
- A simple password generator for creating student passwords in the format: `Color + Animal + 2-3 numbers` (e.g., `BlueTiger32`).
- Includes a button to copy the generated password to the clipboard for easy pasting.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/technician-bookmark-manager.git
    ```
    or click on the 'Code' button on this page, and download the Zip file (you will need to extract it on your machine before installing).
    
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** using the toggle in the upper right corner.
4. Click the **Load unpacked** button and select the directory where you cloned this repository.
5. The extension will now be loaded into Chrome, and you should see the Technician Bookmark Manager icon in your extensions bar.

## How to Use

### Technician Bookmarks Tab
1. **Add a New Bookmark**: 
    - Enter a URL and a name for the bookmark. The URL will be automatically prefixed with `https://` if not provided.
    - Click "Save Bookmark" to add it to the list.
2. **Delete a Bookmark**: 
    - To remove a bookmark, click the red recycle bin icon next to the bookmark entry.

### Student Password Generator Tab
1. Navigate to the **Tools** tab.
2. Click **Generate Password** to create a password in the format `Color + Animal + Numbers`.
3. The generated password will be displayed in the password box.
4. Click **Copy Password** to copy the generated password to your clipboard.

## File Structure

```plaintext
.
├── icon.png                # Icon used in the extension
├── manifest.json           # Configuration file for the Chrome extension
├── popup.html              # HTML structure for the popup
├── popup.css               # Styling for the popup interface
├── popup.js                # JavaScript functionality for bookmark handling and password generation
└── README.md               # Project documentation

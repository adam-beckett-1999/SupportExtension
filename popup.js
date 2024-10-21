// Function to generate a password
function generatePassword() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink"];
    const animals = ["Cat", "Dog", "Elephant", "Giraffe", "Lion", "Tiger", "Bear"];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomNumbers = Math.floor(100 + Math.random() * 900); // Generates a number between 100 and 999

    return `${randomColor}${randomAnimal}${randomNumbers}`;
}

// Event listener for password generation button
document.getElementById('generatePassword').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('passwordDisplay').textContent = password;
});

// Event listener for copying password
document.getElementById('copyPassword').addEventListener('click', () => {
    const password = document.getElementById('passwordDisplay').textContent;
    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }
});

// Function to handle tab switching
function switchTab(event) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    // Hide all tab contents
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content and add active class to the button
    const selectedTab = event.target.getAttribute('data-tab');
    document.getElementById(selectedTab).classList.add('active');
    event.target.classList.add('active');
}

// Add event listeners to tab buttons
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', switchTab);
});

// Other existing functionality for bookmarks
document.getElementById('bookmark-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const urlInput = document.getElementById('bookmark-url');
    const nameInput = document.getElementById('bookmark-name');

    // Prepend 'https://' to URL if it doesn't start with 'http://' or 'https://'
    let url = urlInput.value.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    const bookmark = {
        url: url,
        name: nameInput.value
    };

    // Store the bookmark in local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Clear input fields
    urlInput.value = '';
    nameInput.value = '';

    // Update the bookmark list
    displayBookmarks();
});

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button class="delete-button" data-index="${index}">🗑️</button>
        `;
        bookmarkList.appendChild(listItem);
    });

    // Add delete functionality to each delete button
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            displayBookmarks();
        });
    });
}

// Display bookmarks on load
displayBookmarks();

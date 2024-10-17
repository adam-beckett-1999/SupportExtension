document.addEventListener('DOMContentLoaded', function () {
    const saveBookmarkButton = document.getElementById('saveBookmark');
    const bookmarkList = document.getElementById('bookmarkList');

    // Load bookmarks when the popup is opened
    chrome.storage.sync.get('bookmarks', function (data) {
        const bookmarks = data.bookmarks || [];
        bookmarks.forEach(bookmark => {
            displayBookmark(bookmark);
        });
    });

    // Save the new bookmark
    saveBookmarkButton.addEventListener('click', function () {
        const bookmarkName = document.getElementById('bookmarkName').value;
        const bookmarkUrl = document.getElementById('bookmarkUrl').value;

        if (bookmarkName && bookmarkUrl) {
            const newBookmark = { name: bookmarkName, url: bookmarkUrl };

            // Get existing bookmarks
            chrome.storage.sync.get('bookmarks', function (data) {
                const bookmarks = data.bookmarks || [];
                bookmarks.push(newBookmark);

                // Save updated bookmarks
                chrome.storage.sync.set({ bookmarks: bookmarks }, function () {
                    displayBookmark(newBookmark);
                    document.getElementById('bookmarkName').value = '';
                    document.getElementById('bookmarkUrl').value = '';
                });
            });
        }
    });

    // Function to display a bookmark
    function displayBookmark(bookmark) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = bookmark.url;
        link.textContent = bookmark.name;
        link.target = '_blank';

        listItem.appendChild(link);
        bookmarkList.appendChild(listItem);
    }
});

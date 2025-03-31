app.filter('bookFilter', function () {
    return function (books, searchText) {
        if (!searchText) return books; // If search box is empty, show all books

        searchText = searchText.toLowerCase();

        return books.filter(function (book) {
            return (
                book.title.toLowerCase().includes(searchText) ||
                book.author.toLowerCase().includes(searchText) ||
                book.genre.toLowerCase().includes(searchText)
            );
        });
    };
});
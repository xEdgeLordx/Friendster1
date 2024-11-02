function changeView() {
    currentPage = model.app.currentPage;
    page = model.app.pages;
    if (currentPage === page[0]) {
        updateLoginView()
    }
    else if (currentPage === page[1]) {
        updateFeedView()
    }
    else if (currentPage === page[2]) {
        updateProfileView()
    }
    else if (currentPage === page[3]) {
        updateFriendView()
    }
}

function goToLogin() {
    model.app.currentPage = model.app.pages[0];
    changeView();
}

function goToFeed() {
    model.app.currentPage = model.app.pages[1];
    changeView();
}

function searchBar() {
    let searchBar = /*HTML*/ `
    <input type="text" oninput="model.input.search.searchInput=this.value.toLowerCase();"  placeholder="Search for user...">
    <button onclick="updateProfileView()">Search</button>
    `;
    return searchBar;
}

function displaySearchResults() {
    let searchInput = model.input.search.searchInput || '';
    let searchHtml = '';

    if(searchInput !== ''){
    const searchResult = model.data.users.filter(user =>
        user.name.toLowerCase().includes(searchInput) ||
        user.email.toLowerCase().includes(searchInput)
    );

    console.log("search results:", searchResult);

    for (let resultsIndex = 0; resultsIndex < searchResult.length; resultsIndex++) {
        searchHtml += /*HTML*/ `
        <div>
        ${searchResult[resultsIndex].name}-${searchResult[resultsIndex].email}
        </div>
        `;
    }
    if (searchResult.length === 0) {
        searchHtml = '<div>Ingen resultater</div>';
    }
}
    return searchHtml;
}
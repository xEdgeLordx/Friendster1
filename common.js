function changeView() {
    currentPage = model.app.currentPage;
    page = model.app.pages;
    console.log("CurrentPage:", currentPage);
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
    else if (currentPage === page[4]){
        updateClubView()
    }
    else if(currentPage === page[5]){
        updateChatRoomView()
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
    <button onclick="changeView()">Search</button>
    <input type="text" oninput="model.input.search.searchTeamsInput=this.value.toLowerCase();"  placeholder="Search for club...">
    <button onclick="changeView()">Search for club</button>
    <input type="text" oninput="model.input.profilePage.inputFriend=this.value">
    <button onclick="addFriend()">Add Friend</button>
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
        <p><strong>Username:${searchResult[resultsIndex].name} Mail:${searchResult[resultsIndex].email} <button onclick="addFriend('${searchResult[resultsIndex].username}')">Add</button></strong><p>
        
        </div>
        `;
    }
    if (searchResult.length === 0) {
        searchHtml = '<div>Ingen resultater</div>';
    }
}
    return searchHtml;
}
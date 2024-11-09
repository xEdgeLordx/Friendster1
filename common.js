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
    ${selectCategory()}
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
        <p><strong>Username:${searchResult[resultsIndex].name}<button onclick="addFriend('${searchResult[resultsIndex].username}')">Add</button></strong><p>
        
        </div>
        `;
    }
    if (searchResult.length === 0) {
        searchHtml = '<div>Ingen resultater</div>';
    }
}
    return searchHtml;
}

function displayTeamResults(){
    let searchTeam = model.input.search.searchTeamsInput || '';
    let teamHtml = '';
    if(searchTeam !== ''){
    const searchTeamsResult = model.data.footballTeams.filter(club =>
        club.teamName.toLowerCase().includes(searchTeam) ||
        club.city.toLowerCase().includes(searchTeam) ||
        club.league.toLowerCase().includes(searchTeam) ||
        club.nation.toLowerCase().includes(searchTeam) ||
        club.manager.toLowerCase().includes(searchTeam)
    );
    for(let resultsIndex = 0;resultsIndex < searchTeamsResult.length; resultsIndex++){
        let input = model.input.search;
        teamHtml += /*HTML*/ `
        <p>${input.isTeam ? searchTeamsResult[resultsIndex].teamName : ''}</p>
        <p>${input.isCity ? searchTeamsResult[resultsIndex].teamName : ''}</p>
        <p>${input.isLeague ? searchTeamsResult[resultsIndex].teamName : ''}</p>
        <p>${input.isNation ? searchTeamsResult[resultsIndex].teamName : ''}</p>
        <p>${input.isManager ? searchTeamsResult[resultsIndex].manager : ''}</p>`;
    }
    console.log("team:", searchTeamsResult)
    }
    return teamHtml;
}

function selectCategory(){
    let checkBoxHtml = '';
    checkBoxHtml = /*HTML*/ `
    <label class="checkbox-label">
    <input type="checkbox" value="true" onchange="model.input.search.isTeam=this.checked">
    <span>Team</span>
</label>
<label class="checkbox-label">
<input type="checkbox" value="true" onchange="model.input.search.isNation=this.checked">
<span>Nation</span>
</label>
<label class="checkbox-label">
<input type="checkbox" value="true" onchange="model.input.search.isCity=this.checked">
<span>City</span>
</label>
<label class="checkbox-label">
<input type="checkbox" value="true" onchange="model.input.search.isManager=this.checked">
<span>Manager</span>
</label>
<label class="checkbox-label">
<input type="checkbox" value="true" onchange="model.input.search.isLeague=this.checked">
<span>League</span>
</label>
`;
console.log("isTeam:", model.input.search.isTeam,)
return checkBoxHtml;
}
function updateProfileView() {
    console.log("friend:", model.app.selectedUsers.friendUser);
    let selectedUser = model.data.users[model.app.selectedUsers.loggedInUser];
    profilePage = /*HTML*/ `
    <h1>Profile</h1>
 <div class="searchContainer">
        ${searchBar()}
  <div class="searchResults">
    ${displaySearchResults()}
    ${displayTeamResults()}
  </div>
 </div>
    <div class="outerContainer">
    <div class="profileContainer">
    <strong>Hello ${selectedUser.name}!</strong>
        <div class="profilePic">
        <img src="${selectedUser.userImages[0]}">
        <br>
        <strong>${selectedUser.username}</strong>
        </div>
    
        <div class="profileUserInfo">
            <div class="profileUsername">
            </div>
            <div class="profileUserImages">
                <strong>User Images:</strong>
                <div>${showImages(selectedUser)}</div>
            </div>
            <div class="profileAge">
                <strong>Age:</strong>
                <span>${selectedUser.age}</span>
            </div>
            <div class="friends">
            <h3>Venner</h3>
          <div class="friend">${showFriends(selectedUser)}</div>
            </div>
            <div class="profileGender">
                <strong>Gender:</strong>
                <div>${selectedUser.gender}</div>
            </div>
            <div class="profileOccupation">
                <strong>Occupation:</strong>
                <div>${selectedUser.occupation}</div>
            </div>
            <div class="profileInterests">
                <strong>Interests:</strong>
                ${showInterests(selectedUser)}
            </div>
        </div>
    </div>
    </div>
${createNavButtons()}`;
    appDiv.innerHTML = profilePage;
}


function showImages(selectedUser) {
    let imagesStream = '';
    for (let imageIndex = 1; imageIndex < selectedUser.userImages.length; imageIndex++) {
        imagesStream += /*HTML*/ `
        <img src="${selectedUser.userImages[imageIndex]}">`;
    }
    return imagesStream;
}

function showInterests(selectedUser) {
    let interestsHtml = '';
    for (let interestIndex = 0; interestIndex < selectedUser.interests.length; interestIndex++) {
        interestsHtml += /*HTML*/ `
        <div>${selectedUser.interests[interestIndex]}</div>`;
    }
    return interestsHtml;

}

function showFriends(selectedUser) {
    let friendsHtml = '';
    console.log("det virket");
    
    for (let friendIndex = 0; friendIndex < selectedUser.friendList.length; friendIndex++) {
        const friendUsername = selectedUser.friendList[friendIndex];
        const indexFriend = model.data.users.findIndex(user => user.username === friendUsername);
        console.log("friendIndex:", indexFriend);
        friendsHtml += /*HTML*/ `
       <div onclick="goToFriend(${indexFriend})">
      <strong> ${selectedUser.friendList[friendIndex]}</strong>
       </div>
       <button onclick="goToChatroom(${indexFriend})">Chat</button>
       `;
    }
    
    return friendsHtml;
}



function addFriend(username){
    let selectedUser = model.data.users[model.app.selectedUsers.loggedInUser];
    let friendInput = model.input.profilePage.inputFriend;
    if(selectedUser.friendList.includes(model.input.profilePage.inputFriend)){
        console.log("already there");
        return;
    }
    let friend = model.data.users.find(user => user.username === username);
    if(friend && !selectedUser.friendList.includes(friend.username)){
        selectedUser.friendList.push(friend.username);
        friend.friendList.push(selectedUser.username);
        friendInput = '',
        updateProfileView();
    }
    else {
        console.log("user not found")
        friendInput = '';
        updateProfileView();
    }
    
    }

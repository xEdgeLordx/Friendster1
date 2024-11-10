function updateFriendView() {
    console.log("selectedloggedin:", model.app.selectedUsers.loggedInUser)
    let friendUser = model.data.users[model.app.selectedUsers.friendUser];
    profilePage = /*HTML*/ `
    <h1>Friend</h1>
    ${createNavButtons()}
    <div class="outerContainer">
    <div class="profileContainer">
    <strong>This is ${friendUser.name}'s site!</strong>
        <div class="profilePic">
        <img src="${friendUser.userImages[0]}">
        <br>
        <strong>${friendUser.username}</strong>
        </div>
    
        <div class="profileUserInfo">
            <div class="profileUsername">
            </div>
            <div class="profileUserImages">
                <strong>User Images:</strong>
                <div>${showFriendImages(friendUser)}</div>
            </div>
            <div class="profileAge">
                <strong>Age:</strong>
                <span>${friendUser.age}</span>
            </div>
            <div class="friends">
            <h3>Venner</h3>
            ${showFriendUserFriends(friendUser)}
            </div>
            <div class="profileGender">
                <strong>Gender:</strong>
                <div>${friendUser.gender}</div>
            </div>
            <div class="profileOccupation">
                <strong>Occupation:</strong>
                <div>${friendUser.occupation}</div>
            </div>
            <div class="profileInterests">
                <strong>Interests:</strong>
                ${showInterestsFriend(friendUser)}
            </div>
        </div>
    </div>
    </div>`;
    appDiv.innerHTML = profilePage;
}

function showFriendImages(friendUser) {
    let imagesStream = '';
    for (let imageIndex = 1; imageIndex < friendUser.userImages.length; imageIndex++) {
        imagesStream += /*HTML*/ `
        <img src="${friendUser.userImages[imageIndex]}">`;
    }
    return imagesStream;
}

function showInterestsFriend(friendUser) {
    let interestsHtml = '';
    for (let interestIndex = 0; interestIndex < friendUser.interests.length; interestIndex++) {
        interestsHtml += /*HTML*/ `
        <div>${friendUser.interests[interestIndex]}</div>`;
    }
    return interestsHtml;

}

function showFriendUserFriends(friendUser) {
    let friendHtml = '';
    for (let friendIndex = 0; friendIndex < friendUser.friendList.length; friendIndex++) {
        const friendUsername = friendUser.friendList[friendIndex];
        const indexFriend = model.data.users.findIndex(user => user.username === friendUsername);
        if(friendUsername === model.data.users[model.app.selectedUsers.loggedInUser].username){
        friendHtml += /*HTML*/ `
        <div onclick="goToProfile(${indexFriend})">
        ${friendUser.friendList[friendIndex]}
        </div>`;
    }
    if(friendUsername !== model.data.users[model.app.selectedUsers.loggedInUser].username){
        friendHtml += /*HTML*/ `
        <div onclick="goToFriend(${indexFriend})">
        ${friendUser.friendList[friendIndex]}
        </div>`;
    }
    }
    return friendHtml;
}
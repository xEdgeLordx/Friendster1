function updateProfileView(){
    let selectedUser = model.data.users[model.app.selectedUsers.loggedInUser];
    profilePage = /*HTML*/ `
    <h1>Profile</h1>
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
    </div>`;
    appDiv.innerHTML = profilePage;
}


function showImages(selectedUser){
    let imagesStream = '';
    for(let imageIndex = 1; imageIndex < selectedUser.userImages.length; imageIndex++){
        imagesStream += /*HTML*/ `
        <img src="${selectedUser.userImages[imageIndex]}">`;
    }
    return imagesStream;
}

function showInterests(selectedUser){
    let interestsHtml = '';
    for(let interestIndex = 0; interestIndex < selectedUser.interests.length; interestIndex++){
        interestsHtml += /*HTML*/ `
        <div>${selectedUser.interests[interestIndex]}</div>`;
    }
    return interestsHtml;

}
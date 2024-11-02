function goToFriend(indexFriend){
    model.app.selectedUsers.friendUser = indexFriend;
    console.log("indexFriend:", indexFriend);
    model.app.currentPage = model.app.pages[3];
    changeView();
}

function goToFriendPage(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}
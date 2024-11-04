function goToChatroom(indexFriend){
    let chatFriend = model.data.users.find(user => user.id === indexFriend);
    model.app.selectedUsers.friendUser = indexFriend;
    console.log("chatFriend:", chatFriend);
    model.app.currentPage = model.app.pages[5];
    changeView();
}
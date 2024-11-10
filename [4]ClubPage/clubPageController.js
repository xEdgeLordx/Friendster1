function goToClubPage(clubId){
    model.app.selectedUsers.selectedClub = clubId;
    model.app.currentPage = model.app.pages[4];
    changeView();
}
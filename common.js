function changeView(){
    currentPage = model.app.currentPage;
    page = model.app.pages;
    if(currentPage === page[0]){
        updateLoginView()
    }
    else if (currentPage === page[1]){
        updateFeedView()
    }
    else if (currentPage === page[2]){
        updateProfileView()
    }
    else if (currentPage === page[3]){
        updateFriendView()
    }
}
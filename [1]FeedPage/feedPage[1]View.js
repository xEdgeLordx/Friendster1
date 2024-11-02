function updateFeedView(){
    feedPage = /*HTML*/ `
    <button onclick="goToLogin()">LoginPage</button>
<button onclick="goToFeed()">FeedPage</button>
<button onclick="goToProfile()">ProfilePage</button>
<button onclick="goToFriendPage()">friendPage</button>`;

appDiv.innerHTML = feedPage;
}
function updateClubView() {
    let selectedClub = model.data.footballTeams[model.app.selectedUsers.selectedClub];
    clubPage = /*HTML*/ `
    ${createNavButtons()}
    <div class="clubContainer">
        <h1 class="clubTitle">${selectedClub.teamName}</h1>
        <img class="clubImage" src="${selectedClub.img ?? ''}">

        <div class="clubDetails">
        <div class="clubHighlights"><strong>Bio:</strong> ${selectedClub.bio}</div>
            <div><strong>Manager:</strong> ${selectedClub.manager}</div>
            <div><strong>League Titles:</strong> ${selectedClub.leagueTitles}</div>
            <div><strong>Champions League Titles:</strong> ${selectedClub.championsLeagueTitles}</div>
            <div><strong>Europa League Titles:</strong> ${selectedClub.europaLeagueTitles}</div>
            <div><strong>Founded:</strong> ${selectedClub.founded}</div>
            <div><strong>League:</strong> ${selectedClub.league}</div>
            <div><strong>Nation:</strong> ${selectedClub.nation}</div>
            <div><strong>City:</strong> ${selectedClub.city}</div>
            <div><strong>Stadium:</strong> ${selectedClub.stadium}</div>
            <div><strong>Capacity:</strong> ${selectedClub.stadiumCapacity}</div>
            <div><strong>Top Scorer:</strong> ${selectedClub.topScorer}</div>
            <div><strong>Goals:</strong> ${selectedClub.topScorerGoals}</div>
            <div><strong>Rival Club:</strong> ${selectedClub.rivalClub}</div>
            <div class="clubHighlights"><strong>Motto:</strong> ${selectedClub.clubMotto}</div>
            <div><strong>Market Value:</strong> ${selectedClub.marketValue}</div>
            <div><strong>Social Media Followers:</strong> ${selectedClub.socialMediaFollowers}</div>
            <div><strong>Colors:</strong> ${selectedClub.colors}</div>
            <div><strong>Nicknames:</strong> ${selectedClub.nicknames}</div>
            <div><strong>Annual Revenue:</strong> ${selectedClub.annualRevenue}</div>
            <div><strong>Ownership:</strong> ${selectedClub.ownership}</div>
            <div><strong>Notable Players:</strong> ${selectedClub.notablePlayers}</div>
            <div><strong>Youth Academy:</strong> ${selectedClub.youthAcademy}</div>
            <div><strong>Total Trophies:</strong> ${selectedClub.totalTrophies}</div>
            <div><strong>Members:</strong> ${selectedClub.members}</div>
        </div>

        <div class="clubWebsite">
            <a href="${selectedClub.website}">Visit Official Website</a>
        </div>
    </div>
    `;
    appDiv.innerHTML = clubPage;
}

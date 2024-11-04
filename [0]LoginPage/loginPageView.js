function updateLoginView(){
loginPage = /*HTML*/ `
<div>Login</div>
<form>
<input type="text" placeholder="Username..." oninput="model.input.login.username=this.value">
<input type="password" placeholder="Password..." oninput="model.input.login.password=this.value">
</form>
<button onclick="updateRegView()">New User</button>
<button onclick="logIn()">Log In</button>
<div></div>
<button onclick="goToLogin()">LoginPage</button>
<button onclick="goToFeed()">FeedPage</button>
<button onclick="goToProfile()">ProfilePage</button>
<button onclick="goToFriendPage()">FriendPage</button>
`;

appDiv.innerHTML = loginPage;
}





// ---------------regView--------------------------
function updateRegView(){
    inputReg = model.input.registerUser;
    regView = /*HTML*/ `
    <h1>RegView</h1>
    <input type="text" placeholder="Username..." oninput="inputReg.username=this.value">
    <form>
    <input type="password" placeholder="Password..." oninput="inputReg.password=this.value">
    <input type="password" placeholder="Confirm Password..." oninput="inputReg.passwordConfirm=this.value">
    </form>
    <input type="text" placeholder="Name..." oninput="inputReg.name=this.value">
    <input type="number" placeholder="Age" oninput="inputReg.age=this.value">
    <label>
    <input type="radio" name="gender" value='Male' oninput="inputReg.gender=this.value">Male
    </label>
    <label>
    <input type="radio" name="gender" value='Female' oninput="inputReg.gender=this.value">Female
    </label>
    <input type="text" placeholder="Occupation" oninput="inputReg.occupation=this.value">
    <button onclick="registerUser()">Register user</button>
    `;

    appDiv.innerHTML = regView;
}
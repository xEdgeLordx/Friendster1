function updateLoginView(){
loginPage = /*HTML*/ `
<div>Login</div>

<input type="text" placeholder="Username..." oninput="model.input.login.username=this.value">
<input type="text" placeholder="Password..." oninput="model.input.login.password=this.value">
<button onclick="updateRegView()">New User</button>
<button onclick="logIn()">Log In</button>
<div></div>
`;

appDiv.innerHTML = loginPage;
}


function logIn(){
    loginUsername = model.input.login.username;
    loginPass = model.input.login.password;
    let user = findUser(loginUsername, loginPass);
    console.log("user", user)
    if(user){
        model.app.selectedUsers.loggedInUser = user.id;
        console.log("selectedUser:", user.id)
        goToProfile();
    }
    else{
        model.input.tempMessages.loginMessage = /*HTML*/ `
        Incorrect password`;
    }
}

function findUser(loginUsername, loginPass){
    return model.data.users.find(user =>
    user.username === loginUsername && user.password === loginPass);
}


// ---------------regView--------------------------
function updateRegView(){
    inputReg = model.input.registerUser;
    regView = /*HTML*/ `
    <h1>RegView</h1>
    <input type="text" placeholder="Username..." oninput="inputReg.username=this.value">
    <input type="text" placeholder="Password..." oninput="inputReg.password=this.value">
    <input type="text" placeholder="Confirm Password..." oninput="inputReg.passwordConfirm=this.value">
    <input type="text" placeholder="Name..." oninput="inputReg.name=this.value">
    <input type="number" placeholder="Age" oninput="inputReg.age=this.value">
    
    <input type="radio" value='Male' oninput="inputReg.gender=this.value">Male
    </label>
    <label>
    <input type="radio" value='Female' oninput="inputReg.gender=this.value">Female
    </label>
    <input type="text" placeholder="Occupation" oninput="inputReg.occupation=this.value">
    
    `;

    appDiv.innerHTML = regView;
}
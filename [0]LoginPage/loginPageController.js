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

// -------------------Reg user controller-----------------------

function registerUser(){
    inputReg = model.input.registerUser;
    let foundUser = compareUser();
    if(inputReg.username === foundUser){
        return;
    }
    if(inputReg.username){
        if(inputReg.password){
            if(inputReg.passwordConfirm){
                if(inputReg.name){
                    if(inputReg.age){
                        if(inputReg.occupation){
                            if(inputReg.password === inputReg.passwordConfirm){
                                let newUser = {
                                    id: model.data.users.length,
                                    isAdmin: false,
                                    email: inputReg.email,
                                    username: inputReg.username,
                                    password: inputReg.password,
                                    passwordConfirm: inputReg.passwordConfirm,
                                    userImages: [],
                                    name: inputReg.name,
                                    age: inputReg.age,
                                    gender: inputReg.gender,
                                    bio: '',
                                    occupation: inputReg.occupation,
                                    interests: [],
                                    favoriteTeam: [],
                                    friendList: []
                                };
                                model.data.users.push(newUser);
                                console.log("new user:", newUser)
                        }
                    }
                }
            }

        }
    }{


        }
    }else{
        console.log("fyll inn alle ruter")
    }
    return null;

function compareUser(){
return model.data.users.find(user =>
    user.username === model.input.registerUser.username);
}


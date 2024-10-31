const appDiv = document.getElementById('app');

const model = {
    app: {
        pages: ['loginPage', 'feedPage', 'profilePage', 'friendPage',],
        currentPage: 'loginPage',


        selectedUsers: {
            loggedInUser: 0,
            friendUser: null,
        }
    },//app
    input: {

        login: {
            username: '',
            password: '',
        },

        registerUser: {
            id: '',
            isAdmin: false,
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
            userImages: [],
            name: '',
            age: null,
            gender: '',
            bio: '',
            occupation: '',
            interests: [],
            favoriteTeam: [],
            friendList: [],

        },

        tempMessages: {
            messagePrompt: '',
            chatTemp: '',
            loginMessage: '',
        },

        search: {
        searchInput: '',
        searchResult: '',
        },
    },//input
    data: {
        users: [
            {
                id: 0,
                isAdmin: true,
                email: 'nico@outlook.no',
                username: 'Nico',
                password: '123',
                userImages: [],
                name: 'Nicolai',
                age: 31,
                bio: 'Hei, jeg heter Nico',
                gender: '',
                occupation: 'Student',
                interests: ['Fotball, teknologi,'],
                favoriteTeam: [],
                friendList: [],
            },

            {
                id: 1,
                isAdmin: true,
                email: 'rotta@mail.no',
                username: 'Rotta',
                password: '123',
                userImages: [],
                name: 'Rotta',
                age: 27,
                bio: 'Hei, jeg heter Rotta',
                gender: '',
                occupation: 'Rotte på heltid',
                interests: ['Dumpster diving, spille på slurva,'],
                favoriteTeam: [],
                friendList: [],
            },

        ],//Users
    },//Data

}//Model
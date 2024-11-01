const appDiv = document.getElementById('app');

const model = {
    app: {
        pages: ['loginPage', 'feedPage', 'profilePage', 'friendPage',],
        currentPage: 'profilePage',


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
                userImages: ["Photos/Screenshot 2024-11-01 13.05.41.png", "Photos/Screenshot 2024-11-01 13.06.24.png", "Photos/Screenshot 2024-11-01 13.06.55.png"],
                name: 'Nicolai',
                age: 31,
                bio: 'Hei, jeg heter Nico',
                gender: 'Male',
                occupation: 'Student',
                interests: ['Fotball', 'Teknologi',],
                favoriteTeam: [],
                friendList: [],
            },

            {
                id: 1,
                isAdmin: true,
                email: 'rotta@mail.no',
                username: 'Rotta',
                password: '123',
                userImages: [""],
                name: 'Rotta',
                age: 27,
                bio: 'Hei, jeg heter Rotta',
                gender: 'Male',
                occupation: 'Rotte på heltid',
                interests: ['Dumpster diving, spille på slurva,'],
                favoriteTeam: [],
                friendList: [],
            },

        ],//Users
    },//Data

}//Model
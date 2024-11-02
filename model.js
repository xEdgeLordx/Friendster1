const appDiv = document.getElementById('app');

const model = {
    app: {
        pages: ['loginPage', 'feedPage', 'profilePage', 'friendPage',],
        currentPage: 'profilePage',
        isOpen: false,

        selectedUsers: {
            loggedInUser: 2,
            friendUser: 1,
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

        profilePage: {
            inputFriend: '',
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
                isAdmin: false,
                email: 'rotta@mail.no',
                username: 'Rotta',
                password: '123',
                userImages: ["Photos/Rotta/Screenshot 2024-11-02 09.44.24.png","Photos/Rotta/Screenshot 2024-11-02 09.46.17.png","Photos/Rotta/Screenshot 2024-11-02 09.46.01.png","Photos/Rotta/Screenshot 2024-11-02 09.45.21.png","Photos/Rotta/Screenshot 2024-11-02 09.44.56.png",],
                name: 'Rotten',
                age: 27,
                bio: 'Hei, jeg heter Rotta',
                gender: 'Male',
                occupation: 'Rotte på heltid',
                interests: ['Dumpster diving', 'spille på slurva',],
                favoriteTeam: [],
                friendList: [],
            },
            {
                id: 2,
                isAdmin: false,
                email: 'roerg@mail.no',
                username: 'Roger',
                password: '123',
                userImages: ["Photos/Roger/Screenshot 2024-11-02 09.42.52.png","Photos/Roger/Screenshot 2024-11-02 09.43.04.png","Photos/Roger/Screenshot 2024-11-02 09.43.18.png",],
                name: 'Roger',
                age: 27,
                bio: 'Hei, jeg heter Roger',
                gender: 'Male',
                occupation: 'Skureklut på heltid',
                interests: ['Øl', 'spille på slurva', 'Pizza'],
                favoriteTeam: [],
                friendList: ['Nico',],
            },

            {
                id: 3,
                isAdmin: false,
                email: 'Anna@mail.no',
                username: 'Anna1',
                password: '123',
                userImages: ["Photos/Anna/Anna1.png","Photos/Anna/anna2.png","Photos/Anna/anna3.png",],
                name: 'Anna',
                age: 27,
                bio: 'Hei, jeg heter Anna',
                gender: 'Female',
                occupation: 'Forfatter',
                interests: ['Pocketbøker', 'Stå på hodet',],
                favoriteTeam: [],
                friendList: [],
            },

        ],//Users
    },//Data

}//Model
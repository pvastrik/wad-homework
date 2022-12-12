import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
    strict: true,

    state: {
        userid: 0,

        postList: [
            {
                id: 1,
                profilePic: 'profile1.png',
                date: "Oct 22, 2022",
                bodyImage: "tartu.jpg",
                postImageAlt: "Tartu town square",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                likes: 1,
                dislikes: 0,
            },
          
            {
                id: 2,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "",
                postImageAlt: "",
                body: "Anyone knows in which room is the lab today?",
                likes: 12,
                dislikes: 1,
            },
          
            {
                id: 3,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "pärnu.jpg",
                postImageAlt: "Pärnu skyline",
                body: "Pärnu 2022",
                likes: 123,
                dislikes: 12,
            },
          
            {
                id: 4,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "",
                postImageAlt: "",
                body: "Tere, kallid sõbrad \n At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                likes: 1234,
                dislikes: 123,
            },
          
            {
                id: 5,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "tallinn.jpg",
                postImageAlt: "Tallinn skyline",
                body: "Hello from Tallinn!!!",
                likes: 12345,
                dislikes: 1234,
            },
          
            {
                id: 6,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "ylikool.jpg",
                postImageAlt: "Tartu University",
                body: "Start of a new school year ...",
                likes: 123456,
                dislikes: 12345,
            },
          
            {
                id: 7,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "",
                postImageAlt: "",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                likes: 12345,
                dislikes: 1234,
            },
          
            {
                id: 8,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "villjandi.jpg",
                postImageAlt: "Viljandi",
                body: "Heelllloooo",
                likes: 1234,
                dislikes: 123,
            },
          
            {
                id: 9,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "valga.jpg",
                postImageAlt: "Valga",
                body: "Beautiful view!! <3",
                likes: 123,
                dislikes: 12,
            },
          
            {
                id: 10,
                profilePic: "profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "narva.jpg",
                postImageAlt: "Narva",
                body: "Greetings from near the boarder",
                likes: 12,
                dislikes: 1,
            }
        
        
        
        ]
    },
    getters: {
        getUserId: (state) => {
            return state.userid;
        }
    },
    mutations: {
        increaseLikes: (state, id) => {
            state.postList.forEach(p => {
                if (id == p.id) {
                    p.likes += 1
                }
            })
        },

        decreaseLikes: (state, id) => {
            state.postList.forEach(p => {
                if (id == p.id) {
                    p.dislikes += 1
                }
            })
        },
        setUserId: (state, id) => {
            state.userid = id
        }
    },
    actions: {
        increaseLikesAction: (action, id) => {
            action.commit("increaseLikes", id)
        },

        decreaseLikesAction: (action, id) => {
            action.commit("decreaseLikes", id)
        },
        setUserAction: (action, id) => {
            action.commit("setUserId", id)
        }
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        })
    ]
})
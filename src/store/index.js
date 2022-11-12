import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: [
            {
                userId: 1,
                id: 1,
                profilePic: "/res/images/profile1.png",
                date: "Oct 22, 2022",
                bodyImage: "/res/images/tartu.jpg",
                postImageAlt: "Tartu town square",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                likes: 1,
            },
          
            {
              userId: 2,
              id: 2,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              postImageAlt: "",
              body: "Anyone knows in which room is the lab today?",
              likes: 12,
            },
          
            {
              userId: 3,
              id: 3,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/pärnu.jpg",
              postImageAlt: "Pärnu skyline",
              body: "Pärnu 2022",
              likes: 123,
            },
          
            {
              userId: 4,
              id: 4,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              postImageAlt: "",
              body: "Tere, kallid sõbrad <br> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
              likes: 1234,
            },
          
            {
              userId: 5,
              id: 5,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/tallinn.jpg",
              postImageAlt: "Tallinn skyline",
              body: "Hello from Tallinn!!!",
              likes: 12345,
            },
          
            {
              userId: 6,
              id: 6,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/tartu%20ülikool.jpg",
              postImageAlt: "Tartu University",
              body: "Start of a new school year ...",
              likes: 123456,
            },
          
            {
              userId: 7,
              id: 7,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              postImageAlt: "",
              body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
              likes: 12345,
            },
          
            {
              userId: 8,
              id: 8,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/villjandi.jpg",
              postImageAlt: "Viljandi",
              body: "Heelllloooo",
              likes: 1234,
            },
          
            {
              userId: 9,
              id: 9,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/valga.jpg",
              postImageAlt: "Valga",
              body: "Beautiful view!! <3",
              likes: 123,
            },
          
            {
              userId: 10,
              id: 10,
              profilePic: "/res/images/profile1.png",
              date: "Oct 22, 2022",
              bodyImage: "/res/images/narva.jpg",
              postImageAlt: "Narva",
              body: "Greetings from near the boarder",
              likes: 12,
            }
        
        
        
        ]
    },
    getters: {
        
    },
    mutations: {
        increaseLikes: state => {
            state.postList.forEach(p => {
                p.likes += 1
            })
        },

        decreaseLikes: state => {
            state.postList.forEach(p => {
                p.likes -= 1
            })
        }
    },
    actions: {
        increaseLikesAction: action => {
            setTimeout(function () {
                action.commit("increaseLikes")
            }, 1000)
        },

        decreaseLikesAction: action => {
            setTimeout(function () {
                action.commit("decreaseLikes")
            }, 1000)
        }
    }
})
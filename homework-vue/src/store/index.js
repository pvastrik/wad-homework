import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
    strict: true,

    state: {
        userid: 0,
    },
    getters: {
        getUserId: (state) => {
            return state.userid;
        }
    },
    mutations: {
        setUserId: (state, id) => {
            state.userid = id
        }
    },
    actions: {
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
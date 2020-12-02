import apiUrls from '../services/api-urls'
const authModule = {
    namespaced: true,
    state: () => ({
        token: null,
        user: null,
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        register({ commit }, { username, password1, password2 }) {
            return this.$axios.$post(apiUrls.auth.register, { username, password1, password2 })
                .then(({ token, user }) => {
                    commit('setToken', token);
                    commit('setUser', user);
                }).catch((err) => {
                    commit('setToken', null);
                    commit('setUser', null);
                    throw err;
                })
        },
        login({ commit }, { username, password }) {
            return this.$axios.$post(apiUrls.auth.login, { username, password })
                .then(({ user, token }) => {
                    commit('setToken', token);
                    commit('setUser', user);
                }).catch((err) => {
                    commit('setToken', null);
                    commit('setUser', null);
                    throw err;
                })
        },
        getCurrentUser({ commit }) {
            return this.$axios.$get(apiUrls.auth.getUser)
                .then(user => {
                    commit('setUser', user);
                    return user;
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setToken', null);
                })
        },
        logout({ commit }) {
            return this.$axios.$post(apiUrls.auth.logout)
                .then(() => {
                    commit('setUser', null);
                })
        }
    },
}
export default authModule;
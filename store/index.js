import Vuex from 'vuex'
import auth from './auth';
const createStore = () => {
    return new Vuex.Store({
        state: {
            breadcrumbs: []
        },
        mutations: {
            setBreadcrumbs(state, arr) {
                state.breadcrumbs = arr;
            }
        },
        modules: {
            auth
        }
    })
}

export default createStore
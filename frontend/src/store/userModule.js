import axios from "axios";

export const userModule = {
    state: () => ({
        users: [],
        user: {},
        isUserLoading: true,
        page: 1,
        limit: 10,
        totalPages: 0,
        selectedSort: "",
        searchQuery: "",
        sortOptions: [
            { value: "title", name: 'По название' },
            { value: "body", name: 'По содержимому' }
        ]
    }),
    getters: {
        sortUsers(state) {
            return [...state.users].sort((user1, user2) => user1[state.selectedSort]?.localeCompare(user2[state.selectedSort]))
        },
        sortedAndSearchedUsers(state, getters) {
            return getters.sortUsers.filter(user => user.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
        findUser(state) {
            return function (id) {
                return state.user = this.users.filter(u => u.id == id)
            }
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setLoading(state, bool) {
            state.isUserLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setLimit(state, limit) {
            state.limit = limit;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchUsers({ state, commit }) {
            try {
                commit('setLoading', true);
                const responce = await axios.get('/users')
                console.log(responce);

                commit('setUsers', responce.data)
                commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit))
            } catch (error) {
                alert("Error")
                console.log(error)
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}
import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: true,
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
        sortPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostLoading = bool;
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
        async fetchPosts({ state, commit }) {
            try {
                commit('setLoading', true);
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })

                commit('setPosts', responce.data)
                commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit))
            } catch (error) {
                alert("Error")
                console.log(error)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {

                commit('setPage', state.page + 1);
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })

                commit('setPosts', [...state.posts, ...responce.data])
                commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit))
            } catch (error) {
                alert("Error")
                console.log(error)
            }
        },
    },
    namespaced: true
}
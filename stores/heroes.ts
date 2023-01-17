export const useHeroesStore = defineStore('heroes', {
    state: () => {
        return {
            heroes: ref([]),
            test: ref('tested word')
        }
    },
    getters: {
        getHeroes: (state) => state.heroes,
    },
    actions: {
        async fetchHeroes() {
            try {
                // this.heroes = await useFetch("http://localhost:8000/api/heroes");

            } catch (error) {
                console.log(error)
            }
            // this.heroes = await useFetch("http://localhost:8000/api/heroes")
        },
        // setHeroes(context, heroes) {
        //     context.commit('SET_HEROES', heroes)
        // }
    },
});

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useHeroStore, import.meta.hot));
// }
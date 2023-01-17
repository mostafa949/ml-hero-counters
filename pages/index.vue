<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <!-- <h4>{{ heroes }}</h4> -->
          <v-combobox
            v-model="selectedHeroes"
            :items="heroes"
            item-title="name.en"
            item-value="id"
            label="I use a scoped slot"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :model-value="data.selected"
                :disabled="data.disabled"
                size="small"
                @click:close="data.parent.selectItem(data.item)"
              >
                <template v-slot:prepend>
                  <v-avatar left>
                    <v-img :src="data.item.value.image"></v-img>
                  </v-avatar>
                  <!-- <v-avatar class="bg-accent text-uppercase" start>{{
                    data.item.value.name.ar
                  }}</v-avatar> -->
                </template>
                {{ data.item.value.name.ar }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const heroesStore = useHeroesStore();
const selectedHeroes = ref([]);
const { data: heroes } = await useFetch("http://localhost:8000/api/heroes");
// const { heroes, test } = storeToRefs(heroesStore);
const { fetchHeroes } = heroesStore;
// onMounted(() => {
//   fetchHeroes();
// }),
console.log(heroes);
// const heroes = computed(() => {
//   return heroStore.test;
// });
</script>

<style lang="scss" scoped></style>

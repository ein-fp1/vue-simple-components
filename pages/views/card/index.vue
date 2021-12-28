<template>
  <div class="card-content">
    <a-card v-for="(item, index) in cardItems" :key="index">
      <template #header> {{ item.name }} </template>
      <template #body> {{ item.content }} </template>
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ACard from '~/components/ACard';

export default {
  name: 'index',
  components: { ACard },
  fetch() {
    this.$store.dispatch('card/fetchMainItems');
  },
  computed: {
    ...mapGetters('card', {
      cardItems: 'getCardItems',
    }),
  },
};
</script>
<style lang="scss" scoped>
.card-content {
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-basis: 100%;
}
</style>

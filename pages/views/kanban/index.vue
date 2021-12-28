<template>
  <section>
    <a-kanban />
  </section>
</template>

<script>
import AKanban from '~/components/AKanban';
export default {
  components: { AKanban },
  data() {
    return {
      kanbanIds: [0, 1, 2, 3],
      kanbans: {
        0: {
          kanbanId: 0,
          label: 'A',
          items: [],
          prevId: null,
          nextId: 1,
        },
        1: {
          kanbanId: 1,
          label: 'B',
          items: [],
          prevId: 0,
          nextId: 2,
        },
        2: {
          kanbanId: 2,
          label: 'C',
          items: [],
          prevId: 1,
          nextId: 3,
        },
        3: {
          kanbanId: 3,
          label: 'D',
          items: [],
          prevId: 2,
          nextId: null,
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  display: inline-flex;
  max-width: 1200px;
}
</style>

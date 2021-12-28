<template>
  <div class="kanban__container">
    <a-kanban-column
      v-for="(kanbanId, index) in kanbanIds"
      :key="index"
      :kanban-id="kanbanId"
      @click:add="handleAddClick"
    >
      <template #header> {{ kanbans[kanbanId].label }} </template>
      <template #body>
        <a-kanban-item
          v-for="(item, itemIndex) in kanbans[kanbanId].items"
          :key="itemIndex"
          :kanban-id="kanbanId"
          :label="item.label"
          :kanban-item-id="item.kanbanItemId"
          :prev-kanban-id="kanbans[kanbanId].prevId"
          :next-kanban-id="kanbans[kanbanId].nextId"
          @click:left="handleLeftClick"
          @click:right="handleRightClick"
        >
          {{ item.label }}
        </a-kanban-item>
      </template>
    </a-kanban-column>
  </div>
</template>

<script>
import AKanbanColumn from '~/components/AKanban/AKanbanColumn';
import AKanbanItem from '~/components/AKanban/AKanbanItem';
export default {
  name: 'AKanban',
  components: { AKanbanColumn, AKanbanItem },
  // TODO: 더미데이터는 Vuex 로 처리하고 외부에서 주입받을 것
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
  mounted() {},
  methods: {
    handleAddClick(kanbanId) {
      const label = window.prompt('추가할 아이템명을 입력해주세요');
      if (!label) {
        return;
      }
      this.kanbans[kanbanId].items.push({
        kanbanId,
        label,
        kanbanItemId: new Date().getTime().toString(),
      });
    },

    handleLeftClick({ kanbanId, label, kanbanItemId, prevKanbanId }) {
      this.moveKanbanItem(prevKanbanId, {
        kanbanId,
        label,
        kanbanItemId,
      });
      this.removeKanbanItem(kanbanId);
    },
    handleRightClick({ kanbanId, label, kanbanItemId, nextKanbanId }) {
      this.moveKanbanItem(nextKanbanId, {
        kanbanId,
        label,
        kanbanItemId,
      });
      this.removeKanbanItem(kanbanId);
    },
    moveKanbanItem(targetKanbanId, { kanbanId, label, kanbanItemId }) {
      this.kanbans[targetKanbanId].items.push({
        kanbanId,
        label,
        kanbanItemId,
      });
    },
    removeKanbanItem(kanbanId) {
      const itemIndex = this.kanbans[kanbanId].items.findIndex(
        (e) => e.kanbanItemId === kanbanId,
      );
      this.kanbans[kanbanId].items.splice(itemIndex, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.kanban__container {
  width: 100%;
  display: inline-flex;
  max-width: 1200px;
}
</style>

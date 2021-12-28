<template>
  <div class="kanban__item">
    <span>
      <button
        v-if="moving && prevKanbanId"
        class="kanban__button"
        @click="handleLeftClick"
      >
        〈
      </button>
    </span>
    <span>
      <slot />
    </span>
    <span>
      <button
        v-if="moving && nextKanbanId"
        class="kanban kanban__button"
        @click="handleRightClick"
      >
        〉
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AKanbanItem',
  props: {
    moving: {
      type: Boolean,
      default: true,
    },
    // TODO: Validation 필요
    kanbanId: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    kanbanItemId: {
      type: String,
      default: null,
    },
    prevKanbanId: {
      type: Number,
      default: null,
    },
    nextKanbanId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    getItemInfo() {
      return {
        kanbanId: this.kanbanId,
        label: this.label,
        kanbanItemId: this.kanbanItemId,
        prevKanbanId: this.prevKanbanId,
        nextKanbanId: this.nextKanbanId,
      };
    },
  },
  methods: {
    handleRightClick() {
      this.$emit('click:right', this.getItemInfo);
    },
    handleLeftClick() {
      this.$emit('click:left', this.getItemInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.kanban__item {
  display: flex;
  height: 20px;
  margin-top: 20px;
  background-color: #fff;
  width: 100%;
  align-items: center;
  flex-basis: 100%;
  justify-content: space-between;
  &:first-of-type {
    margin-top: 40px;
  }
}
</style>

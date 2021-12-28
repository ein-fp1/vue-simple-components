<template>
  <div class="kanban kanban__column">
    <div class="kanban kanban__header">
      <slot name="header" />
    </div>
    <div class="kanban kanban__body">
      <slot name="body" />
    </div>
    <div class="kanban kanban__button">
      <button @click="$emit('click:add', kanbanId)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AKanbanBase',
  props: {
    kanbanId: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.kanban {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cfcfcf;
  width: 100%;
  box-sizing: border-box;
  &__column {
    height: 500px;
    margin: 20px;
    padding: 0 10px;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  &__header {
    padding: 10px;
  }
  &__body {
    padding: 10px;
    overflow-y: scroll;
  }
  &__button {
    padding: 10px;
    button {
      width: 100%;
      appearance: none;
      padding: 0;
      border: none;
      background-color: #fff;
    }
  }
}
</style>

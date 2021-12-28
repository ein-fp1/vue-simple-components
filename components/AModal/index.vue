<template>
  <div class="modal">
    <div class="modal__activator">
      <slot name="activator"></slot>
    </div>
    <div v-if="active" class="modal__mask">
      <div class="modal__wrapper" @click.self="handleOutsideClick">
        <div class="modal__container">
          <div class="modal modal__header">
            <slot name="header" />
          </div>
          <div class="modal modal__body">
            <slot name="body" />
          </div>
          <div class="modal modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AModal',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleOutsideClick(e) {
      this.$emit('update:active', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__container {
    width: 500px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  &__header {
    color: red;
  }
  &__body {
    padding: 10px 0;
  }
  &__footer {
    justify-content: flex-end;
  }
}
</style>

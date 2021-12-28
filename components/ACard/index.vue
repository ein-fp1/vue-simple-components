<template>
  <div class="card card__container">
    <div class="card card__header">
      <slot name="header" />
    </div>
    <div class="card card__body">
      <slot name="body" />
    </div>
    <div class="card card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ACard',
  methods: {},
};
</script>

<style lang="scss" scoped>
$_CARD_CONTENT_PADDING: 10px;
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  &__container {
    margin: 10px;
  }
  &__header {
    background-color: #cfcfcf;
    padding: $_CARD_CONTENT_PADDING;
  }
  &__body {
    padding: $_CARD_CONTENT_PADDING;
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
}
</style>

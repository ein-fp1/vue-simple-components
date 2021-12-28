<template>
  <div class="modal-content">
    <a-modal :active.sync="modalActive">
      <template #activator>
        <button @click="modalActive = true">Activator</button>
      </template>
      <template #header><h1>HEADER</h1></template>
      <template #body>
        <p class="modal-body">test data1 <br />test data2</p>
      </template>
      <template #footer>
        <button @click="modalActive = false">confirm</button>
        <button @click="modalActive = false">close</button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import AModal from '~/components/AModal';
export default {
  name: 'index',
  components: { AModal },
  data() {
    return {
      modalActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-content {
    display: flex;
  }
  &-body {
    display: flex;
    color: blue;
  }
}
</style>

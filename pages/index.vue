<template>
  <div>
    Simple Components
    <ul>
      <li v-for="(item, index) in menus" :key="index">
        <nuxt-link :to="item.to">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  fetch() {},
  data() {
    return {
      menus: [
        {
          label: 'Card',
          to: '/views/card',
        },
        {
          label: 'Kanban',
          to: '/views/kanban',
        },
        {
          label: 'Modal',
          to: '/views/modal',
        },
      ],
    };
  },
};
</script>

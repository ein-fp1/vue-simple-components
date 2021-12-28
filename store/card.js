import Vue from 'vue';
const ADD_CARD_ITEM = 'ADD_CARD_ITEM';

export const state = () => ({
  cardItemMap: {},
  itemIds: [],
  currentItemId: null,
});

export const mutations = {
  [ADD_CARD_ITEM](state, payload) {
    Vue.set(state.cardItemMap, payload.id, payload);
    if (state.itemIds.includes(payload.id)) return;
    state.itemIds.push(payload.id);
  },
};

export const actions = {
  fetchMainItems({ commit }) {
    const data = [
      {
        id: '111',
        name: 'test1',
        content: 'test body 1',
      },
      {
        id: '112',
        name: 'test2',
        content: 'test body 2',
      },
    ];
    data.forEach((e) => {
      commit(ADD_CARD_ITEM, e);
    });
  },
};

export const getters = {
  getCurrentItemId: (state) => state.mainItemsMap[state.currentItemId],
  getCardItems: (state) => state.itemIds.map((e) => state.cardItemMap[e]),
};

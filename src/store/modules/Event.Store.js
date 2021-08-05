import Service from "../../services";

const state = {
  selectedEvent:null,
  eventListByCategory:null,
  selectedComment:null,
};

const getters = {};

const actions = {
  getEvent({ commit }, payload) {
    return Service.event.getEvent(payload).then((res) => {
      commit("SET_EVENT", res);
      return res;
    });
  },
  createComment({ commit }, payload){
    return Service.event.createComment(payload).then((res) => {
      commit("SET_COMMENT_EVENT", res);
      return res;
    });
  },
  createReply({ commit }, payload){
    return Service.event.createReply(payload).then((res) => {
      commit("SET_COMMENT_EVENT", res);
      return res;
    });
  },
  getEventByCategory({ commit }, payload){
    return Service.event.getEventByCategory(payload).then((res) => {
      commit("SET_EVENT_LIST_BY_CATEGORY", res);
      return res;
    });
  }
};

const mutations = {
  SET_EVENT(state, data) {
    state.selectedEvent = data; 
  },
  SET_EVENT_LIST_BY_CATEGORY(state, data) {
    state.eventListByCategory = data; 
  },
  SET_COMMENT_EVENT(state, data){
    state.selectedComment = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

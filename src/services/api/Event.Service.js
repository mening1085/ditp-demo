// import authService from "../authService";
import Service from "../Service";

const event = {
  getEvent(payload) {
    // return fetch("../../assets/json/data.json")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    return Service.get(`/api/events/${payload.id}`);
  },
  getEventByCategory(payload) {
    // return fetch("../../assets/json/data.json")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    return Service.get(`/api/get-event-by-category/${payload.category_id}`);
  },
  createComment(payload) {
    return Service.post(`/api/comment`,payload
      // ,{
      //   headers: { Authorization: `Bearer ${data.token}` },
      // }
    );
  },
  createReply(payload) {
    return Service.post(`/api/reply`,payload
      // ,{
      //   headers: { Authorization: `Bearer ${data.token}` },
      // }
    );
  }
};

export default event;

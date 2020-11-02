import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/orders";

export function getOrders() {
  return http.get(apiEndpoint);
}

export function updateOrder(order) {
  const body = { ...order };
  delete body._id;
  delete body.__v;
  return http.put(apiEndpoint + "/" + order._id, body);
}

export function saveOrder(order) {
  return http.post(apiEndpoint, order);
}

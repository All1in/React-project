import axios from 'axios'

export default class OrdersService {
  static async getOrders() {
    const response = await axios.get(`/api/orders`)
    return response.data
  }
}

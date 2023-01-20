import axios from 'axios'

export default class SlidesService {
  static async getSlides() {
    const response = await axios.get(`/api/slides`)
    return response.data
  }
}

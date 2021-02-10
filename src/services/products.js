import api from './apiConfig'

export const getPortfolio = async () => {
  try {
      const response = await api.get('/portfolio')
      return response.data
  } catch (error) {
      throw error
  }
}

// export const getPortfolio = async id => {
//   try {
//       const response = await api.get(`/portfolio/${id}`)
//       return response.data
//   } catch (error) {
//       throw error
//   }
// }



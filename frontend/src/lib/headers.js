import Cookies from 'js-cookie'
import { getToken } from './../lib/auth'
const csrftoken = Cookies.get('csrftoken')

export const headers = {
  common: {
    'X-CSRF-TOKEN': csrftoken
  },
  headers: { Authorization: `Bearer ${getToken()}` }
  
}

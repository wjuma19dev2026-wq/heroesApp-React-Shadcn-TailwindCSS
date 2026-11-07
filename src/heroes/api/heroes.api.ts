import { create } from 'axios'

export const heroesApi = create({
  baseURL: import.meta.env.VITE_API_URL,
})

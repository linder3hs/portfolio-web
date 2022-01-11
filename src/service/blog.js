import { BASE_URL } from "./config"

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogs`)

    const data = await response.json()

    return data
  } catch (error) {
    return error.message;
  }
}

import { BASE_URL } from "./config";

export const getWorks = async () => {
  try {
    const reponse = await fetch(`${BASE_URL}/works`)

    const data = reponse.json()

    return data
  } catch (error) {
    return error.message
  }
}

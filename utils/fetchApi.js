import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0e79c5e410msh36385af5767c4d9p157dd0jsn0424db08ea8c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}
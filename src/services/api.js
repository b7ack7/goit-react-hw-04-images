import axios from 'axios';

const API_KEY = "34312936-3db2b38440e9c869606467039";
const URL = "https://pixabay.com/api/";

export const fetchImg = async (searchQuery, page) => {
    const response = await axios.get(URL, {
        params: {
          key: API_KEY,
          q: searchQuery,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: "true",
          page: page,
          per_page: 12
        }
      });
      return response.data;
      
}
import axios from "axios";

const BASE_USL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'f3c0e02017msh5cd3619c66fcdabp1555b7jsn0aea369b5a2d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) =>{

    const { data } = await axios.get(`${BASE_USL}/${url}`,options);
    return data;
  }

  
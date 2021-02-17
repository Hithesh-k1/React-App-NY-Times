import axios from "axios";

export const getTopStories = async (section) => {
  try {
    console.log(section);
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchArticle = async (text) => {
  console.log(text);
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

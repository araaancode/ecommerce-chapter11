import axios from "axios";

export const resolvers = {
  Query: {
    getAllNews: async () => {
      try {
        const articles = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-22&sortBy=publishedAt&apiKey=9c34050547304ebfbd2d25ea7d5173ac");
        return articles.data.articles.map(({ title,description,author,urlToImage }) => ({
          id:new Date(),
          title,description,author,urlToImage
        }));
      } catch (error) {
        throw error;
      }
    },
    // getSingleNews: async (_, args) => {
    //   try {
    //     const article = await axios.get(
    //       `https://newsapi.org/v2/everything?q=tesla&from=2024-02-22&sortBy=publishedAt&apiKey=9c34050547304ebfbd2d25ea7d5173ac/${args.title}`
    //     );
    //     return {
    //       login: user.data.login,
    //       avatar_url: user.data.avatar_url,

    //       title:article.data.,
    //       description,
    //       author,
    //       urlToImage
    //     };
    //   } catch (error) {
    //     throw error;
    //   }
    // },
  },
};


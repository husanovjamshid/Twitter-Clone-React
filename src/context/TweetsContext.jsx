// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";

// export const TweetsContext = createContext();

// export const TweetsProvider = ({ children }) => {
//   //   const [Tweets, setTweets] = useState([]);

//   const { tweet } = useContext(UserContext);

//   const tweets = async () => {
//     const options1 = {
//       method: "GET",
//       url: "https://twitter135.p.rapidapi.com/UserTweetsAndReplies/",
//       params: { id: `${tweet}`, count: "40" },
//       headers: {
//         "X-RapidAPI-Key": "c5b09d4a95mshd8c0c09b37f311dp18bacejsna626f782db78",
//         "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
//       },
//     };
//     axios
//       .request(options1)
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     tweets();
//   }, []);

//   console.log(typeof tweet);

//   return <TweetsContext.Provider>{children}</TweetsContext.Provider>;
// };

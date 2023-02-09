import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      users: [],
    },
  ]);

  //   const { tweets, users } = user;
  let names = "khayotillo7";
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/Search/",
      params: { q: `${names}`, count: "20" },
      headers: {
        "X-RapidAPI-Key": "c5b09d4a95mshd8c0c09b37f311dp18bacejsna626f782db78",
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((data) => {
        if (data) {
          setUser({ users: data.data.globalObjects.users });
        //   console.log(data.data.globalObjects);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  //   console.log(user);

  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }

  return (
    <UserContext.Provider value={(user, setUser)}>
      {children}
    </UserContext.Provider>
  );
};

import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);


  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/UserByScreenName/",
      params: { username: "Abdukarim2002" },
      headers: {
        "X-RapidAPI-Key": "b00df49919mshe4d672a909f1614p12fcf6jsnbe0efce33fb9",
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response) {
          setUser(response.data.data.user.result.legacy);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

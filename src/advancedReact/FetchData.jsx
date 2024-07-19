import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [user, setUser] = useState({});

  const FetchingData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    FetchingData();
  }, []);



  return Object.keys(user).length>0 ? (
    <div>
        <h1>Hello Mr {user.results[0].name.first} aka {user.results[0].login.username} </h1>
        <img src={user.results[0].picture.large } alt="img" />
    </div>
  ) : (
    <h2>just wait</h2>
  ) 

  
  
};

export default FetchData;

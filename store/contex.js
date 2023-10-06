"use client";
import React, { useState } from "react";

const Context = React.createContext({
  signedUser: null,
  setSignedUser: (user) => {},
  activeChat: null,
  setActiveChat: (user) => {},
});

export const ContextProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [signedUser, setSignedUser] = useState({
    login: "ROOT-017",
    id: 78331614,
    node_id: "MDQ6VXNlcjc4MzMxNjE0",
    avatar_url: "https://avatars.githubusercontent.com/u/78331614?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ROOT-017",
    html_url: "https://github.com/ROOT-017",
    followers_url: "https://api.github.com/users/ROOT-017/followers",
    following_url:
      "https://api.github.com/users/ROOT-017/following{/other_user}",
    gists_url: "https://api.github.com/users/ROOT-017/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ROOT-017/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ROOT-017/subscriptions",
    organizations_url: "https://api.github.com/users/ROOT-017/orgs",
    repos_url: "https://api.github.com/users/ROOT-017/repos",
    events_url: "https://api.github.com/users/ROOT-017/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ROOT-017/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  });

  return (
    <Context.Provider
      value={{
        activeChat,
        setActiveChat,
        signedUser,
        setSignedUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

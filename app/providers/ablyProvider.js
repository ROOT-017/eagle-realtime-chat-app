"use client";
import { AblyProvider } from "ably/react";
import * as Ably from "ably";

const client = new Ably.Realtime.Promise({
  key: process.env.ABLY_API_KEY,
  clientId: "me",
  authUrl: "/api/ably",
});
const AblyWrapper = ({ children }) => {
  return <AblyProvider client={client}>{children}</AblyProvider>;
};

export default AblyWrapper;

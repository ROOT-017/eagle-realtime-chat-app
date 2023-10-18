import Ably from "ably/promises";

export async function GET(request) {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "me",
  });
  return Response.json(tokenRequestData);
}

import { FC } from "react";
import { serverClient } from "./_trpc/serverClient";

const Home: FC = async () => {
  const greeting = await serverClient.greeting();

  return <div>{greeting}</div>;
};

export default Home;

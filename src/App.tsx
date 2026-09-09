import { Suspense, useState } from "react";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Players from "./Components/Players";
import type { Player } from "./Types";

async function playerPromiseFetch(): Promise<Player[]> {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const [playerPromise] = useState(() => playerPromiseFetch());
  const [coin, setCoin] = useState(5000);
  const [coinHistory, setCoinHistory] = useState<
    {
      player: string;
      amount: number;
      type?: "purchase" | "refund";
    }[]
  >([]);

  return (
    <>
      <Nav coin={coin} coinHistory={coinHistory}></Nav>
      <Hero></Hero>

      <Suspense fallback={"Loading Players..."}>
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
          setCoinHistory={setCoinHistory}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;

import { use, useState } from "react";
import type { Player } from "../Types";
import AvailPlayers from "./AvailPlayers";
import SelecPlayer from "./SelecPlayer";
function Players({
  playerPromise,
  coin,
  setCoin,
  setCoinHistory,
}: {
  playerPromise: Promise<Player[]>;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  setCoinHistory: React.Dispatch<
    React.SetStateAction<
      {
        player: string;
        amount: number;
      }[]
    >
  >;
}) {
  const players = use(playerPromise);
  const [button, setButton] = useState("available");

  const handleBtn = (type: "available" | "selected") => {
    setButton(type);
  };
  const [selectedPlayer, setSelectedPlayer] = useState<Player[]>([]);

  return (
    <section>
      <div className="container mx-auto mt-20 flex justify-between">
        <div>
          {button === "available" ? (
            <h4 className="font-bold text-2xl">Available Players</h4>
          ) : (
            <h4 className="font-bold text-2xl">
              Selected Players ({selectedPlayer.length})
            </h4>
          )}
        </div>
        <div>
          <button
            onClick={() => handleBtn("available")}
            className={`border border-gray-300 px-4 py-1 rounded-l-[10px] ${button === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Availavle
          </button>
          <button
            onClick={() => handleBtn("selected")}
            className={`border border-gray-300 px-4 py-1 rounded-r-[10px] ${button === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected
          </button>
        </div>
      </div>

      {button === "available" ? (
        <AvailPlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setCoinHistory={setCoinHistory}
        ></AvailPlayers>
      ) : (
        <SelecPlayer
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
          setCoinHistory={setCoinHistory}
        ></SelecPlayer>
      )}
    </section>
  );
}

export default Players;

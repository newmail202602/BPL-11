import type { Player } from "../Types";
import PlayerCard from "./PlayerCard";

function AvailPlayers({
  players,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
  setCoinHistory,
}: {
  players: Player[];
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayer: Player[];
  setSelectedPlayer: React.Dispatch<React.SetStateAction<Player[]>>;
  setCoinHistory: React.Dispatch<
    React.SetStateAction<
      {
        player: string;
        amount: number;
      }[]
    >
  >;
}) {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setCoinHistory={setCoinHistory}
        />
      ))}
    </div>
  );
}

export default AvailPlayers;

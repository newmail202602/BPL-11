import { TbTrash } from "react-icons/tb";
import type { Player } from "../Types";
import { toast } from "react-toastify";

function SelecPlayer({
  selectedPlayer,
  setSelectedPlayer,
  setCoin,
  setCoinHistory,
}: {
  selectedPlayer: Player[];
  setSelectedPlayer: React.Dispatch<React.SetStateAction<Player[]>>;
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
}): import("react").JSX.Element {
  const handleRemovePlayer = (currentPlayer: Player) => {
    const restPlayers = selectedPlayer.filter(
      (player) => player.name !== currentPlayer.name,
    );

    setSelectedPlayer(restPlayers);
    setCoin((prev) => prev + currentPlayer.price);
    setCoinHistory((prev) => [
      ...prev,
      {
        player: currentPlayer.name,
        amount: currentPlayer.price,
        type: "purchase",
      },
    ]);

    toast.warn("player removed");
  };
  if (selectedPlayer.length === 0) {
    return (
      <>
        <h1
          className="font-bold text-3xl text-gray-400
     text-center my-10"
        >
          No Players Selected Yet
        </h1>
        <p
          className="font-bold text-gray-400
     text-center my-10"
        >
          Go For Selection to Availabe
        </p>
      </>
    );
  }

  return (
    <div className="container  mx-auto mt-10">
      {selectedPlayer.map((player: Player) => {
        return (
          <div className="flex justify-between rounded-2xl border border-gray-300 items-center p-2 mt-1">
            <div className="flex gap-3 items-center">
              <img
                className="h-20 w-30 overflow-hidden rounded-2xl"
                src={player.image}
              />

              <h3 className="font-bold text-2xl">{player.name}</h3>
              <p>
                <small> {player.role}</small>
              </p>
            </div>
            <div>
              <button
                onClick={() => handleRemovePlayer(player)}
                className="text-red-500"
              >
                <TbTrash></TbTrash>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelecPlayer;

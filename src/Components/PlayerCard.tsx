import { FaFlag, FaUserCircle } from "react-icons/fa";
import type { Player } from "../Types";
// import { useState } from "react";
import { toast } from "react-toastify";

function PlayerCard({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
  setCoinHistory,
}: {
  player: Player;
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
  // const [choosed, setChooser] = useState(false);
  const choosed = selectedPlayer.some((selected) => selected.id === player.id);
  const handleSelectedPlayer = () => {
    // setChooser(true);
    const coinLeft = coin - player.price;
    if (coinLeft < 0) {
      toast.error("Insufficient Coin", { position: "top-center" });
    } else {
      toast.success(`${player.name} is purchased succesfully`, {
        position: "top-center",
      });
      setCoin(coinLeft);
      setSelectedPlayer([...selectedPlayer, player]);
      setCoinHistory((prev) => [
        ...prev,
        {
          player: player.name,
          amount: player.price,
          type: "refund",
        },
      ]);
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <figure className="relative h-72 overflow-hidden bg-base-200">
        <img
          src={player.image}
          alt={player.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Role */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-content shadow-lg text-gray-200">
            {player.role}
          </span>
        </div>

        {/* Jersey Number */}
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-lg font-bold text-white backdrop-blur-sm">
          #{player.jerseyNumber}
        </div>
      </figure>

      {/* Content */}
      <div className="card-body px-6 py-5">
        {/* Name & Country */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <FaUserCircle className="text-primary" />
            {player.name}
          </h2>

          <p className="mt-1 flex items-center gap-2 text-sm text-base-content/60">
            <FaFlag />
            {player.country}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-1.5">
          <div className="rounded-lg bg-base-200 px-2 py-3 text-center">
            <p className="text-xs text-base-content/60">Age</p>
            <p className="font-semibold">{player.age}</p>
          </div>

          <div className="rounded-lg bg-base-200 px-2 py-3 text-center">
            <p className="text-xs text-base-content/60">Matches</p>
            <p className="font-semibold">{player.matches}</p>
          </div>

          <div className="rounded-lg bg-base-200 px-2 py-3 text-center">
            <p className="text-xs text-base-content/60">Runs</p>
            <p className="font-semibold">{player.runs}</p>
          </div>

          <div className="rounded-lg bg-base-200 px-2 py-3 text-center">
            <p className="text-xs text-base-content/60">Wickets</p>
            <p className="font-semibold">{player.wickets}</p>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-6 text-base-content/70">
          {player.description}
        </p>

        {/* Price & Button */}
        <div className="mt-1 flex justify-between border-t border-base-300 pt-4 ">
          <div>
            <p className="text-xs text-base-content/50">Price</p>

            <p className="text-lg font-bold text-primary">
              ${player.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={handleSelectedPlayer}
            disabled={choosed}
            className={`btn rounded-xl  px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              choosed
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {choosed === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;

import { useState } from "react";

type CoinHistory = {
  player: string;
  amount: number;
  type?: "purchase" | "refund";
};

function Nav({
  coin,
  coinHistory,
}: {
  coin: number;
  coinHistory: CoinHistory[];
}) {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto flex items-center justify-between py-5">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" />

          {/* Menu */}
          <ul className="flex items-center gap-12 text-gray-400">
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Fixture</a>
            </li>

            <li>
              <a href="">Teams</a>
            </li>

            <li>
              <a href="">Schedules</a>
            </li>

            {/* Coin Button */}
            <li className="text-black">
              <button
                onClick={() => setShowHistory(true)}
                className="rounded-xl border border-gray-200 px-3 py-1.5 font-bold"
              >
                {coin} Coin 🪙
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Coin History Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black">Coin History</h2>

              <button
                onClick={() => setShowHistory(false)}
                className="text-2xl text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* History List */}
            {coinHistory.length === 0 ? (
              <div className="py-10 text-center text-gray-400">
                <p>No purchase history yet.</p>
              </div>
            ) : (
              <div className="max-h-80 space-y-3 overflow-y-auto">
                {coinHistory.map((history, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-gray-100 p-4"
                  >
                    {/* Player Info */}
                    <div>
                      <h3 className="font-bold text-black">{history.player}</h3>

                      <p className="text-sm text-gray-500">
                        {history.type === "purchase"
                          ? "Player removed"
                          : "Player purchased"}
                      </p>
                    </div>

                    {/* Coin Amount */}
                    <p
                      className={`font-bold ${
                        history.type === "purchase"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {history.type === "purchase" ? "-" : "+"}
                      {history.amount.toLocaleString()} 🪙
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setShowHistory(false)}
              className="mt-5 w-full rounded-xl bg-black py-2 font-bold text-white hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;

import { useState } from "react";

export default function FlightCard() {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    if (!from || !to || !departureDate) {
      alert("Remplis les champs obligatoires");
      return;
    }

    const baseUrl = "https://aviasales.tp.st/TONLIEN";

    const url = `${baseUrl}?origin=${from}&destination=${to}&departure=${departureDate}&return=${returnDate}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
      
      {/* TYPE */}
      <div className="flex gap-2">
        <button
          onClick={() => setTripType("oneway")}
          className={`px-4 py-2 rounded-lg ${
            tripType === "oneway" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Aller simple
        </button>

        <button
          onClick={() => setTripType("round")}
          className={`px-4 py-2 rounded-lg ${
            tripType === "round" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Aller-retour
        </button>
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Départ (PAR)"
          value={from}
          onChange={(e) => setFrom(e.target.value.toUpperCase())}
          className="border p-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Destination (NYC)"
          value={to}
          onChange={(e) => setTo(e.target.value.toUpperCase())}
          className="border p-2 rounded-lg"
        />

        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="border p-2 rounded-lg"
        />

        {tripType === "round" && (
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border p-2 rounded-lg"
          />
        )}
      </div>

      {/* BOUTON */}
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Rechercher
      </button>
    </div>
  );
}

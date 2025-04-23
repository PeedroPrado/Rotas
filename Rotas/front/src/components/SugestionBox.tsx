import NumberBall from "./NumberBall";
import { useSuggestion } from "../context/SuggestionContext";

export default function SuggestionBox() {
  const { current, generateNewSuggestion } = useSuggestion();

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Palpite para a Mega-sena</h2>
      <div className="flex flex-wrap justify-center mb-4">
        {current.map((num, index) => (
          <NumberBall key={index} number={num} />
        ))}
      </div>
      <button
        onClick={generateNewSuggestion}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Nova sugestão
      </button>
    </div>
  );
}

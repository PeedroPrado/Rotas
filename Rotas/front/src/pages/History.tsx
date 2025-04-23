import { useSuggestion } from "../context/SuggestionContext";
import NumberBall from "../components/NumberBall";

export default function Historico() {
  const { suggestions } = useSuggestion();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Palpites</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-6 gap-4 justify-items-center">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="col-span-6 flex justify-center flex-wrap">
            {suggestion.map((num, i) => (
              <NumberBall key={i} number={num} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface NumberBallProps {
  number: number;
}

export default function NumberBall({ number }: NumberBallProps) {
  return (
    <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold m-1">
      {number}
    </div>
  );
}

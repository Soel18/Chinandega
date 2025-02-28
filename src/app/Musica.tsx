import { useState, useRef } from "react";

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <audio ref={audioRef}>
        <source src="https://youtu.be/Pn8MLTQlTnk?si=ecqS0TGDxnCzbrA4" type="audio/mp3" />
      </audio>
      <button
        onClick={togglePlay}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        {isPlaying ? "Pausar Música" : "Reproducir Música"}
      </button>
    </div>
  );
}

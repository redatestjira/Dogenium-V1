import React, { useState, useEffect, useCallback } from 'react';
import { Dog, Star } from 'lucide-react';

interface GameProps {
  onScore: (score: number) => void;
}

export function Game({ onScore }: GameProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [coins, setCoins] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const spawnCoin = useCallback(() => {
    const newCoin = {
      x: Math.random() * 90,
      y: Math.random() * 90,
      id: Date.now(),
    };
    setCoins(prev => [...prev, newCoin]);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(spawnCoin, 2000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, spawnCoin]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const step = 5;
    setPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;

      switch (e.key) {
        case 'ArrowUp':
          newY = Math.max(0, prev.y - step);
          break;
        case 'ArrowDown':
          newY = Math.min(90, prev.y + step);
          break;
        case 'ArrowLeft':
          newX = Math.max(0, prev.x - step);
          break;
        case 'ArrowRight':
          newX = Math.min(90, prev.x + step);
          break;
      }

      return { x: newX, y: newY };
    });
  }, []);

  useEffect(() => {
    if (gameStarted) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [gameStarted, handleKeyDown]);

  useEffect(() => {
    coins.forEach(coin => {
      const distance = Math.sqrt(
        Math.pow(position.x - coin.x, 2) + Math.pow(position.y - coin.y, 2)
      );
      if (distance < 10) {
        setCoins(prev => prev.filter(c => c.id !== coin.id));
        setScore(prev => prev + 1);
        onScore(1);
      }
    });
  }, [position, coins, onScore]);

  if (!gameStarted) {
    return (
      <div className="bg-gradient-to-br from-red-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm text-center border border-red-500/20">
        <h3 className="text-2xl font-bold mb-4">Ready to Mine on Mars?</h3>
        <p className="mb-6 text-gray-300">Guide your Space Doge with arrow keys to collect Dogenium!</p>
        <button
          onClick={() => setGameStarted(true)}
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
        >
          Start Mining
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-900/30 to-purple-900/30 p-4 rounded-2xl backdrop-blur-sm relative h-[500px] border border-red-500/20">
      <div className="absolute top-4 right-4 bg-red-500/20 px-4 py-2 rounded-full">
        Score: {score}
      </div>
      
      <div
        className="absolute transition-all duration-100"
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
      >
        <Dog className="text-red-400 -ml-4 -mt-4 transform -rotate-12" size={32} />
      </div>

      {coins.map(coin => (
        <div
          key={coin.id}
          className="absolute"
          style={{ left: `${coin.x}%`, top: `${coin.y}%` }}
        >
          <Star className="text-orange-400 animate-pulse -ml-3 -mt-3" size={24} />
        </div>
      ))}
    </div>
  );
}
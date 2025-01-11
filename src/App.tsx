import React from 'react';
import { Whitepaper } from './pages/Whitepaper';
import Roadmap from './pages/Roadmap';

function App() {
  const [showWhitepaper, setShowWhitepaper] = React.useState(false);

  if (showWhitepaper) {
    return <Whitepaper />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="stars absolute inset-0"></div>
        </div>
        <div className="relative z-10">
          <div className="animate-float mb-8">
            <img src="https://zupimages.net/up/25/02/kkut.png" alt="Dogenium Logo" className="w-32 h-32 mx-auto" />
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
            DOGENIUM
          </h1>
          <p className="text-2xl mb-4 text-red-400">$DGM</p>
          <p className="text-xl mb-8 text-gray-300">"Where AI Meets Memes in the Crypto Galaxy!"</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://pump.fun/coin/9uyaVXy4a8Z994FK4YaN4dTekr8Gw25QJtPJ1JkXpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105"
            >
              Buy DGM
            </a>
            <button 
              onClick={() => setShowWhitepaper(true)}
              className="border-2 border-red-500 hover:bg-red-500/10 text-red-400 font-bold py-4 px-10 rounded-full transition transform hover:scale-105"
            >
              Read Whitepaper
            </button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">The Meme Coin of the Future! 🚀</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          DOGENIUM is a revolutionary meme coin blending artificial intelligence with the boundless creativity of memes. Powered by AI and supported by a passionate community, we're charting a course to the Moon—and beyond!
        </p>
      </section>

      {/* Token Information Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Token Details */}
          <div className="bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20">
            <h2 className="text-3xl font-bold mb-6">Token Details</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between">
                <span className="text-gray-300">Name:</span>
                <span className="font-semibold">DOGENIUM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Ticker:</span>
                <span className="font-semibold">DGM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Blockchain:</span>
                <span className="font-semibold">Solana (SOL)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Total Supply:</span>
                <span className="font-semibold">1 Billion DGM</span>
              </li>
            </ul>
          </div>

          {/* Token Distribution */}
          <div className="bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20">
            <h2 className="text-3xl font-bold mb-6">Token Distribution</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between">
                <span className="text-gray-300">Community Rewards:</span>
                <span className="font-semibold">70%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Liquidity Pool:</span>
                <span className="font-semibold">20%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Development and Marketing:</span>
                <span className="font-semibold">10%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="group">
            <img 
              src="https://zupimages.net/up/25/02/kkut.png" 
              alt="Dogenium Logo" 
              className="w-6 h-6 opacity-70 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-300" 
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="https://zupimages.net/up/25/02/kkut.png" alt="Dogenium Logo" className="w-6 h-6" />
          <p>© 2024 DOGENIUM (DGM). To Mars and Beyond! 🚀</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

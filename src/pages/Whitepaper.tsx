import React from 'react';

interface WhitepaperProps {
  onBack: () => void;
}

export function Whitepaper({ onBack }: WhitepaperProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <button
          href="https://dogenium.netlify.app/"
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
        >
          ← Back to Home
        </button>
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">DOGENIUM (DGM) Whitepaper</h1>
          
          <h2 className="text-3xl font-bold mt-12 mb-6">Abstract</h2>
          <p className="text-gray-300 mb-8">
            DOGENIUM (DGM) is a revolutionary meme coin that merges the power of artificial intelligence with the boundless creativity of internet culture. Positioned as the next-generation cryptocurrency for entertainment, community building, and innovation, DOGENIUM aims to leverage its meme-driven narrative and AI integration to capture the attention of both crypto enthusiasts and casual participants alike.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Introduction</h2>
          <h3 className="text-2xl font-bold mb-4">What is DOGENIUM?</h3>
          <p className="text-gray-300 mb-6">
            DOGENIUM is a meme coin designed to be fun, engaging, and future-forward. By blending advanced AI capabilities with a passionate online community, DOGENIUM creates a dynamic ecosystem where users can generate memes, participate in rewarding activities, and enjoy the benefits of a decentralized token economy.
          </p>

          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 mb-6">
            To be the leading meme coin that not only entertains but also empowers its community with innovative features and sustainable tokenomics.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tokenomics</h2>
          <div className="bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Token Details</h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li><strong>Name:</strong> DOGENIUM</li>
              <li><strong>Ticker:</strong> DGM</li>
              <li><strong>Blockchain:</strong> Solana (SOL)</li>
              <li><strong>Total Supply:</strong> 1 Billion DGM</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Token Distribution</h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li><strong>70%:</strong> Community Rewards and Airdrops</li>
              <li><strong>20%:</strong> Liquidity Pool</li>
              <li><strong>10%:</strong> Development and Marketing</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Features and Utilities</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-2xl font-bold mb-2">1. AI-Powered Meme Generator</h3>
              <p>DOGENIUM will launch a platform where users can create hilarious, viral-worthy memes using AI algorithms. Token holders will gain access to exclusive features and content.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">2. Community Engagement</h3>
              <p>Holders can participate in meme contests with DGM rewards, vote on future developments, and join exclusive events.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">3. Staking and Rewards</h3>
              <p>Users can stake their DGM to earn additional tokens or rewards in the ecosystem.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Legal Disclaimer</h2>
          <p className="text-gray-300 mb-8">
            Cryptocurrencies involve a high degree of risk. DOGENIUM is a meme coin and should not be considered a financial investment. Please do your research and only invest what you can afford to lose.
          </p>

          <div className="border-t border-red-500/20 mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-4">Contact and Community</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>Website: <a href="https://dogenium.netlify.app/" className="text-red-400 hover:text-red-300">DOGENIUM</a></li>
              <li>Twitter: <a href="#" className="text-red-400 hover:text-red-300">#</a></li>
              <li>Telegram: <a href="#" className="text-red-400 hover:text-red-300">#</a></li>
              <li>Discord: <a href="#" className="text-red-400 hover:text-red-300">#</a></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

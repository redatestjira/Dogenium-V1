import React from 'react';
import { Map } from 'lucide-react';

interface RoadmapProps {
  onBack: () => void;
}

export default function Roadmap({ onBack }: RoadmapProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
        >
          ← Back to Home
        </button>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <Map className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl font-bold">
              DOGENIUM Roadmap
            </h1>
          </div>
          
          <div className="space-y-12">
            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Phase 1: Launch (Completed)</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Website Creation: Launch https://dogenium.netlify.app/ as the central hub for DOGENIUM.
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Coin Creation: Deploy the $DGM token on the Solana blockchain.
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Initial Community Building
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Phase 2: Build the Ecosystem</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Wallet Integration: Enable users to connect their Solana wallet to the website.</li>
                <li>• Game Launch: Create and add a simple space-themed game where players can use $DGM tokens to play and earn rewards.</li>
                <li>• Leaderboard: Add a basic leaderboard to track scores and showcase monthly winners, $DGM rewards every month.</li>
                <li>• Partnership Development</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Phase 3: Grow the Community</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Community Engagement: Promote DOGENIUM on social media and host small giveaways and competitions to attract users.</li>
                <li>• Token Listings: List $DGM on decentralized exchanges (DEXs) for trading.</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-400 pl-6">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Phase 4: Expand Features</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Staking: Allow $DGM holders to earn rewards by staking tokens.</li>
                <li>• NFT Integration: Introduce space-themed NFTs for additional game perks.</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-400 pl-6">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Summary</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Focus on the basics: a working token, wallet connection, and a simple game.</li>
                <li>• Gradually add features like staking, NFTs, and token listings as the project grows.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Roadmap() {
  return (
    <div className="min-h-screen space-background">
      <div className="relative">
        <Link 
          to="/" 
          className="absolute top-4 left-4 text-white hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>
        <div className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl">
            <div className="p-6">
              <div className="flex items-center mb-8">
                <Map className="w-8 h-8 text-purple-300 mr-3" />
                <h1 className="text-3xl font-bold text-white">
                  DOGENIUM Coin ($DGM) Roadmap
                </h1>
              </div>
              
              <div className="space-y-12">
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Phase 1: Launch (Completed)</h3>
                  <ul className="space-y-3 text-gray-200 text-lg">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Website Creation: Launch dogenium.netlify.app
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Deploy $DGM token on Solana blockchain
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">Phase 2: Build the Ecosystem</h3>
                  <ul className="space-y-3 text-gray-200 text-lg">
                    <li>• Wallet Integration (Phantom, Solflare)</li>
                    <li>• Space-themed Game Launch</li>
                    <li>• Leaderboard Implementation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">Phase 3: Grow the Community</h3>
                  <ul className="space-y-3 text-gray-200 text-lg">
                    <li>• Social Media Promotion</li>
                    <li>• Community Giveaways</li>
                    <li>• DEX Listings (Raydium)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">Phase 4: Expand Features</h3>
                  <ul className="space-y-3 text-gray-200 text-lg">
                    <li>• Token Staking Implementation</li>
                    <li>• Space-themed NFT Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
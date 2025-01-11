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
                  Website Launch
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Token Deployment on Solana
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Initial Community Building
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Phase 2: Growth</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Community Expansion</li>
                <li>• Marketing Campaigns</li>
                <li>• DEX Listings</li>
                <li>• Partnership Development</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Phase 3: Utility</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Launch DGM Staking</li>
                <li>• NFT Integration</li>
                <li>• Governance Implementation</li>
                <li>• Community DAO</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-400 pl-6">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Phase 4: Expansion</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Cross-chain Integration</li>
                <li>• Mobile App Development</li>
                <li>• Major Exchange Listings</li>
                <li>• Global Marketing Campaign</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
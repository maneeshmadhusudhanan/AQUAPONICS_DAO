🌿 Aquaponics DAO Frontend
A fully decentralized, governance-enabled frontend built with React.js, Vite, Tailwind CSS, and Ethers.js, enabling users to interact with Aquaponics DAO smart contracts on the Ethereum Sepolia network.

📚 Table of Contents
🧱 Tech Stack

📁 Project Structure

⚙️ Installation & Setup

🔐 Wallet Integration

🧠 Pages Overview

🔗 Smart Contract Interaction

🧪 Example: Read GT Token Balance

📦 Reusable Components

🌐 GT Token on Uniswap

🚀 Deployment (Optional)

📈 Future Improvements

🧱 Tech Stack
Layer	Technology
Frontend Framework	React.js (Vite)
Wallet Integration	RainbowKit + Wagmi + Metamask
Blockchain API	Ethers.js
Styling	Tailwind CSS
Network	Ethereum Sepolia
Contracts	GovToken, MyGovernor, TimeLock, Aquaponics

📁 Project Structure
plaintext
Copy
Edit
aquaponics-dao-frontend/
├── public/                   # Static assets
├── src/
│   ├── assets/              # Images, logos
│   ├── components/          # Reusable UI components
│   ├── pages/               # Route-level views
│   ├── contracts/           # Contract ABIs & addresses
│   ├── hooks/               # Wallet/contract interaction logic
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Routing setup
│   ├── main.tsx             # App entry point
│   └── index.css            # Tailwind styles
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Project metadata & scripts
⚙️ Installation & Setup
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/aquaponics-dao-frontend
cd aquaponics-dao-frontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Initialize Tailwind CSS
bash
Copy
Edit
npx tailwindcss init -p
Update tailwind.config.js:

js
Copy
Edit
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
🔐 Wallet Integration
We use Wagmi + RainbowKit to support MetaMask and other EVM-compatible wallets.

Setup in main.tsx:
tsx
Copy
Edit
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import App from './App';

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);
const { connectors } = getDefaultWallets({ appName: 'Aquaponics DAO', chains });

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

<WagmiConfig config={config}>
  <RainbowKitProvider chains={chains}>
    <App />
  </RainbowKitProvider>
</WagmiConfig>
🧠 Pages Overview
🏠 Home
DAO Introduction

Uniswap GT Token Purchase Link

Sensor Data (mocked)

📊 Dashboard
GT token balance

Voting power

Participation history

📜 Proposals
Fetch all proposals from MyGovernor

Show title, description, status (Active, Executed, etc.)

Vote buttons (Yes/No)

Execute button if quorum met

➕ Create Proposal
Form for submitting aquaponics-based actions

Encodes actions into proposal using MyGovernor.propose()

🔗 Smart Contract Interaction
All smart contract interactions are handled using Ethers.js.

src/contracts/addresses.ts
ts
Copy
Edit
export const CONTRACTS = {
  govToken: "0x63d0681983754be098f19759202a6bc609cfe225",
  governor: "0xYourGovernorAddress",
  aquaponics: "0xYourAquaponicsAddress",
  timelock: "0xYourTimelockAddress"
}
ABIs:
Store JSON ABI files in src/contracts/:

GovTokenABI.json

GovernorABI.json

AquaponicsABI.json

🧪 Example: Read GT Token Balance
ts
Copy
Edit
import { ethers } from "ethers";
import GovTokenABI from "../contracts/GovTokenABI.json";
import { CONTRACTS } from "../contracts/addresses";

export const getGTBalance = async (walletAddress: string, provider: ethers.Provider) => {
  const contract = new ethers.Contract(CONTRACTS.govToken, GovTokenABI, provider);
  const balance = await contract.balanceOf(walletAddress);
  return ethers.utils.formatEther(balance);
};
📦 Reusable Components
📄 components/ProposalCard.tsx
tsx
Copy
Edit
export default function ProposalCard({ title, description, state, onVote }: any) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 text-sm text-blue-600">Status: {state}</p>
      <div className="mt-4 space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-xl" onClick={() => onVote(true)}>Vote Yes</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-xl" onClick={() => onVote(false)}>Vote No</button>
      </div>
    </div>
  );
}
🌐 GT Token on Uniswap
tsx
Copy
Edit
<a
  href="https://app.uniswap.org/explore/tokens/ethereum_sepolia/0x63d0681983754be098f19759202a6bc609cfe225"
  target="_blank"
  className="text-blue-600 underline hover:text-blue-800"
>
  Buy GT on Uniswap
</a>
🚀 Deployment (Optional)
To deploy your Vite frontend:

bash
Copy
Edit
npm run build
npm run preview
Then, host the contents of dist/ using Vercel, Netlify, or IPFS.

📈 Future Improvements
🔌 Integrate live IoT sensor data (via IPFS or APIs)

🔔 Add notification system for proposal voting/execution

📊 Add proposal and token interaction charts

🧱 Add Role-based UI (admin / participant)

👨‍💻 Contributors
Maneesh – Full Stack Web3 Developer

📄 License
This project is licensed under the MIT License.
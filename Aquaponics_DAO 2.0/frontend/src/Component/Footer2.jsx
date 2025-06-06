import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-16 backdrop-blur-md shadow-inner border-t border-green-500/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* DAO Identity */}
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 drop-shadow-lg">
            Aquaponics DAO
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Decentralized Aquaponics Governance using IoT and Ethereum. <br />
            Empowering communities to manage sustainable food systems.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 underline decoration-green-400">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="/governance" className="hover:text-green-400 transition-colors">Governance</a></li>
            <li><a href="/proposals" className="hover:text-green-400 transition-colors">Proposals</a></li>
            <li><a href="/treasury" className="hover:text-green-400 transition-colors">Treasury</a></li>
          </ul>
        </div>

        {/* Community + Tech */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 underline decoration-teal-400">Community</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://discord.gg/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaDiscord />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-100 transition-colors">
              <FaGithub />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <FaTwitter />
            </a>
          </div>
          <h3 className="text-xl font-semibold text-white mt-8 mb-4 underline decoration-teal-400">Tech Stack</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Solidity • Hardhat • OpenZeppelin</li>
            <li>React.js • Ethers.js • TailwindCSS</li>
            <li>ESP32 • IPFS • IoT Sensors</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 underline decoration-pink-400">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/privacy-policy" className="hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-pink-400 transition-colors">Terms of Service</a></li>
            <li><a href="/disclaimer" className="hover:text-pink-400 transition-colors">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-700/50" />

      <div className="text-center text-sm text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Aquaponics DAO</span> — Empowering Decentralized Sustainability.
        All rights reserved.
      </div>
    </motion.footer>
  );
}

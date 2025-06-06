import { Routes, Route } from 'react-router-dom';
import GovernanceNavbar from '../../Component/Navbar2'
import Home from '../Governance/Home'
import Proposal from './Proposal';
import AddProposal from './AddProposal';

const GovernanceApp = () => {
  return (
    <div className='w-screen h-screen'>
      <GovernanceNavbar /> 
      <div className='bg-gray-100 w-screen h-screen pt-[3%]'>
      <Routes >
        <Route path="/" element={<Home />} /> 
        <Route path="/proposals" element={<Proposal />} />
        <Route path='/addproposal' element={<AddProposal />} />
      </Routes>
      </div>
    </div>
  );
};

export default GovernanceApp;
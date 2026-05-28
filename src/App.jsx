import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import AuditorServices from './pages/AuditorServices'
import RelatedAuditorServices from './pages/RelatedAuditorServices'
import AccountingServices from './pages/AccountingServices'
import IncomeExpense from './pages/IncomeExpense'
import FinancialExpertise from './pages/FinancialExpertise'
import ValuationServices from './pages/ValuationServices'
import PublicProcurement from './pages/PublicProcurement'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/auditor" element={<AuditorServices />} />
        <Route path="/services/related-auditor" element={<RelatedAuditorServices />} />
        <Route path="/services/accounting" element={<AccountingServices />} />
        <Route path="/services/income-expense" element={<IncomeExpense />} />
        <Route path="/services/financial-expertise" element={<FinancialExpertise />} />
        <Route path="/services/valuation" element={<ValuationServices />} />
        <Route path="/services/procurement" element={<PublicProcurement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

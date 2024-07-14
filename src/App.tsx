import { Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import MembersPage from "./pages/MembersPage";
import MachinePage from "./pages/MachinePage";
import CropsPage from "./pages/CropsPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/team" element={<Layout><MembersPage /></Layout>} />
      <Route path="/equipment" element={<Layout><MachinePage /></Layout>} />
      <Route path="/crops" element={<Layout><CropsPage /></Layout>} />
    </Routes>
  )
}

export default App
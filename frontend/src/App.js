import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <div className="App min-h-screen bg-[#0A0A0A]">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#EDEDED',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          },
        }}
      />
    </div>
  );
}

export default App;

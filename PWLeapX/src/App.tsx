import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import Projects from './pages/Projects';
import ServicesDetails from './components/SevicesDetails'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="min-h-screen bg-[#FFF5D8]">

      <Toaster position="bottom-right"
        toastOptions={{
          success: {
            style: {
              border: "2px solid green",
              padding: "16px",
              color: "green",
            },
            iconTheme: {
              primary: "green",
              secondary: "#e0ffe0",
            },
          },
        }} 
        />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/services-details" element={<ServicesDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
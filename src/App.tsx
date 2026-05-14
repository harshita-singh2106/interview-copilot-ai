import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
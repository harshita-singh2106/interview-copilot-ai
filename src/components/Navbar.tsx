function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>Interview Copilot AI 🚀</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}

export default Navbar;
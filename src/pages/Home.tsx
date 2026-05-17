function Home() {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "100px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Crack Interviews with AI 🚀
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
          color: "#aaa",
        }}
      >
        Practice interviews, get AI feedback, and improve fast.
      </p>

      <button
        style={{
          marginTop: "35px",
          padding: "14px 30px",
          border: "none",
          borderRadius: "12px",
          background: "cyan",
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h2>🤖 AI Mock Interviews</h2>
          <p>Practice with smart AI interviewers.</p>
        </div>

        <div
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h2>📊 Feedback Reports</h2>
          <p>Get instant performance analysis.</p>
        </div>

        <div
          style={{
            background: "#111",
            padding: "25px",
            borderRadius: "15px",
            width: "250px",
          }}
        >
          <h2>🚀 Resume Tips</h2>
          <p>Improve resume with AI suggestions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
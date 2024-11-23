const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img src="logo-1.svg" alt="b-capital" className="w-32" />
      <span className="text-black">AI Chatbot</span>
    </div>
  );
};

export default Logo;

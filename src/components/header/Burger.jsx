function Burger({ onClick }) {
  return (
    <button className="burger" onClick={onClick}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </button>
  );
}

export default Burger;
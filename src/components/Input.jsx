function Input({ search, setSearch }) {
  return (
    <div>
      <div className="input-container">
        <h1>Pokédex Api</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Ingresa el nombre del Pokémon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;

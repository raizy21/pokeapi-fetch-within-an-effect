//function for display pokemon with destructuring attributes
const PokemonCard = ({ name, sprite, id }) => {
  return (
    <div>
      <img src={sprite} alt={name} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default PokemonCard;

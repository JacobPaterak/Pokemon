function Weakness_Card(props) {
  const doubles = Array.isArray(props.double) ? props.double : [props.double];
  if (doubles.length === 0) doubles.push("It has no weaknesses");

  const half = Array.isArray(props.half) ? props.half : [props.half];
  if (half.length === 0) half.push("No half");

  const noEffect = Array.isArray(props.noEffect)
    ? props.noEffect
    : [props.noEffect];
  if (noEffect.length === 0) noEffect.push("No effect");

  return (
    <div className="WeaknessCard">
      <h2>Taken Damage</h2>

      <h3>Take Double damage from</h3>
      <ul>
        {doubles.map((double, index) => (
          <li key={index}>{double}</li>
        ))}
      </ul>
      <h3>Take half damage from</h3>
      <ul>
        {half.map((half, index) => (
          <li key={index}>{half}</li>
        ))}
      </ul>
      <h3>Take no damage from </h3>
      <ul>
        {noEffect.map((noEffect, index) => (
          <li key={index}>{noEffect}</li>
        ))}
      </ul>
    </div>
  );
}
export default Weakness_Card;

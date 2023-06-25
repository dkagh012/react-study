function Concepts(props) {

  const concepts = Array.isArray(props.item) ? props.item : [];
  return (
    <ul id="concepts">
      {concepts.map((concept, index) => (
        <li className="concept" key={index} >
          <img src={concept.image} alt={concept.title} />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default Concepts;

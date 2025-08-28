export default function Card( {title, description}) {
  return (
    <div style={{  border: "1px solid #ddd", padding: "0.5rem", borderRadius: "8px", marginBottom: "8px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};

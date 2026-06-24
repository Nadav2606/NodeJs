export default function Disease({ title, disease, description }) {
  return (
    <article className="disease-card">
      <h2>{title}</h2>
      <h3>{disease}</h3>
      <p>{description}</p>
    </article>
  );
}

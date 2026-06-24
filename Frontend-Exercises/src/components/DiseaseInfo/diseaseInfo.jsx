export default function DiseaseInfo({ diseaseInfo }) {
  return (
    <section className="disease-info">
      <h2>{diseaseInfo.title}</h2>

      <img
        className="disease-image"
        src={diseaseInfo.image}
        alt={diseaseInfo.title}
      />

      <h3>Disease: {diseaseInfo.disease}</h3>

      <p>{diseaseInfo.description}</p>

      <h4>Symptoms:</h4>
      <p>{diseaseInfo.symptoms}</p>

      <h4>Treatment:</h4>
      <p>{diseaseInfo.treatment}</p>
    </section>
  );
}

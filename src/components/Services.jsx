export default function Services() {
  const services = [
    { id: 1, name: "Pet Adoption" },
    { id: 2, name: "Grooming"},
    { id: 3, name: "Veterinary Care" }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

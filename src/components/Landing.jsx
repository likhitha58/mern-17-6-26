export default function Landing() {
  const cards = [
    {
      id: 1,
      title: "Explore",
      image: "https://images.pexels.com/photos/545024/pexels-photo-545024.jpeg",
      text: "Cute Pugs"
    },
    {
      id: 2,
      title: "Create",
      image: "https://images.pexels.com/photos/7572809/pexels-photo-7572809.jpeg",
      text: "Pretty Poodles"
    },
    {
      id: 3,
      title: "Connect",
      image: "https://images.pexels.com/photos/546229/pexels-photo-546229.jpeg",
      text: "Joyful Golden Retriever"
    }
  ];

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Pet Store</h1>
        <p>Pugs | Poodles | Golden Retriver</p>
      </header>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

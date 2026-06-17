export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

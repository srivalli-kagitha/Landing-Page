const Vacation = () => {
  return (
    <section id="vacation" className="section vacation">
      <h1>Vacation Inspiration 🏝️</h1>
      <p>
        This section represents a travel feature where destinations
        and trip ideas can be displayed using dynamic data in React.
      </p>

      <div className="card-container">
        <div className="card">🌊 Beach Trips</div>
        <div className="card">🏔️ Mountain Tours</div>
        <div className="card">🏙️ City Travel</div>
        <div className="card">🌅 Weekend Getaways</div>
      </div>
    </section>
  );
};

export default Vacation;

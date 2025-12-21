const About = () => {
  return (
    <div className="about-restaurant">
      {/* HERO */}
      <div className="about-hero">
        <h1>
          About <span>Chef Master</span>
        </h1>
        <p>Serving delicious food with love ❤️</p>
      </div>

      {/* INFO SECTION */}
      <div className="about-info">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            <strong>Chef Master</strong> is a modern food delivery platform
            focused on delivering fresh, hygienic, and tasty meals right to your
            doorstep.
          </p>

          <p>
            From street-style snacks to premium dishes, our chefs ensure quality
            ingredients and authentic flavors in every bite.
          </p>

          <div className="about-location">
            📍 Bokaro Steel City, Jharkhand, India
            <br />⏰ Mon – Sun: 9:00 AM – 11:00 PM
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="Restaurant"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="about-features">
        <h2>Why Choose Us?</h2>

        <div className="features-grid">
          <div className="feature-card">
            ⚡<h3>Fast Delivery</h3>
            <p>Hot and fresh food delivered quickly</p>
          </div>

          <div className="feature-card">
            🍃
            <h3>Fresh Ingredients</h3>
            <p>Only premium and hygienic ingredients</p>
          </div>

          <div className="feature-card">
            ⭐<h3>Top Rated</h3>
            <p>Loved by thousands of customers</p>
          </div>

          <div className="feature-card">
            📞
            <h3>24/7 Support</h3>
            <p>We’re always here for you</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div>
          <h3>50K+</h3>
          <p>Orders Delivered</p>
        </div>

        <div>
          <h3>4.8 ⭐</h3>
          <p>Average Rating</p>
        </div>

        <div>
          <h3>5+</h3>
          <p>Years of Service</p>
        </div>
      </div>
    </div>
  );
};

export default About;

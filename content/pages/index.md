<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bakgat Biltong – Lydenburg, Mpumalanga</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Lato', sans-serif; background: #faf6f0; color: #1a0a00; overflow-x: hidden; }

    /* ANIMATIONS DEFINITIONS */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes borderPulse {
      0% { border-left-color: #c8721a; }
      50% { border-left-color: #e8d9c5; }
      100% { border-left-color: #c8721a; }
    }

    /* HERO */
    .bb-hero {
      background: #1a0a00;
      color: #f5e6cc;
      padding: 5rem 2rem 3.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .bb-hero::before {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(135deg, rgba(180,100,20,0.07) 0px, rgba(180,100,20,0.07) 1px, transparent 1px, transparent 40px);
    }
    .bb-logo-ring {
      width: 90px; height: 90px; border-radius: 50%;
      border: 3px solid #c8721a;
      display: inline-flex; align-items: center; justify-content: center;
      margin-bottom: 1.2rem;
      font-family: 'Playfair Display', serif;
      font-size: 28px; font-weight: 900;
      color: #c8721a;
      position: relative; z-index: 1;
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .bb-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem; font-weight: 900;
      color: #f5e6cc;
      margin: 0 0 0.3rem;
      letter-spacing: 2px;
      position: relative; z-index: 1;
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
    }
    .bb-hero .tagline {
      font-size: 1rem; font-weight: 300;
      color: #c8721a;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 1.8rem;
      position: relative; z-index: 1;
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
    }
    .hero-badges {
      display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
      position: relative; z-index: 1;
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
    }
    .hero-badge {
      background: rgba(200,114,26,0.2);
      border: 1px solid rgba(200,114,26,0.5);
      color: #f5e6cc;
      font-size: 12px; letter-spacing: 1px;
      padding: 6px 14px; border-radius: 20px;
      font-weight: 700; text-transform: uppercase;
      transition: all 0.3s ease;
    }
    .hero-badge:hover {
      background: #c8721a;
      color: #1a0a00;
      transform: translateY(-2px);
    }

    /* NAV */
    .bb-nav {
      background: #c8721a;
      display: flex; justify-content: center;
      overflow-x: auto;
      position: sticky; top: 0; z-index: 100;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .bb-nav a {
      color: #fff; text-decoration: none;
      font-size: 12px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      padding: 16px 22px;
      border-right: 1px solid rgba(255,255,255,0.2);
      white-space: nowrap;
      transition: background 0.2s;
    }
    .bb-nav a:last-child { border-right: none; }
    .bb-nav a:hover { background: rgba(0,0,0,0.15); }

    /* SECTIONS */
    .bb-section { padding: 3rem 2rem; max-width: 900px; margin: 0 auto; }
    .bb-section-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem; font-weight: 700;
      margin: 0 0 1.8rem;
      color: #c8721a;
      display: flex; align-items: center; gap: 12px;
    }
    .bb-section-title::after {
      content: ''; flex: 1; height: 1px; background: #e0cdb8;
    }

    /* STATS */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px; margin-bottom: 3rem;
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
    }
    .stat-card {
      background: #fff;
      border: 1px solid #e8d9c5;
      border-radius: 10px;
      padding: 1.2rem 1rem; text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(200,114,26,0.08);
    }
    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 2rem; font-weight: 700;
      color: #c8721a; line-height: 1;
    }
    .stat-label {
      font-size: 11px; text-transform: uppercase;
      letter-spacing: 1.5px; color: #8a6a4a;
      margin-top: 5px;
    }

    /* PRODUCTS */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 14px;
    }
    .product-card {
      background: #fff;
      border: 1px solid #e8d9c5;
      border-radius: 12px;
      padding: 1.4rem 1rem;
      text-align: center;
      transition: border-color 0.3s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
    }
    .product-card:hover {
      border-color: #c8721a;
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(200,114,26,0.15);
    }
    .product-icon { font-size: 30px; margin-bottom: 10px; display: block; transition: transform 0.3s ease; }
    .product-card:hover .product-icon {
      transform: scale(1.15);
    }
    .product-name {
      font-weight: 700; font-size: 13px; text-transform: uppercase;
      letter-spacing: 1px; margin-bottom: 5px; color: #1a0a00;
    }
    .product-desc { font-size: 12px; color: #7a5a3a; line-height: 1.5; }
    .product-badge {
      display: inline-block; margin-top: 10px;
      background: #1a0a00; color: #c8721a;
      font-size: 10px; font-weight: 700;
      letter-spacing: 1px; padding: 3px 10px;
      border-radius: 10px; text-transform: uppercase;
    }

    /* REVIEWS */
    .filter-row {
      display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1.4rem;
    }
    .filter-btn {
      background: #fff;
      border: 1px solid #e8d9c5;
      border-radius: 20px;
      padding: 7px 16px;
      font-size: 12px; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase;
      color: #8a6a4a;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: 'Lato', sans-serif;
    }
    .filter-btn.active, .filter-btn:hover {
      background: #c8721a; color: #fff; border-color: #c8721a;
      transform: translateY(-1px);
    }
    .reviews-list { display: flex; flex-direction: column; gap: 14px; }
    
    .review-card {
      background: #fff;
      border: 1px solid #e8d9c5;
      border-radius: 12px;
      padding: 1.2rem 1.4rem;
      /* Dynamic Entrance Animation handled via Javascript injection */
      animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .review-card.highlight {
      border-left: 4px solid #c8721a;
      background: #fffaf5;
      animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both, borderPulse 4s infinite ease-in-out;
    }
    .review-header {
      display: flex; align-items: center;
      justify-content: space-between; margin-bottom: 10px;
    }
    .reviewer-info { display: flex; align-items: center; gap: 12px; }
    .reviewer-avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: #c8721a;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 700; color: #fff;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }
    .review-card:hover .reviewer-avatar {
      transform: rotate(360deg);
    }
    .reviewer-name { font-weight: 700; font-size: 14px; color: #1a0a00; }
    .reviewer-meta { font-size: 11px; color: #8a6a4a; margin-top: 2px; }
    .stars { color: #c8721a; font-size: 14px; letter-spacing: 2px; }
    .review-text { font-size: 14px; line-height: 1.7; color: #5a3a1a; }

    /* INFO / VISIT */
    .info-section {
      background: #1a0a00;
      color: #f5e6cc;
      padding: 3.5rem 2rem;
    }
    .info-inner { max-width: 900px; margin: 0 auto; }
    .info-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem; font-weight: 700;
      color: #c8721a; margin-bottom: 2rem;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 2rem;
    }
    .info-block-title {
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 2px;
      color: #c8721a; margin-bottom: 8px;
    }
    .info-block p {
      font-size: 14px; color: rgba(245,230,204,0.8);
      line-height: 1.8;
    }

    /* MAP BUTTON */
    .map-btn {
      display: inline-block;
      margin-top: 1.5rem;
      background: #c8721a; color: #fff;
      text-decoration: none;
      font-size: 13px; font-weight: 700;
      letter-spacing: 1.5px; text-transform: uppercase;
      padding: 12px 28px; border-radius: 4px;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    }
    .map-btn:hover { 
      background: #a85c12; 
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(200,114,26,0.3);
    }

    /* FOOTER */
    footer {
      background: #0d0500;
      text-align: center;
      padding: 1.8rem;
      font-size: 12px;
      color: rgba(245,230,204,0.35);
      letter-spacing: 1.5px;
    }

    /* RESPONSIVE */
    @media (max-width: 600px) {
      .bb-hero h1 { font-size: 2.2rem; }
      .bb-section { padding: 2.2rem 1.2rem; }
    }
  </style>
</head>
<body>

  <!-- HERO -->
  <div class="bb-hero">
    <div class="bb-logo-ring">BB</div>
    <h1>Bakgat Biltong</h1>
    <p class="tagline">Lydenburg · The Best in the Lowveld</p>
    <div class="hero-badges">
      <span class="hero-badge">Biltong</span>
      <span class="hero-badge">Droëwors</span>
      <span class="hero-badge">Chilli Bites</span>
      <span class="hero-badge">Boerewors</span>
      <span class="hero-badge">Spices</span>
    </div>
  </div>

  <!-- NAV -->
  <nav class="bb-nav">
    <a href="#products">Products</a>
    <a href="#reviews">Reviews</a>
    <a href="#visit">Visit Us</a>
  </nav>

  <!-- STATS + PRODUCTS -->
  <div class="bb-section" id="products">
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num">40+</div>
        <div class="stat-label">Reviews</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">★ 4.5</div>
        <div class="stat-label">Rating</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">10+</div>
        <div class="stat-label">Years Open</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">#1</div>
        <div class="stat-label">In Lowveld</div>
      </div>
    </div>

    <div class="bb-section-title">Our Products</div>
    <div class="products-grid">
      <div class="product-card">
        <span class="product-icon">🥩</span>
        <div class="product-name">Biltong</div>
        <div class="product-desc">Classic beef, various cuts &amp; dryness levels</div>
        <span class="product-badge">Best Seller</span>
      </div>
      <div class="product-card">
        <span class="product-icon">🌶️</span>
        <div class="product-name">Chilli Bites</div>
        <div class="product-desc">Phenomenal spice blend, fan favourite</div>
        <span class="product-badge">Must Try</span>
      </div>
      <div class="product-card">
        <span class="product-icon">🍖</span>
        <div class="product-name">Droëwors</div>
        <div class="product-desc">Thin dried sausage, best in the Lowveld</div>
      </div>
      <div class="product-card">
        <span class="product-icon">🔥</span>
        <div class="product-name">Babelas Mix</div>
        <div class="product-desc">Highly recommended mixed snack pack</div>
        <span class="product-badge">Popular</span>
      </div>
      <div class="product-card">
        <span class="product-icon">🧄</span>
        <div class="product-name">Spices</div>
        <div class="product-desc">Signature chutney spice blend &amp; more</div>
      </div>
      <div class="product-card">
        <span class="product-icon">🌿</span>
        <div class="product-name">Boerewors</div>
        <div class="product-desc">Fresh, traditionally spiced farm sausage</div>
      </div>
    </div>
  </div>

  <!-- REVIEWS -->
  <div class="bb-section" id="reviews" style="padding-top: 0;">
    <div class="bb-section-title">What Customers Say</div>
    <div class="filter-row">
      <button class="filter-btn active" onclick="filterReviews('all', this)">All</button>
      <button class="filter-btn" onclick="filterReviews('biltong', this)">Biltong</button>
      <button class="filter-btn" onclick="filterReviews('chilli', this)">Chilli</button>
      <button class="filter-btn" onclick="filterReviews('service', this)">Service</button>
    </div>
    <div class="reviews-list" id="reviews-list"></div>
  </div>

  <!-- VISIT -->
  <div class="info-section" id="visit">
    <div class="info-inner">
      <div class="info-title">Visit Bakgat Biltong</div>
      <div class="info-grid">
        <div class="info-block">
          <div class="info-block-title">Location</div>
          <p>On the main road to Badfontein,<br>Dullstroom &amp; Roosenekal<br>Near the Hospital<br>Lydenburg (Mashishing), Mpumalanga</p>
        </div>
        <div class="info-block">
          <div class="info-block-title">Find Us</div>
          <p>Close to Pick n Pay<br>Look for the Bakgat Biltong sign on the main road through town</p>
        </div>
        <div class="info-block">
          <div class="info-block-title">Family Business</div>
          <p>A proudly South African family business serving the Lowveld community for over a decade. Fresh meat, great prices, friendly faces.</p>
        </div>
        <div class="info-block">
          <div class="info-block-title">Nationwide Delivery</div>
          <p>We courier biltong nationwide — customers from Durban to Cape Town have rated us the best in SA!</p>
        </div>
      </div>
      <a class="map-btn" href="https://maps.app.goo.gl/yCaemnY2w9Si3yTE9" target="_blank" rel="noopener">Open in Google Maps</a>
    </div>
  </div>

  <footer>
    © Bakgat Biltong &nbsp;·&nbsp; Lydenburg &nbsp;·&nbsp; Mpumalanga &nbsp;·&nbsp; South Africa
  </footer>

  <script>
    const reviews = [
      { name: "Ruan Beket", text: "Great service at this biltong shop — I would definitely recommend the Babelas mix.", age: "7 months ago", tags: ["biltong","service"], highlight: false },
      { name: "Toasterboy 777", text: "Chilli bites were absolutely phenomenal.", age: "3 months ago", tags: ["chilli"], highlight: true },
      { name: "Christie van Heerden", text: "Oh so good. Best biltong I have had. Came back 2 years later and tasted just as good.", age: "8 years ago", tags: ["biltong"], highlight: true },
      { name: "nickey moriarty", text: "Couriered some biltong to my cousin in Durban. His verdict: \"I've just eaten half a stick, don't think I need worry about supper — it's the best biltong in SA 👏👏👏\"", age: "a year ago", tags: ["biltong"], highlight: true },
      { name: "Pieter Viljoen", text: "What a friendly family business. Love the family-friendly shop — the biltong and droëwors is the best in the Lowveld.", age: "4 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Pocahontis E", text: "Still the place with the best biltong and chutney spice you will ever find.", age: "4 years ago", tags: ["biltong"], highlight: false },
      { name: "Vanesse Schultz", text: "Great place for biltong — they have all different flavours. The chilli is tops.", age: "2 years ago", tags: ["biltong","chilli"], highlight: false },
      { name: "Moses Phiri", text: "A place that knocks out that craving for biltong at a wallet-friendly price. The staff are always tidy and smiley — a taste of good life lies at Bakgat Biltong.", age: "4 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Marinda Bakker", text: "Worth the visit. Good quality biltong. They serve bubble tea as well. Friendly service and lekker biltong.", age: "2 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Steve Coetzee", text: "98% of the time the staff is excellent, friendly and very helpful. The biltong is some of the best you'll find.", age: "5 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Charles Kayser", text: "Awesome service and even better biltong.", age: "3 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Ada Spottiswoode", text: "The biltong is absolutely perfect!", age: "3 years ago", tags: ["biltong"], highlight: false },
      { name: "Sone Pretorius", text: "Has the best service and a fantastic variety of different choices. I never miss a chance to stop in store when going to Pick n Pay.", age: "2 years ago", tags: ["service"], highlight: false },
      { name: "Billy Phillips", text: "Been a customer of this establishment for many years — their biltong is the best.", age: "5 years ago", tags: ["biltong"], highlight: false },
      { name: "Gina Godshome", text: "This biltong is absolute divine! Staff very friendly.", age: "2 years ago", tags: ["biltong","service"], highlight: false },
      { name: "Charmaine Roets", text: "Very good biltong — worth every cent!", age: "9 months ago", tags: ["biltong"], highlight: false },
      { name: "Mark Geddes", text: "Biltong is great and always well stocked.", age: "2 years ago", tags: ["biltong"], highlight: false },
      { name: "Wilna De Wet", text: "Best biltong and other dried processed meats.", age: "5 years ago", tags: ["biltong"], highlight: false },
    ];

    function initials(name) {
      return name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    }

    function renderReviews(filtered) {
      const list = document.getElementById('reviews-list');
      list.innerHTML = '';
      filtered.forEach((r, index) => {
        const div = document.createElement('div');
        div.className = 'review-card' + (r.highlight ? ' highlight' : '');
        
        // Stagger entrance delay based on card position index
        div.style.animationDelay = `${index * 0.04}s`;
        
        div.innerHTML =
          '<div class="review-header">' +
            '<div class="reviewer-info">' +
              '<div class="reviewer-avatar">' + initials(r.name) + '</div>' +
              '<div>' +
                '<div class="reviewer-name">' + r.name + '</div>' +
                '<div class="reviewer-meta">' + r.age + '</div>' +
              '</div>' +
            '</div>' +
            '<div class="stars">★★★★★</div>' +
          '</div>' +
          '<div class="review-text">' + r.text + '</div>';
        list.appendChild(div);
      });
    }

    function filterReviews(tag, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtered = tag === 'all' ? reviews : reviews.filter(r => r.tags.includes(tag));
      renderReviews(filtered);
    }

    renderReviews(reviews);
  </script>
</body>
</html>

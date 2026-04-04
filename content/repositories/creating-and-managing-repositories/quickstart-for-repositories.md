<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Wealth Academy</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <div class="container">
        <div class="hero-section">
            <header>
                <span class="badge">Limited Slots Available</span>
                <h1>Turn Your Smartphone Into A <span class="highlight">Money Machine</span></h1>
                <p class="subtitle">Stop scrolling and start earning. I’ll show you the exact framework I use to generate income online daily.</p>
            </header>
        </div>

        <main>
            <div class="card">
                <h3>What You'll Discover:</h3>
                <ul>
                    <li>✅ How to find high-paying affiliate offers.</li>
                    <li>✅ Secret traffic sources that don't require ads.</li>
                    <li>✅ My "Copy-Paste" strategy for WhatsApp marketing.</li>
                </ul>
            </div>

            <a href="https://wa.me/YOURNUMBER" class="cta-button">
                Join My Private WhatsApp Group
                <span>Start Learning for Free →</span>
            </a>
        </main>

        <footer>
            <p>&copy; 2026 Digital Wealth Mentorship</p>
        </footer>
    </div>

</body>
</html>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #0f172a;
    color: #f8fafc;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.container {
    max-width: 500px;
    width: 100%;
    text-align: center;
}

/* New: Background Image Styling */
.hero-section {
    /* Replace 'Background.jpg' with your actual image file name */
    Background-image: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), 
                      url('Background.jpg');
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    border-radius: 20px;
    margin-bottom: 25px;
    border: 1px solid #334155;
}

.badge {
    background: #f59e0b;
    color: #000;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}

h1 {
    font-size: 2.2rem;
    margin: 20px 0;
    line-height: 1.2;
}

.highlight {
    color: #38bdf8;
}

.subtitle {
    color: #cbd5e1; /* Made slightly lighter for readability on the image */
    margin-bottom: 0;
}

.card {
    background: #1e293b;
    padding: 25px;
    border-radius: 15px;
    text-align: left;
    margin-bottom: 30px;
    border: 1px solid #334155;
}

.card h3 {
    margin-bottom: 15px;
    color: #38bdf8;
}

ul {
    list-style: none;
}

li {
    margin-bottom: 10px;
    font-size: 1rem;
}

.cta-button {
    display: block;
    background: #22c55e;
    color: white;
    padding: 20px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    transition: transform 0.2s;
    box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.4);
}

.cta-button span {
    display: block;
    font-size: 0.9rem;
    font-weight: normal;
    opacity: 0.9;
}

.cta-button:active {
    transform: scale(0.98);
}

footer {
    margin-top: 40px;
    font-size: 0.8rem;
    color: #64748b;
}

    
</style>

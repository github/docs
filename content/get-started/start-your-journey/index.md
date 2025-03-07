<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slot Game Instan</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }
        h1 { color: #333; }
        .slot-container { display: flex; justify-content: center; margin-top: 20px; }
        .slot { width: 100px; height: 100px; margin: 0 10px; font-size: 40px; display: flex; justify-content: center; align-items: center; background-color: #fff; border: 2px solid #333; box-shadow: 2px 2px 5px rgba(0,0,0,0.2); }
        button { margin-top: 20px; padding: 10px 20px; font-size: 16px; background-color: #28a745; color: white; border: none; cursor: pointer; }
        button:hover { background-color: #218838; }
        #result { margin-top: 20px; font-size: 18px; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Permainan Slot Instan</h1>
    <div class="slot-container">
        <div class="slot" id="slot1">🍒</div>
        <div class="slot" id="slot2">🍋</div>
        <div class="slot" id="slot3">🍉</div>
    </div>
    <button onclick="spin()">Putar</button>
    <p id="result"></p>

    <script>
        function spin() {
            const symbols = ["🍒", "🍋", "🍉", "⭐", "🍊"];
            let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
            let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
            let slot3 = symbols[Math.floor(Math.random() * symbols.length)];

            document.getElementById("slot1").innerText = slot1;
            document.getElementById("slot2").innerText = slot2;
            document.getElementById("slot3").innerText = slot3;

            if (slot1 === slot2 && slot2 === slot3) {
                document.getElementById("result").innerText = "🎉 Selamat! Anda Menang! 🎉";
            } else {
                document.getElementById("result").innerText = "Coba Lagi!";
            }
        }
    </script>
</body>
</html>

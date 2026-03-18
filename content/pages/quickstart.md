<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speed Racer - Endless Car Game</title>
    <style>
        :root {
            color-scheme: dark;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: white;
        }

        .game-container {
            position: relative;
            width: 100%;
            max-width: 640px;
            min-height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px 20px 40px;
            gap: 10px;
        }

        #gameCanvas {
            width: min(92vw, 540px);
            height: min(90vh, 780px);
            max-height: 82vh;
            background: #050816;
            border-radius: 22px;
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), inset 0 0 45px rgba(255, 255, 255, 0.08);
            border: 2px solid rgba(255, 255, 255, 0.08);
        }

        .game-info {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 12px;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .interference-banner {
            position: absolute;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            padding: 6px 18px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.25);
            font-size: 13px;
            letter-spacing: 0.25px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .interference-banner.active {
            opacity: 0.95;
        }

        .creator-sign {
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translate(-50%, -100%);
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
        }

        .interference-credit {
            position: absolute;
            top: 36px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            letter-spacing: 0.6px;
            color: #c3d7ff;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        .interference-credit.show {
            opacity: 0.85;
        }

        .hud-block {
            background: rgba(5, 5, 12, 0.65);
            padding: 10px 14px;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05);
        }

        .hud-label {
            display: block;
            font-size: 12px;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        .hud-value {
            font-size: 20px;
            font-weight: 700;
        }

        .controls {
            position: absolute;
            bottom: 18px;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 16px;
            z-index: 2;
            pointer-events: none;
        }

        .control-hint {
            pointer-events: none;
            padding: 8px 18px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.45);
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 13px;
            letter-spacing: 0.3px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }

        .creator-tag {
            position: absolute;
            right: 12px;
            bottom: 6px;
            font-size: 11px;
            letter-spacing: 0.5px;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
            pointer-events: none;
        }

        .game-over-modal {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
            z-index: 100;
        }

        .game-over-modal.show {
            opacity: 1;
            visibility: visible;
        }

        .game-over-content {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px;
            border-radius: 24px;
            text-align: center;
            color: white;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
            transform: scale(0.85);
            transition: transform 0.4s ease;
        }

        .game-over-modal.show .game-over-content {
            transform: scale(1);
        }

        .game-over-title {
            font-size: 46px;
            margin-bottom: 10px;
            letter-spacing: 4px;
            text-shadow: 3px 4px 10px rgba(0, 0, 0, 0.6);
        }

        .game-over-score {
            font-size: 28px;
            margin-bottom: 12px;
            font-weight: 600;
        }

        .game-over-detail {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 24px;
        }

        .restart-btn,
        .start-btn {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            border: none;
            padding: 14px 38px;
            font-size: 18px;
            border-radius: 30px;
            cursor: pointer;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        }

        .restart-btn:hover,
        .start-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
        }

        .start-screen {
            position: fixed;
            inset: 0;
            background: linear-gradient(180deg, rgba(10, 11, 26, 0.95) 0%, rgba(12, 4, 16, 0.9) 60%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 200;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s ease;
        }

        .start-screen.show {
            opacity: 1;
            visibility: visible;
        }

        .start-content {
            text-align: center;
            padding: 40px 30px;
            border-radius: 26px;
            background: rgba(4, 6, 18, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.6);
            max-width: 460px;
        }

        .start-title {
            font-size: 52px;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }

        .start-title span {
            display: block;
            font-size: 20px;
            opacity: 0.7;
            letter-spacing: normal;
        }

        .start-subtitle {
            font-size: 18px;
            margin-bottom: 24px;
            color: rgba(255, 255, 255, 0.8);
        }

        .start-cta {
            margin-bottom: 22px;
        }

        .start-note {
            font-size: 13px;
            opacity: 0.75;
            letter-spacing: 0.4px;
        }

        .start-stat-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 18px;
        }

        .start-stat {
            background: rgba(255, 255, 255, 0.04);
            padding: 12px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .start-stat-label {
            display: block;
            opacity: 0.6;
            font-size: 11px;
            letter-spacing: 2px;
            margin-bottom: 4px;
        }

        .start-stat-value {
            font-size: 22px;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            body {
                padding: 10px 0;
                justify-content: flex-start;
                min-height: 100vh;
            }

            .game-container {
                padding: 16px 10px 28px;
                min-height: auto;
                max-width: 100%;
            }

            .game-info {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 8px;
            }

            .interference-banner,
            .interference-credit {
                width: 85%;
                font-size: 12px;
            }

            .creator-sign {
                font-size: 20px;
                top: -34px;
            }

            #gameCanvas {
                width: 100vw;
                max-width: 100%;
                height: 70vh;
                border-radius: 0;
            }

            .controls {
                bottom: 10px;
                gap: 8px;
            }

            .controls .control-hint {
                font-size: 11px;
                padding: 6px 14px;
            }
        }
    </style>
</head>
<body>
    <div class="game-container">
        <div class="creator-sign">Adarsh Chouhan</div>
        <div class="game-info">
            <div class="hud-block">
                <span class="hud-label">Score</span>
                <span id="scoreLabel" class="hud-value">0</span>
            </div>
            <div class="hud-block">
                <span class="hud-label">Distance</span>
                <span id="distanceLabel" class="hud-value">0 m</span>
            </div>
            <div class="hud-block">
                <span class="hud-label">Speed</span>
                <span id="speedLabel" class="hud-value">0 km/h</span>
            </div>
            <div class="hud-block">
                <span class="hud-label">Level</span>
                <span id="levelLabel" class="hud-value">Level 1</span>
            </div>
        </div>
        <div class="interference-banner" id="interferenceBanner" aria-live="polite"></div>
        <div class="interference-credit" id="interferenceCredit">Adarsh Chouhan</div>
        <canvas id="gameCanvas" width="480" height="720"></canvas>
        <div class="controls">
            <div class="control-hint">? / A ? ? / D ? Steer the racer</div>
            <div class="control-hint">Touch & drag ? responsive steering</div>
        </div>
        <div class="creator-tag">Created by Adarsh Chouhan</div>
    </div>

    <div class="start-screen show" id="startScreen">
        <div class="start-content">
            <div class="start-title">Speed Racer<span>Endless Car Run</span></div>
            <p class="start-subtitle">Stay inside the neon lanes, dodge the traffic, and keep building your streak.</p>
            <div class="start-cta">
                <button id="startButton" class="start-btn">Start the Run</button>
            </div>
            <p class="start-note">Keyboard: ? / ? / A / D ? Touch: drag left or right</p>
            <div class="start-stat-grid">
                <div class="start-stat">
                    <span class="start-stat-label">Best Score</span>
                    <span id="bestScoreValue" class="start-stat-value">0</span>
                </div>
                <div class="start-stat">
                    <span class="start-stat-label">Longest Drive</span>
                    <span id="bestDistanceValue" class="start-stat-value">0 m</span>
                </div>
            </div>
        </div>
    </div>

    <div class="game-over-modal" id="gameOverModal">
        <div class="game-over-content">
            <div class="game-over-title">RACE OVER</div>
            <div class="game-over-score" id="finalScore">Score ? 0</div>
            <div class="game-over-detail" id="gameOverDetail">Distance 0 m ? Speed 0 km/h ? Level 1</div>
            <button id="restartButton" class="restart-btn">Retry</button>
            <p class="start-note" style="margin-top:18px;">Stay composed for the next run ? lane discipline adds bonuses.</p>
        </div>
    </div>

    <script>
        (() => {
            'use strict';

            const baseWidth = 480;
            const baseHeight = 720;
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
            const startScreen = document.getElementById('startScreen');
            const startButton = document.getElementById('startButton');
            const restartButton = document.getElementById('restartButton');
            const gameOverModal = document.getElementById('gameOverModal');
            const scoreLabel = document.getElementById('scoreLabel');
            const distanceLabel = document.getElementById('distanceLabel');
            const speedLabel = document.getElementById('speedLabel');
            const levelLabel = document.getElementById('levelLabel');
            const finalScoreEl = document.getElementById('finalScore');
            const finalDetailsEl = document.getElementById('gameOverDetail');
            const bestScoreValue = document.getElementById('bestScoreValue');
            const bestDistanceValue = document.getElementById('bestDistanceValue');
            const interferenceBanner = document.getElementById('interferenceBanner');
            const interferenceCredit = document.getElementById('interferenceCredit');

            const road = {
                width: baseWidth * 0.65,
                left: baseWidth * 0.175
            };
            const laneWidth = road.width / 3;

            const player = {
                width: 70,
                height: 120,
                x: baseWidth / 2 - 35,
                y: baseHeight - 170,
                rotation: 0
            };

            const state = {
                running: false,
                gameSpeed: 230,
                maxSpeed: 360,
                acceleration: 110,
                spawnInterval: 1.3,
                spawnTimer: 0,
                obstacles: [],
                distance: 0,
                score: 0,
                level: 1,
                dashOffset: 0,
                lastTimestamp: 0,
                escaped: 0,
                controls: { left: false, right: false },
                interference: {
                    active: false,
                    type: null,
                    timer: 0,
                    duration: 0,
                    next: 7,
                    speedMultiplier: 1,
                    drift: 0,
                    controlInvert: false,
                    banner: ''
                }
            };

            const bestStorageKey = 'speed-racer-best-records';
            const bestRecord = loadBestRecord();
            const creatorName = 'Adarsh Chouhan';
            const interferencePresets = [
                { id: 'EMP', label: 'EMP Surge', baseDuration: 1.4, rand: 0.6, controlInvert: true },
                { id: 'Fog', label: 'Neon Fog', baseDuration: 1.6, rand: 0.8, speedMultiplier: 0.75 },
                { id: 'Wind', label: 'Crosswind', baseDuration: 1.8, rand: 0.7, drift: 60 }
            ];
            let animationFrame = null;
            let pointerActive = false;

            function loadBestRecord() {
                try {
                    const saved = localStorage.getItem(bestStorageKey);
                    if (saved) {
                        return JSON.parse(saved);
                    }
                } catch (error) {
                    console.warn('Unable to read local storage', error);
                }
                return { score: 0, distance: 0 };
            }

            function persistBestRecord() {
                try {
                    localStorage.setItem(bestStorageKey, JSON.stringify(bestRecord));
                } catch (error) {
                    console.warn('Unable to save best score', error);
                }
            }

            function updateBestDisplay() {
                bestScoreValue.textContent = bestRecord.score.toLocaleString();
                bestDistanceValue.textContent = `${Math.floor(bestRecord.distance).toLocaleString()} m`;
            }

            function updateBestFromState() {
                if (state.score > bestRecord.score) {
                    bestRecord.score = state.score;
                }
                if (state.distance > bestRecord.distance) {
                    bestRecord.distance = state.distance;
                }
                persistBestRecord();
                updateBestDisplay();
            }

            function setupCanvas() {
                const ratio = window.devicePixelRatio || 1;
                canvas.width = baseWidth * ratio;
                canvas.height = baseHeight * ratio;
                canvas.style.width = `${Math.min(baseWidth, window.innerWidth * 0.92)}px`;
                canvas.style.height = `${Math.min(baseHeight, window.innerHeight * 0.8)}px`;
                ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
            }

            function startInterference(preset) {
                const interference = state.interference;
                interference.active = true;
                interference.type = preset.id;
                interference.duration = preset.baseDuration + (preset.rand || 0) * Math.random();
                interference.timer = 0;
                interference.speedMultiplier = preset.speedMultiplier || 1;
                interference.drift = preset.drift || 0;
                interference.controlInvert = !!preset.controlInvert;
                interference.banner = preset.label;
                interferenceBanner.textContent = `${preset.label} • interference by ${creatorName}`;
                interferenceBanner.classList.add('active');
                interferenceCredit.classList.add('show');
            }

            function updateInterference(deltaTime) {
                const interference = state.interference;
                if (interference.active) {
                    interference.timer += deltaTime;
                if (interference.timer >= interference.duration) {
                    interference.active = false;
                    interference.type = null;
                    interference.timer = 0;
                    interference.duration = 0;
                    interference.speedMultiplier = 1;
                    interference.drift = 0;
                    interference.controlInvert = false;
                    interference.banner = '';
                    interferenceBanner.classList.remove('active');
                    interferenceBanner.textContent = '';
                    interferenceCredit.classList.remove('show');
                    interference.next = 5 + Math.random() * 6;
                }
                } else {
                    interference.next -= deltaTime;
                    if (interference.next <= 0) {
                        const preset = interferencePresets[Math.floor(Math.random() * interferencePresets.length)];
                        startInterference(preset);
                    }
                }
            }

            function drawInterferenceOverlay() {
                if (!state.interference.active) {
                    return;
                }
                ctx.save();
                if (state.interference.type === 'Fog') {
                    ctx.fillStyle = 'rgba(12, 14, 40, 0.48)';
                } else if (state.interference.type === 'EMP') {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
                } else {
                    ctx.fillStyle = 'rgba(28, 36, 84, 0.32)';
                }
                ctx.fillRect(road.left, 0, road.width, baseHeight);
                ctx.restore();
            }

            function clamp(value, min, max) {
                return Math.min(Math.max(value, min), max);
            }

            function resetState() {
                state.obstacles.length = 0;
                state.distance = 0;
                state.score = 0;
                state.escaped = 0;
                state.level = 1;
                state.spawnInterval = 1.3;
                state.spawnTimer = 0;
                state.gameSpeed = 230;
                state.maxSpeed = 360;
                state.acceleration = 110;
                state.dashOffset = 0;
                state.lastTimestamp = 0;
                player.x = baseWidth / 2 - player.width / 2;
                player.rotation = 0;
                const interference = state.interference;
                interference.active = false;
                interference.type = null;
                interference.timer = 0;
                interference.duration = 0;
                interference.speedMultiplier = 1;
                interference.drift = 0;
                interference.controlInvert = false;
                interference.banner = '';
                interference.next = 5 + Math.random() * 6;
                interferenceBanner.classList.remove('active');
                interferenceBanner.textContent = '';
            }

            function startGame() {
                startScreen.classList.remove('show');
                gameOverModal.classList.remove('show');
                state.running = true;
                resetState();
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
                animationFrame = requestAnimationFrame(gameLoop);
            }

            function endGame() {
                state.running = false;
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
                const speedDisplay = Math.round(60 + state.gameSpeed * 0.22);
                finalScoreEl.textContent = `Score ? ${state.score.toLocaleString()}`;
                finalDetailsEl.textContent = `Distance ${Math.floor(state.distance).toLocaleString()} m ? Speed ${speedDisplay} km/h ? Level ${state.level}`;
                updateBestFromState();
                gameOverModal.classList.add('show');
            }

            function spawnObstacle() {
                const laneIndex = Math.floor(Math.random() * 3);
                const width = laneWidth * (0.62 + Math.random() * 0.32);
                const height = 90 + Math.random() * 50;
                const x = road.left + laneIndex * laneWidth + (laneWidth - width) / 2;
                const y = -height - 60;
                const palette = ['#ff5c5c', '#ffcb5c', '#6ddccf', '#7b5cf9', '#4dd0e1'];
                const color = palette[Math.floor(Math.random() * palette.length)];
                const type = Math.random() > 0.82 ? 'truck' : 'car';
                const speedFactor = 0.9 + Math.random() * 0.5;
                state.obstacles.push({ x, y, width, height, color, type, speedFactor });
            }

            function movePlayer(deltaTime) {
                const steerSpeed = 420;
                const invert = state.interference.active && state.interference.controlInvert;
                const leftPressed = invert ? state.controls.right : state.controls.left;
                const rightPressed = invert ? state.controls.left : state.controls.right;
                if (leftPressed) {
                    player.x -= steerSpeed * deltaTime;
                }
                if (rightPressed) {
                    player.x += steerSpeed * deltaTime;
                }
                player.x += state.interference.drift * deltaTime;
                const leftLimit = road.left + 12;
                const rightLimit = road.left + road.width - player.width - 12;
                player.x = clamp(player.x, leftLimit, rightLimit);
                if (leftPressed && !rightPressed) {
                    player.rotation = -0.08;
                } else if (rightPressed && !leftPressed) {
                    player.rotation = 0.08;
                } else {
                    player.rotation *= 0.85;
                }
            }

            function updateObstacles(deltaTime, effectiveSpeed) {
                for (let i = state.obstacles.length - 1; i >= 0; i -= 1) {
                    const obstacle = state.obstacles[i];
                    obstacle.y += effectiveSpeed * obstacle.speedFactor * deltaTime * 0.92;
                    if (checkCollision(obstacle)) {
                        endGame();
                        return true;
                    }
                    if (obstacle.y > baseHeight + 150) {
                        state.obstacles.splice(i, 1);
                        state.escaped += 1;
                    }
                }
                return false;
            }

            function checkCollision(obstacle) {
                const padding = 6;
                const playerRect = {
                    left: player.x + padding,
                    right: player.x + player.width - padding,
                    top: player.y + padding,
                    bottom: player.y + player.height - padding
                };
                const obstacleRect = {
                    left: obstacle.x + padding,
                    right: obstacle.x + obstacle.width - padding,
                    top: obstacle.y + padding,
                    bottom: obstacle.y + obstacle.height - padding
                };
                return (
                    playerRect.left < obstacleRect.right &&
                    playerRect.right > obstacleRect.left &&
                    playerRect.top < obstacleRect.bottom &&
                    playerRect.bottom > obstacleRect.top
                );
            }

            function drawRoundedRect(x, y, width, height, radius) {
                const r = Math.min(radius, width / 2, height / 2);
                ctx.beginPath();
                ctx.moveTo(x + r, y);
                ctx.lineTo(x + width - r, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + r);
                ctx.lineTo(x + width, y + height - r);
                ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
                ctx.lineTo(x + r, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - r);
                ctx.lineTo(x, y + r);
                ctx.quadraticCurveTo(x, y, x + r, y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

            function drawBackground() {
                ctx.fillStyle = '#040814';
                ctx.fillRect(0, 0, baseWidth, baseHeight);
                const gradient = ctx.createLinearGradient(0, 0, 0, baseHeight);
                gradient.addColorStop(0, '#1c214b');
                gradient.addColorStop(0.6, '#14182e');
                gradient.addColorStop(1, '#080914');
                ctx.fillStyle = gradient;
                ctx.fillRect(road.left, 0, road.width, baseHeight);
                ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(road.left + 7, 0);
                ctx.lineTo(road.left + 7, baseHeight);
                ctx.moveTo(road.left + road.width - 7, 0);
                ctx.lineTo(road.left + road.width - 7, baseHeight);
                ctx.stroke();
                ctx.strokeStyle = 'rgba(255,255,255,0.4)';
                ctx.lineWidth = 4;
                ctx.setLineDash([32, 30]);
                ctx.lineDashOffset = -state.dashOffset;
                ctx.beginPath();
                ctx.moveTo(road.left + road.width / 2, -60);
                ctx.lineTo(road.left + road.width / 2, baseHeight);
                ctx.stroke();
                ctx.setLineDash([]);
            }

            function drawPlayer() {
                ctx.save();
                ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
                ctx.rotate(player.rotation);
                ctx.translate(-(player.x + player.width / 2), -(player.y + player.height / 2));
                const gradient = ctx.createLinearGradient(player.x, player.y, player.x, player.y + player.height);
                gradient.addColorStop(0, '#ff7fa3');
                gradient.addColorStop(1, '#ff3a5a');
                ctx.fillStyle = gradient;
                ctx.strokeStyle = 'rgba(255,255,255,0.7)';
                ctx.lineWidth = 3;
                drawRoundedRect(player.x, player.y, player.width, player.height, 18);
                ctx.restore();
                const wheelRadius = 11;
                ctx.fillStyle = '#111';
                ctx.beginPath();
                ctx.arc(player.x + 18, player.y + player.height - 6, wheelRadius, 0, Math.PI * 2);
                ctx.arc(player.x + player.width - 18, player.y + player.height - 6, wheelRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#555';
                ctx.beginPath();
                ctx.arc(player.x + 18, player.y + player.height - 6, wheelRadius * 0.5, 0, Math.PI * 2);
                ctx.arc(player.x + player.width - 18, player.y + player.height - 6, wheelRadius * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            function drawObstacles() {
                state.obstacles.forEach(obstacle => {
                    ctx.fillStyle = obstacle.color;
                    ctx.strokeStyle = 'rgba(255,255,255,0.65)';
                    ctx.lineWidth = 2;
                    drawRoundedRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 16);
                    ctx.fillStyle = 'rgba(0,0,0,0.35)';
                    ctx.fillRect(obstacle.x + obstacle.width * 0.12, obstacle.y + obstacle.height * 0.32, obstacle.width * 0.78, obstacle.height * 0.35);
                    if (obstacle.type === 'truck') {
                        ctx.strokeStyle = 'rgba(255,255,255,0.25)';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(obstacle.x + 6, obstacle.y + obstacle.height * 0.65);
                        ctx.lineTo(obstacle.x + obstacle.width - 6, obstacle.y + obstacle.height * 0.65);
                        ctx.stroke();
                    }
                    const wheelRadius = Math.min(12, obstacle.width * 0.13);
                    ctx.fillStyle = '#05060d';
                    ctx.beginPath();
                    ctx.arc(obstacle.x + obstacle.width * 0.2, obstacle.y + obstacle.height - wheelRadius * 0.3, wheelRadius, 0, Math.PI * 2);
                    ctx.arc(obstacle.x + obstacle.width * 0.8, obstacle.y + obstacle.height - wheelRadius * 0.3, wheelRadius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#6d6d6d';
                    ctx.beginPath();
                    ctx.arc(obstacle.x + obstacle.width * 0.2, obstacle.y + obstacle.height - wheelRadius * 0.3, wheelRadius * 0.6, 0, Math.PI * 2);
                    ctx.arc(obstacle.x + obstacle.width * 0.8, obstacle.y + obstacle.height - wheelRadius * 0.3, wheelRadius * 0.6, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            function drawFrame() {
                ctx.clearRect(0, 0, baseWidth, baseHeight);
                drawBackground();
                drawObstacles();
                drawPlayer();
                drawInterferenceOverlay();
            }

            function updateHUD(displaySpeed) {
                scoreLabel.textContent = state.score.toLocaleString();
                distanceLabel.textContent = `${Math.floor(state.distance).toLocaleString()} m`;
                const speedValue = displaySpeed ?? Math.round(52 + state.gameSpeed * 0.22);
                speedLabel.textContent = `${speedValue} km/h`;
                levelLabel.textContent = `Level ${state.level}`;
            }

            function gameLoop(timestamp) {
                if (!state.running) {
                    return;
                }
                if (!state.lastTimestamp) {
                    state.lastTimestamp = timestamp;
                }
                const deltaTime = Math.min((timestamp - state.lastTimestamp) / 1000, 0.04);
                state.lastTimestamp = timestamp;
                state.gameSpeed = Math.min(state.gameSpeed + state.acceleration * deltaTime * 0.5, state.maxSpeed);
                state.spawnTimer += deltaTime;
                updateInterference(deltaTime);
                const speedMultiplier = state.interference.active ? state.interference.speedMultiplier : 1;
                const effectiveSpeed = state.gameSpeed * speedMultiplier;
                state.distance += effectiveSpeed * deltaTime * 0.044;
                const newLevel = Math.min(9, Math.floor(state.distance / 420) + 1);
                if (newLevel !== state.level) {
                    state.level = newLevel;
                    state.acceleration = 110 + state.level * 6;
                    state.maxSpeed = 260 + state.level * 30;
                }
                state.spawnInterval = Math.max(0.55, 1.4 - state.level * 0.08);
                if (state.spawnTimer >= state.spawnInterval) {
                    spawnObstacle();
                    state.spawnTimer = 0;
                }
                movePlayer(deltaTime);
                updateObstacles(deltaTime, effectiveSpeed);
                if (!state.running) {
                    return;
                }
                state.dashOffset = (state.dashOffset + effectiveSpeed * deltaTime * 0.32) % 82;
                state.score = Math.round(state.distance * 2 + state.escaped * 32 + state.level * 40);
                drawFrame();
                updateHUD(Math.round(52 + effectiveSpeed * 0.22));
                animationFrame = requestAnimationFrame(gameLoop);
            }

            function handleKeyDown(event) {
                if (event.code === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
                    state.controls.left = true;
                    event.preventDefault();
                }
                if (event.code === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
                    state.controls.right = true;
                    event.preventDefault();
                }
            }

            function handleKeyUp(event) {
                if (event.code === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
                    state.controls.left = false;
                    event.preventDefault();
                }
                if (event.code === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
                    state.controls.right = false;
                    event.preventDefault();
                }
            }

            function handlePointerMove(event) {
                if (!pointerActive) return;
                const rect = canvas.getBoundingClientRect();
                const normalizedX = ((event.clientX - rect.left) / rect.width) * baseWidth;
                player.x = normalizedX - player.width * 0.5;
                const leftLimit = road.left + 12;
                const rightLimit = road.left + road.width - player.width - 12;
                player.x = clamp(player.x, leftLimit, rightLimit);
            }

            canvas.addEventListener('pointerdown', event => {
                pointerActive = true;
                handlePointerMove(event);
            });
            canvas.addEventListener('pointermove', handlePointerMove);
            canvas.addEventListener('pointerup', () => {
                pointerActive = false;
            });
            canvas.addEventListener('pointerleave', () => {
                pointerActive = false;
            });

            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
            window.addEventListener('blur', () => {
                state.controls.left = false;
                state.controls.right = false;
            });
            window.addEventListener('resize', () => {
                setupCanvas();
                drawFrame();
            });

            startButton.addEventListener('click', startGame);
            restartButton.addEventListener('click', startGame);

            setupCanvas();
            updateBestDisplay();
            drawFrame();
            updateHUD(0);
        })();
    </script>
</body>
</html>

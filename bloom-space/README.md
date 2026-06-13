# 🌸 Bloom Space

> Creative studio workspace — all active development tracks

**Kanban Board:** Add all issues below to the *Bloom Space* GitHub Project  
**Columns:** `Backlog` → `In Progress` → `Review` → `Done`

---

## 🎵 Track 1 — Music / Audio Visualizer

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Core Web Audio API engine (FFT + waveform) | 🔴 High | Backlog |
| 2 | BPM detection + beat-sync animations | 🔴 High | Backlog |
| 3 | Visual themes: Vapor / Cosmic / Neon Grid / Void | 🟡 Med | Backlog |
| 4 | Frequency spectrum 3D waterfall view | 🟡 Med | Backlog |
| 5 | MIDI controller input support | 🟢 Low | Backlog |
| 6 | Export visualizer session as WebM video | 🟡 Med | Backlog |

### Task Details

#### #1 — Core Web Audio API Engine
- `AudioContext` + `AnalyserNode` → mic or file input
- Real-time FFT at 60fps (`getByteFrequencyData`)
- Waveform oscilloscope (`getByteTimeDomainData`)
- File drag-and-drop (MP3 / WAV / OGG / FLAC)
- Canvas 854×480 render loop

#### #2 — BPM Detection + Beat Sync
- Peak energy detection on bass bins (20–200 Hz)
- Rolling threshold crossing = beat event
- `onBeat(bpm, energy)` callback
- Reuse tap-tempo logic from `datamosh-editor.html`
- Beat flash overlay + color palette pulses

#### #3 — Visual Themes
- **VAPOR** — mirrored bars, pink/cyan, CRT scanlines
- **COSMIC** — circular polar FFT, star field, nova burst on beat
- **NEON GRID** — 3D perspective floor, bloom glow bar peaks
- **VOID** — minimal black/white waveform only
- Theme switcher pill buttons, persists in `localStorage`

#### #4 — Frequency Waterfall
- Scrolling 2D heat-map: X = frequency, Y = time, color = amplitude
- Color scale: deep blue (quiet) → hot pink (loud)
- Toggle between bar chart / waterfall / oscilloscope views

#### #5 — MIDI Input
- Web MIDI API device enumeration
- Map CC knobs to: gain, FFT size, theme parameters
- Visual MIDI learn mode (click param → wiggle knob)

#### #6 — WebM Export
- `canvas.captureStream(30)` + `MediaRecorder`
- Same pipeline as datamosh editor recording system
- Merges audio + canvas into final file

---

## 🎨 Track 2 — Visual Art / Generative Graphics

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Particle system engine with physics | 🔴 High | Backlog |
| 2 | Perlin noise flow field visualizer | 🔴 High | Backlog |
| 3 | Generative kaleidoscope / symmetry tool | 🟡 Med | Backlog |
| 4 | Reaction-diffusion (Turing patterns) | 🟡 Med | Backlog |
| 5 | WebGL shader playground | 🟡 Med | Backlog |
| 6 | Export artwork as PNG / SVG | 🔴 High | Backlog |

### Task Details

#### #1 — Particle System Engine
- N-body system: position, velocity, acceleration per particle
- Forces: gravity, wind, mouse attraction/repulsion, vortex
- Particle birth/death lifecycle with fade
- Render modes: dots / trails / connected-graph / blobs
- Up to 50,000 particles at 60fps (typed arrays)

#### #2 — Perlin Noise Flow Field
- Classic Perlin noise (or simplex) grid
- Particles follow noise gradient vectors
- Time-animated field evolution
- Controls: noise scale, speed, color palette, trail length
- "Freeze" mode for still export

#### #3 — Kaleidoscope Tool
- N-fold radial symmetry (3–12 segments)
- Real-time drawing input mirrored across all segments
- Zoom + rotation animation
- Color cycle mode (HSL shift over time)

#### #4 — Reaction Diffusion
- Gray-Scott model: U/V chemical diffusion
- Feed/kill rate sliders → different pattern regimes
- GPU-accelerated via WebGL ping-pong framebuffers
- Color map overlay (VOID / HEAT / VAPOR palettes from datamosh)

#### #5 — WebGL Shader Playground
- GLSL fragment shader editor (CodeMirror or textarea)
- Live-reload on edit
- Built-in uniforms: `time`, `mouse`, `resolution`
- 10 starter shaders included

#### #6 — Export
- PNG snapshot at any resolution (2x/4x canvas scale)
- SVG trace for particle/vector art
- Animated GIF export (via gif.js or similar)

---

## 🎬 Track 3 — Video / Media Tools

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Datamosh Editor v2 — multi-clip timeline | 🔴 High | In Progress |
| 2 | Real-time webcam glitch effects | 🟡 Med | Backlog |
| 3 | Video color grading tool | 🟡 Med | Backlog |
| 4 | Frame interpolation / slow-motion | 🟢 Low | Backlog |
| 5 | Live stream overlay generator | 🟢 Low | Backlog |

### Task Details

#### #1 — Datamosh Editor v2
- Current v1: `datamosh-editor.html` (PR #1 — In Progress)
- v2 adds: multi-clip timeline (drag to reorder), per-clip effect chains
- Clip in/out points with scrubbing
- Effect automation curves (keyframe parameters over time)

#### #2 — Webcam Glitch Effects
- `getUserMedia` → live canvas pipeline
- Apply any datamosh effect in real-time to webcam feed
- Snapshot to PNG, record to WebM
- Mirror/virtual-camera mode

#### #3 — Color Grading Tool
- Curves editor (R/G/B/Luma)
- HSL selective color adjustments
- LUT import/export (.cube format)
- Before/after split-screen compare
- Apply to video file or webcam

#### #4 — Frame Interpolation
- Canvas optical flow between N frames
- Blend intermediate frames (slow-motion effect)
- Configurable interpolation factor (2x / 4x / 8x)

#### #5 — Stream Overlay Generator
- Drag-and-drop overlay layout builder
- Animated elements: clocks, alerts, audio meter, now-playing
- OBS browser source compatible
- Export as self-contained HTML

---

## 📋 Project Setup Checklist

- [ ] Enable Issues in `dylusive/docs` repo (Settings → Features → Issues ✓)
- [ ] Create labels: `audio-visualizer`, `visual-art`, `video-tools`, `bloom-space`, `backlog`, `in-progress`, `review`
- [ ] Open one GitHub Issue per task above
- [ ] Add all issues to the **Bloom Space** GitHub Project
- [ ] Set up columns: `Backlog` / `In Progress` / `Review` / `Done`
- [ ] Enable GitHub Pages (Settings → Pages → branch: `main`, folder: `/`) so tools are live at `https://dylusive.github.io/docs/`

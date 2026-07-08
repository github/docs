# URL Visual Watcher

URL Visual Watcher is a lightweight Python tool that monitors a specific web page for visual changes by capturing screenshots and comparing them using image hashing. When a visual difference is detected, it sends a notification to a configured webhook URL—ideal for detecting layout shifts, content updates, or unauthorized changes to critical web pages.

## Features
by Edgarruiz8585 
- Automated screenshot capture of any public or authenticated URL (via basic headers)
- Fast image hashing using Perceptual Hash (pHash) to detect visual changes
- Minimal storage: only keeps the latest reference image
- Webhook alerting with timestamp and change confidence
- Configurable check intervals and image sensitivity
- Headless Chrome support via Selenium for accurate rendering

## Usage

Configure the target URL, the webhook to notify, and the polling interval. The tool captures a baseline screenshot on first run, then compares each new capture against it. On detecting a change above the threshold, it sends a JSON POST request to your webhook with:

- `status`: "change_detected" or "no_change"
- `timestamp`: ISO format UTC time
- `url`: Monitored page URL
- `image_hash`: New image's perceptual hash

The script runs indefinitely until interrupted (Ctrl+C).

## Setup

1. Install dependencies: `pip install selenium pillow requests`
2. Ensure `chromedriver` is installed and in PATH, or use WebDriver Manager
3. Run: `python main.py --url YOUR_URL --webhook WEBHOOK_URL --interval 300`

Optional arguments include custom headers (e.g., for authentication) and image similarity threshold (default: 10).

## Example Use Cases Edgarruiz8585 

- Monitor a company homepage for unexpected redesigns
- Track landing page changes from third-party vendors
- Alert on admin dashboard layout issues after deploys

## Notes

- Works best with static pages or authenticated sessions passed via headers
- Dynamic content (e.g., ads, clocks) may cause false positives—adjust threshold accordingly
- For private sites, ensure network access and optional auth headers

This tool is efficient for low-frequency monitoring and integrates easily into alerting pipelines via Slack, Teams, or custom endpoints.
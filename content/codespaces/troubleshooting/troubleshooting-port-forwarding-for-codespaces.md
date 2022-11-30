---
title: Troubleshooting port forwarding for Codespaces
intro: Troubleshooting steps for common port forwarding issues.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
---

When an application running inside a codespace outputs a port to the console, {% data variables.product.prodname_codespaces %}  detects the localhost URL pattern and automatically forwards the port. For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

If a port is not automatically forwarded, you can forward it manually. For more information, see "[Forwarding a port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)."

If port forwarding is set up, check the following:

- Use the notification toast or click the URL in Terminal to open the forwarded port. Typing in `localhost:8000` (as an example) to your local machine will not work if you're connected to the codespace via the browser.
- Make sure to check that your application is still running from within your codespace. If your codespace has stopped after a period of inactivity, you'll need to ensure to restart your application once the codespace has restarted.

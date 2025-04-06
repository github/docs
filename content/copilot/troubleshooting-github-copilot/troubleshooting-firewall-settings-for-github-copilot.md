---
title: Troubleshooting firewall settings for GitHub Copilot
intro: Troubleshooting help for firewall-related errors.
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Troubleshooting
  - Networking
versions:
  feature: copilot
shortTitle: Connectivity security settings
---

## About the problem

If you or your company uses a firewall, {% data variables.product.prodname_copilot_short %} may not function as expected. {% data variables.product.prodname_copilot_short %} interacts with a remote machine learning model and checks for updates, and a firewall may block important traffic and degrade the user experience.

## Solving the problem

For an optimal {% data variables.product.prodname_copilot_short %} experience, you should create an "allowlist" that lets certain URLs, ports, and protocols through your firewall. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot)."

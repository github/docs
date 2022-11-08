---
title: Troubleshooting port forwarding for GitHub Codespaces
intro: Troubleshooting steps for common port forwarding issues.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
---

When an application running inside a codespace outputs a port to the console, {% data variables.product.prodname_github_codespaces %}  detects the localhost URL pattern and automatically forwards the port. For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

If a port is not automatically forwarded, you can forward it manually. For more information, see "[Forwarding a port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)."

If port forwarding is set up, check the following:

- Use the notification toast or click the URL in Terminal to open the forwarded port. Typing in `localhost:8000` (as an example) to your local machine will not work if you're connected to the codespace via the browser.
- Make sure to check that your application is still running from within your codespace. If your codespace has stopped after a period of inactivity, you'll need to ensure to restart your application once the codespace has restarted.

Typically, you can make a forwarded port accessible publicly, or within the organization that owns a repository. For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)." If either, or both, of the options for public or organization visibility are not available, this indicates that an organization-level policy has been configured. For more information, see "[Restricting the visibility of forwarded ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)."

{% data reusables.codespaces.forwarded-ports-environment-variable %}

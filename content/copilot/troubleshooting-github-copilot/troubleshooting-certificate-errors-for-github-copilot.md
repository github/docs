---
title: Troubleshooting certificate errors for GitHub Copilot
intro: Troubleshooting help for certificate-related errors.
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Logging
  - Troubleshooting
versions:
  feature: copilot
shortTitle: Self-signed certificates
---

## Handling certificate-related errors

Depending on your proxy setup, you may encounter errors like “certificate signature failure”, “self-signed certificate”, or “unable to verify the first certificate”. These errors are usually caused by a corporate proxy setup that intercepts secure connections, terminates the secure connection to {% data variables.product.prodname_dotcom %}, and instead uses a self-signed certificate to act like a TLS middleman. Support for this type of proxy is not available for all {% data variables.product.prodname_copilot%} licenses.
Possible ways to resolve this issue are:
* If you are using a corporate proxy, please contact your IT department to see if they can configure the proxy to not intercept secure connections.
* Properly install the proxy certificates on your machine in the OS trust chain.
  {% note %}

  **Note:** This requires a {% data variables.product.prodname_copilot_for_business%} subscription. For more information about {% data variables.product.prodname_copilot_for_business%}, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/overview-of-github-copilot/about-github-copilot-for-business)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

  {% endnote %}
* Configure a different proxy that does not intercept secure connections.
* Configure {% data variables.product.prodname_copilot%} to ignore certificate errors.
  {% warning %}

  **Warning:** Ignoring certificate errors is not recommended, since it might cause security issues.

  {% endwarning %}

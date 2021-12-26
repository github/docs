---
title: Secret scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.secret-scanning.api-beta %}

The {% data variables.product.prodname_secret_scanning %} API lets you retrieve and update secret scanning alerts from a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information on secret scanning, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."

{% include rest_operations_at_current_path %}

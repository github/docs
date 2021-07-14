---
title: Secret scanning
intro: 'To retrieve and update the secret alerts from a private repository, you can use Secret Scanning API.'
versions:
  fpt: '*'
  ghes: '>=3.1'
miniTocMaxHeadingLevel: 3
---

{% data reusables.secret-scanning.api-beta %}

The {% data variables.product.prodname_secret_scanning %} API lets you retrieve and update secret scanning alerts from a {% ifversion fpt %}private {% endif %}repository. For more information on secret scanning, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."

{% include rest_operations_at_current_path %}

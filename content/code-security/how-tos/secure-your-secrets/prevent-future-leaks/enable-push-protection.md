---
title: Enabling push protection for your repository
shortTitle: Enable push protection
intro: With push protection, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.
permissions: '{% data reusables.permissions.push-protection %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository
  - /code-security/how-tos/secure-your-secrets/prevent-future-leaks/enabling-push-protection-for-your-repository
category:
  - Protect your secrets
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. If you have not already enabled {% data variables.product.prodname_secret_protection %}, to the right of "{% data variables.product.prodname_secret_protection %}", click **Enable**.
1. In the "{% data variables.product.prodname_secret_protection %}" section, to the right of "Push protection", click **Enable**.

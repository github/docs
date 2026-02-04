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
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. If you have not already enabled {% data variables.product.prodname_secret_protection %}, to the right of "{% data variables.product.prodname_secret_protection %}", click **Enable**.
1. In the "{% data variables.product.prodname_secret_protection %}" section, to the right of "Push protection", click **Enable**.{% else %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning)
* [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)

---
title: Dependabot
intro: 'With the {% data variables.product.prodname_dependabot %} Secrets API, you can manage and control {% data variables.product.prodname_dependabot %} secrets for an organization or repository.'
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The {% data variables.product.prodname_dependabot %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} Para obtener más información, consulta "[Administrar los secretos cifrados para el Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `dependabot_secrets` permission to use this API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

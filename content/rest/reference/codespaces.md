---
title: Codespaces
intro: 'The {% data variables.product.prodname_codespaces %} API enables you to manage your codespaces using the REST API.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.codespaces-api-beta-note %}

The {% data variables.product.prodname_codespaces %} API enables you to manage {% data variables.product.prodname_codespaces %} using the REST API. This API is available for authenticated users and OAuth Apps, but not GitHub Apps. For more information, see "[{% data variables.product.prodname_codespaces %}](/codespaces)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Machines
The Machines API allows a user to determine which machine types are available to create a codespace, either on a given repository or as an authenticated user. For more information, see "[About machine types](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)."

You can also use this information when changing the machine of an existing codespace by updating its `machine` property. The machine update will take place the next time the codespace is restarted. For more information, see "[Changing the machine type for your codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)."
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'machines' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secrets
The Secrets API allows a user to create, list, and delete secrets (such as access tokens for cloud services) as well as assign secrets to repositories that the user has access to. These secrets are made available to the codespace at runtime. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)."
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

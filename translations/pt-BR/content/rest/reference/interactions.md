---
title: Interactions
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
---

Users interact with repositories by commenting, opening issues, and creating pull requests. The Interactions APIs allow people with owner or admin access to temporarily restrict certain users from interacting with public repositories.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## organização

The Organization Interactions API allows organization owners to temporarily restrict which users can comment, open issues, or create pull requests in the organization's public repositories. {% data reusables.interactions.interactions-detail %} Here's more about the groups of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the organization.
* {% data reusables.interactions.contributor-user-limit-definition %} in the organization.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repositório

The Repository Interactions API allows people with owner or admin access to temporarily restrict which users can comment, open issues, or create pull requests in a public repository. {% data reusables.interactions.interactions-detail %} Here's more about the groups of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

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

## Организация

The Organization Interactions API allows organization owners to temporarily restrict which users can comment, open issues, or create pull requests in the organization's public repositories. {{ site.data.reusables.interactions.interactions-detail }} Here's more about the groups of {{ site.data.variables.product.product_name }} users:

* {{ site.data.reusables.interactions.existing-user-limit-definition }} in the organization.
* {{ site.data.reusables.interactions.contributor-user-limit-definition }} in the organization.
* {{ site.data.reusables.interactions.collaborator-user-limit-definition }} in the organization.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Репозиторий

The Repository Interactions API allows people with owner or admin access to temporarily restrict which users can comment, open issues, or create pull requests in a public repository. {{ site.data.reusables.interactions.interactions-detail }} Here's more about the groups of {{ site.data.variables.product.product_name }} users:

* {{ site.data.reusables.interactions.existing-user-limit-definition }} in the respository.
* {{ site.data.reusables.interactions.contributor-user-limit-definition }} in the respository.
* {{ site.data.reusables.interactions.collaborator-user-limit-definition }} in the respository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

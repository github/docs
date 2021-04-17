---
title: Interactions
redirect_from:
  - /v3/interactions
versions:
  free-pro-team: '*'
topics:
  - api
---

Users interact with repositories by commenting, opening issues, and creating pull requests. The Interactions APIs allow people with owner or admin access to temporarily restrict interaction with public repositories to a certain type of user.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organization

The Organization Interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories. {% data reusables.interactions.interactions-detail %} Here's more about the types of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the organization.
* {% data reusables.interactions.contributor-user-limit-definition %} in the organization.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the organization.

Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization. To set different interaction limits for individual repositories owned by the organization, use the [Repository](#repository) interactions endpoints instead.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository

The Repository Interactions API allows people with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository. {% data reusables.interactions.interactions-detail %} Here's more about the types of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} in the repository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the repository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the repository.

If an interaction limit is enabled for the user or organization that owns the repository, the limit cannot be changed for the individual repository. Instead, use the [User](#user) or [Organization](#organization) interactions endpoints to change the interaction limit.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## User

The User Interactions API allows you to temporarily restrict which type of user can comment, open issues, or create pull requests on your public repositories. {% data reusables.interactions.interactions-detail %} Here's more about the types of {% data variables.product.product_name %} users:

* {% data reusables.interactions.existing-user-limit-definition %} from interacting with your repositories.
* {% data reusables.interactions.contributor-user-limit-definition %} from interacting with your repositories.
* {% data reusables.interactions.collaborator-user-limit-definition %} from interacting with your repositories.

Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user. To set different interaction limits for individual repositories owned by the user, use the [Repository](#repository) interactions endpoints instead.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'user' %}{% include rest_operation %}{% endif %}
{% endfor %}

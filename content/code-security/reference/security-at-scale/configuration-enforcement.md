---
title: Security configuration enforcement
shortTitle: Configuration enforcement
intro: Understand the complexities of enforcing {% data variables.product.prodname_security_configurations %}.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
category:
  - Secure at scale
redirect_from:
  - /code-security/reference/security-at-scale/security-configuration-enforcement
---

{% ifversion security-configuration-enterprise-organization-enforcement %}

{% data variables.product.prodname_security_configurations_caps %} can be enforced at the organization{% ifversion security-configuration-enterprise-level %} or enterprise{% endif %} level to prevent owners from changing the enablement status of configured security features.
{% data reusables.permissions.security-configuration-enterprise-enable %}
* At the **organization** level, enforcement means repository owners cannot change the enablement status of features that are enabled or disabled by the configuration.
* At the **enterprise** level,  you can enforce for repository owners only, or for both repository and organization owners. When enforcement applies to both, neither repository owners nor organization owners can change the enablement status of features that are enabled or disabled by the configuration.
{% else %}

{% data variables.product.prodname_security_configurations_caps %} can be enforced, meaning repository owners cannot change the enablement status of features that are enabled or disabled by the configuration.

{% endif %}

## Situations that break enforcement

Some situations can break the enforcement of {% data variables.product.prodname_security_configurations %}. For example, the enablement of {% data variables.product.prodname_code_scanning %} will not apply to a repository if:
* {% data variables.product.prodname_actions %} is initially enabled on the repository, but is then disabled in the repository.
* {% data variables.product.prodname_actions %} required by {% data variables.product.prodname_code_scanning %} configurations are not available in the repository.{% ifversion ghes %}
* Self-hosted runners with the label `code-scanning` are not available.{% endif %}
* The definition for which languages should not be analyzed using {% data variables.product.prodname_code_scanning %} default setup is changed.

## Enforcement and the REST API

If a user in your organization or enterprise attempts to change the enablement status of a feature in an enforced configuration using the REST API, the API call will appear to succeed, but no enablement statuses will change.

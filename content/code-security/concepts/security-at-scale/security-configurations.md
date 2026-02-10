---
title: Security configurations
intro: '{% data variables.product.prodname_security_configurations_caps %} are collections of security settings that you can apply to repositories at scale.'
permissions: 'Organization owners, {% ifversion security-configuration-enterprise-level %}enterprise owners, {% endif %}security managers, and organization members with the **admin** role'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories
  - /code-security/concepts/security-at-scale/choosing-a-security-configuration-for-your-repositories
  - /admin/managing-code-security/securing-your-enterprise/about-security-configurations
  - /code-security/concepts/security-at-scale/about-security-configurations
contentType: concepts
---

{% ifversion security-configurations-cloud %}

{% data reusables.security-configurations.define-security-configurations %}

There are two types of {% data variables.product.prodname_security_configuration %}:

* [The {% data variables.product.prodname_github_security_configuration %}](#the-github-recommended-security-configuration)
* [{% data variables.product.prodname_custom_security_configurations_caps %}](#custom-security-configurations)

Each repository can only have one {% data variables.product.prodname_security_configuration %} applied to it.

{% ifversion security-configurations-api %}
You can create and manage security configurations using the REST API. For more information, see [AUTOTITLE](/rest/code-security/configurations).
{% endif %}

{% ifversion ghec %}

> [!NOTE] If your enterprise uses {% data variables.product.prodname_emus %}, please note that enterprise-level {% data variables.product.prodname_security_configurations %} are not automatically rolled out to user namespace repositories. There are some additional {% data variables.product.prodname_secret_scanning %} settings that can be applied to user namespace repositories within the enteprise, but you cannot apply enterprise-level {% data variables.product.prodname_security_configurations %} to this type of user-owner repository.

{% endif %}

## The {% data variables.product.prodname_github_security_configuration %}

The {% data variables.product.prodname_github_security_configuration %} offers a number of benefits:

* It is created and managed by {% data variables.product.company_short %}'s subject matter experts.
* It is the quickest {% data variables.product.prodname_security_configuration %} to apply to all repositories in your organization.
* It is designed to effectively secure both low- and high-impact repositories.

_We recommend that organizations and enterprises initially apply the {% data variables.product.prodname_github_security_configuration %}_.

The {% data variables.product.prodname_github_security_configuration %} includes {% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} features. Applying the configuration to private and internal repositories in your organization will incur usage costs or require licenses.

## {% data variables.product.prodname_custom_security_configurations_caps %}

If you are familiar with {% data variables.product.company_short %}'s security products, and you have specific security needs that the {% data variables.product.prodname_github_security_configuration %} can't meet, you can create and apply {% data variables.product.prodname_custom_security_configurations %}. With {% data variables.product.prodname_custom_security_configurations %}, you can:

* Edit the enablement settings for different security features
* Create several configurations for repositories to reflect their different levels of visibility, risk tolerance, and impact

You can also choose whether or not you want to include {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %} features in a configuration. If you do, keep in mind that these features incur usage costs (or require {% data variables.product.prodname_GHAS %} licenses) when applied to private and internal repositories.

{% elsif security-configurations-ghes-only %}

## {% data variables.product.prodname_security_configurations_caps %} on {% data variables.product.prodname_ghe_server %}

{% data reusables.security-configurations.define-security-configurations %} {% data reusables.security-configurations.custom-configuration-intro-ghes %}

## Feature availability

Feature availability in {% data variables.product.prodname_security_configurations %} is determined as follows:

* You will only see features in the UI if they were installed by a site administrator on your {% data variables.product.prodname_ghe_server %} instance.
* {% data variables.product.prodname_AS %} features will only be visible if your enterprise or {% data variables.product.prodname_ghe_server %} instance holds a {% data variables.product.prodname_GHAS %}{% ifversion ghas-products %}, {% data variables.product.prodname_GH_code_security %}, or {% data variables.product.prodname_GH_secret_protection %}{% endif %} license.
* Certain features, like {% data variables.product.prodname_dependabot_security_updates %} and {% data variables.product.prodname_code_scanning %} default setup, also require that {% data variables.product.prodname_actions %} is installed on the {% data variables.product.prodname_ghe_server %} instance.

{% endif %}

## Enforcement of {% data variables.product.prodname_security_configurations %}

When you apply a {% data variables.product.prodname_security_configuration %}, you can choose to enforce it, meaning users cannot change the enablement status of features included in the configuration.

If a user in your organization {% ifversion security-configuration-enterprise-level %}or enterprise {% endif %}attempts to change the enablement status of a feature in an enforced configuration using the REST API, the API call will appear to succeed, but no enablement statuses will change.

Some situations can break the enforcement of {% data variables.product.prodname_security_configurations %} for a repository. For example, the enablement of {% data variables.product.prodname_code_scanning %} will not apply to a repository if:
* {% data variables.product.prodname_actions %} is initially enabled on the repository, but is then disabled in the repository.
* {% data variables.product.prodname_actions %} is not available for the repository.{% ifversion ghes %}
* Self-hosted runners with the label `code-scanning` are not available.{% endif %}
* The languages excluded from {% data variables.product.prodname_code_scanning %} default setup are changed at the repository level.

## Next steps

{% ifversion security-configurations-cloud %}

To start securing repositories in your organization with the {% data variables.product.prodname_github_security_configuration %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization).

Alternatively, to start securing repositories in your organization with {% data variables.product.prodname_custom_security_configurations %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% elsif security-configurations-ghes-only %}

To learn how to create {% data variables.product.prodname_custom_security_configurations %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% endif %}

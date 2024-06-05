---
title: About GitHub for enterprises
intro: 'Learn about {% data variables.product.prodname_dotcom %}''s enterprise products and deployment options for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## How enterprises use {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} is a complete developer platform to build, scale, and deliver secure software. Businesses use our products to support the entire software development lifecycle, increasing development velocity and improving code quality.

- **Track**: Developers can store and version control your source code in repositories, using issues and projects to plan their work.
- **Code**: Developers can code in {% data variables.product.prodname_github_codespaces %}, a cloud-hosted development environment, review each other's code with pull requests, and use code security features to keep secrets and vulnerabilities out of your codebase.
- **Deploy**: You can automate your build, test, and deployment pipeline with {% data variables.product.prodname_actions %} and host software packages with {% data variables.product.prodname_registry %}.

## Benefits of {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} is our most comprehensive plan. In addition to the features included with a {% data variables.product.prodname_free_team %} or {% data variables.product.prodname_team %} plan for organizations, the plan includes:

- Additional features such as SAML authentication and internal repositories. For a detailed list, see {% data variables.product.pricing_link %}.
- Extra allowances for usage-based products such as {% data variables.product.prodname_actions %}.
- An enterprise account, which provides a single place to manage billing and settings, enforce policies, and audit the people with access to your enterprise.
- The option to add {% data variables.product.prodname_GH_advanced_security %} and {% data variables.contact.premium_support %}.

When businesses adopt {% data variables.product.prodname_enterprise %}, their return on investment (ROI) is high. For example, their developers **save 45 minutes per day**, and onboarding and **training time is reduced by 40%**. See [The Total Economic Impact of {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

## About deployment options

{% data reusables.enterprise.ghe-includes-ghec-and-ghes %} You can choose to use **one or both** of these deployment options.

**With {% data variables.product.prodname_ghe_cloud %}**:

- Your repositories and other resources are hosted on {% data variables.product.prodname_dotcom_the_website %}.
- To access your resources, members of your enterprise can use their personal account or, if you use {% data variables.product.prodname_emus %}, you can provision accounts for users using an external system.

**With {% data variables.product.prodname_ghe_server %}**:

- You run your own {% data variables.product.prodname_dotcom %} instance, either on-premises or on a public cloud service.
- You create accounts for users, and authenticate users using either built-in authentication or an external system.
- You can enable {% data variables.product.prodname_github_connect %} to benefit from features that rely on {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.product.prodname_dependabot_alerts %} and actions hosted on {% data variables.product.prodname_dotcom_the_website %}.

## Next steps

1. Learn more about {% data variables.product.prodname_enterprise %}.

   - "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)"{% ifversion not ghec %} in the {% data variables.product.prodname_ghe_cloud%} documentation{% endif %}
   - "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}."{% endif %}

1. Set up a trial.

   - "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)"
   - "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-server)"

## Further reading

- "[AUTOTITLE](/admin/overview/about-enterprise-accounts)"
- "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)"
- "[AUTOTITLE](/support/learning-about-github-support/about-github-premium-support)"
- "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)"
- [Compare {% data variables.product.prodname_dotcom %} to other DevOps solutions](https://resources.github.com/devops/tools/compare/) in {% data variables.product.company_short %} Resources

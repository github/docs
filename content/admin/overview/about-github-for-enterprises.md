---
title: About GitHub for enterprises
intro: 'Businesses can use {% data variables.product.prodname_dotcom %}''s enterprise products to improve their entire software development lifecycle.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## About {% data variables.product.prodname_dotcom %} for enterprises

{% data variables.product.prodname_dotcom %} is a complete developer platform to build, scale, and deliver secure software. Businesses use our suite of products to support the entire software development lifecycle, increasing development velocity and improving code quality.

Developers can store and version control your source code in repositories, using issues and projects to plan and track their work. They can code in a cloud-hosted development environment, {% data variables.product.prodname_github_codespaces %}, then review each other's code changes with pull requests, using code security features to keep secrets and vulnerabilities out of your codebase. Finally, you can automate your build, test, and deployment pipeline with {% data variables.product.prodname_actions %} and host software packages with {% data variables.product.prodname_registry %}.

When businesses adopt {% data variables.product.prodname_enterprise %}, their return on investment (ROI) is high. For example, their developers save 45 minutes per day, and onboarding and training time is reduced by 40%. For more information, see [The Total Economic Impact of {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

To simplify administration for all the stages in the software development lifecycle, we provide a single point of visibility and management called an enterprise account. Enterprise accounts enable you to manage billing and settings, enforce policy, and audit the people with access to your enterprise's resources. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."

Optionally, you can add extra code security features with {% data variables.product.prodname_GH_advanced_security %}, and enhanced support options with {% data variables.contact.premium_support %}. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)" and "[About {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

For a full list of features available with {% data variables.product.prodname_enterprise %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-products)" and {% data variables.product.pricing_link %}.

## About deployment options

{% data reusables.enterprise.ghe-includes-ghec-and-ghes %} {% data variables.product.prodname_ghe_cloud %} is a set of advanced functionality on {% data variables.product.prodname_dotcom_the_website %}, while {% data variables.product.prodname_ghe_server %} is self-hosted platform. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)"{% ifversion not ghec %} in the {% data variables.product.prodname_ghe_cloud%} documentation{% endif %} and "[About {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}."{% endif %}

For {% data variables.product.prodname_ghe_cloud %}, you can allow developers to create and manage their own personal accounts, or you can use {% data variables.product.prodname_emus %}, which enables you to create and manage the user accounts for your developers. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

You can benefit from the power of {% data variables.product.prodname_dotcom_the_website %} even while using {% data variables.product.prodname_ghe_server %}{% ifversion ghae %} or {% data variables.product.prodname_ghe_managed %}{% endif %} by enabling {% data variables.product.prodname_github_connect %}, which allows you to configure additional features and workflows such as {% data variables.product.prodname_dependabot_alerts %} for insecure dependencies. For more information, see "[About {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghes or ghae %}."{% elsif ghec %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% endif %}

## Further reading

- [Compare {% data variables.product.prodname_dotcom %} to other DevOps solutions](https://resources.github.com/devops/tools/compare/) in {% data variables.product.company_short %} Resources

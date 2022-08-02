---
title: About GitHub for enterprises
intro: 'Businesses can use {% data variables.product.prodname_dotcom %}''s enterprise products to improve their entire software development lifecyle.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## Acerca de {% data variables.product.prodname_dotcom %} para empresas

{% data variables.product.prodname_dotcom %} is a complete developer platform to build, scale, and deliver secure software. Businesses use our suite of products to support the entire software development lifecycle, increasing development velocity and improving code quality.

Developers can store and version control your source code in repositories, using issues and projects to plan and track their work. They can code in a cloud-hosted development environment, {% data variables.product.prodname_github_codespaces %}, then review each other's code changes with pull requests, using code security features to keep secrets and vulnerabilities out of your codebase. Finally, you can automate your build, test, and deployment pipeline with {% data variables.product.prodname_actions %} and host software packages with {% data variables.product.prodname_registry %}.

When businesses adopt {% data variables.product.prodname_enterprise %}, their return on investment (ROI) is high. For example, their developers save 45 minutes per day, and onboarding and training time is reduced by 40%. For more information, see [The Total Economic Impact of {% data variables.product.prodname_enterprise %}](https://resources.github.com/downloads/TEI-of-GitHub-Enterprise.pdf).

To simplify administration for all the stages in the software development lifecyle, we provide a single point of visibility and management called an enterprise account. Enterprise accounts enable you to manage billing and settings, enforce policy, and audit the people with access to your enterprise's resources. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".

Optionally, you can add extra code security features with {% data variables.product.prodname_GH_advanced_security %}, and enhanced support options with {% data variables.contact.premium_support %}. Para obtener más información, consulta las secciones "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" y "[Acerca de {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}{% else %}".{% endif %}

## About deployment options

When you purchase {% data variables.product.prodname_enterprise %}, you get access to both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_ghe_cloud %} is a set of advanced functionality on {% data variables.product.prodname_dotcom_the_website %}, while {% data variables.product.prodname_ghe_server %} is self-hosted platform. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% else %}".{% endif %}

For {% data variables.product.prodname_ghe_cloud %}, you can allow developers to create and manage their own personal accounts, or you can use {% data variables.product.prodname_emus %}, which enables you to create and manage the user accounts for your developers. Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

{% data variables.product.prodname_ghe_managed %} is in limited availability for select customers with stringent security and compliance requirements. For more information, see "[About {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}" in the {% data variables.product.prodname_ghe_managed %} documentation.{% else %}."{% endif %}

Puedes beneficiarte del poder de {% data variables.product.prodname_dotcom_the_website %}, incluso cuando utilizas {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %} si habilitas {% data variables.product.prodname_github_connect %}, el cual te permite configurar características y flujos de trabajo adicionales, tales como las {% data variables.product.prodname_dependabot_alerts %} para las dependencias inseguras.{% ifversion ghec %}

- "[About {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation
- "[Acerca de {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" en la documentación de {% data variables.product.prodname_ghe_managed %}{% else %} Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".{% endif %}

## Leer más

- [Compare {% data variables.product.prodname_dotcom %} to other DevOps solutions](https://resources.github.com/devops/tools/compare/) in {% data variables.product.company_short %} Resources

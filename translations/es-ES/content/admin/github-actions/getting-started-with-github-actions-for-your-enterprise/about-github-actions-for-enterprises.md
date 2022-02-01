---
title: About GitHub Actions for enterprises
shortTitle: Acerca de Acciones de GitHub
intro: '{% data variables.product.prodname_actions %} can improve developer productivity by automating your enterprise''s software development cycle.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
---

With {% data variables.product.prodname_actions %}, you can improve developer productivity by automating every phase of your enterprise's software development workflow.

| Tarea                                                                 | Más información                                                                                                                                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automatically test and build your application                         | "[Acerca de la integración continua](/actions/automating-builds-and-tests/about-continuous-integration)"                                                               |
| Deploy your application                                               | "[About continuous deployment](/actions/deployment/about-deployments/about-continuous-deployment)"                                                                     |
| Automatically and securely package code into artifacts and containers | "[About packaging with {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions)"                               |
| Automate your project management tasks                                | "[Using {% data variables.product.prodname_actions %} for project management](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)" |

{% data variables.product.prodname_actions %} helps your team work faster at scale. When large repositories start using {% data variables.product.prodname_actions %}, teams merge significantly more pull requests per day, and the pull requests are merged significantly faster. For more information, see "[Writing and shipping code faster](https://octoverse.github.com/writing-code-faster/#scale-through-automation)" in the State of the Octoverse.

{% data variables.product.prodname_actions %} also provides greater control over deployments. For example, you can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets.{% ifversion ghec or ghae-issue-4856 %} If your workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. This will allow you to stop storing credentials as long-lived secrets and provide other security benefits. For more information, see "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."{% endif %}

{% data variables.product.prodname_actions %} is developer friendly, because it's integrated directly into the familiar {% data variables.product.product_name %} experience.

You can create your own unique automations, or you can use and adapt workflows from our ecosystem of over 10,000 actions built by industry leaders and the open source community. Para obtener más información, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions)".

{% ifversion ghec %}You can enjoy the convenience of {% data variables.product.company_short %}-hosted runners, which are maintained and upgraded by {% data variables.product.company_short %}, or you{% else %}You{% endif %} can control your own private CI/CD infrastructure by using self-hosted runners. Self-hosted runners allow you to determine the exact environment and resources that complete your builds, testing, and deployments, without exposing your software development cycle to the internet. For more information, see {% ifversion ghec %}"[About {% data variables.product.company_short %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)" and{% endif %} "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% data variables.product.prodname_actions %} also includes tools to govern your enterprise's software development cycle and meet compliance obligations. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".


To learn more about how you can successfully adopt {% data variables.product.prodname_actions %} for your enterprise, follow the "[Adopt {% data variables.product.prodname_actions %} for your enterprise](/admin/guides#adopt-github-actions-for-your-enterprise)" learning path.

## Leer más

- "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)"{% ifversion ghec %}
- "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)"{% endif %}

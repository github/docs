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

{% ifversion ghes < 3.3 %}
{% note %}

**Nota:**{% data reusables.enterprise.upgrade-ghes-for-actions %}

{% endnote %}
{% endif %}

## About {% data variables.product.prodname_actions %} for enterprises

{% data reusables.actions.about-actions-for-enterprises %}

| Tarea                                                                 | Más información                                                                                                                                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automatically test and build your application                         | "[Acerca de la integración continua](/actions/automating-builds-and-tests/about-continuous-integration)"                                                               |
| Deploy your application                                               | "[About continuous deployment](/actions/deployment/about-deployments/about-continuous-deployment)"                                                                     |
| Automatically and securely package code into artifacts and containers | "[About packaging with {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions)"                               |
| Automate your project management tasks                                | "[Using {% data variables.product.prodname_actions %} for project management](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)" |

{% data variables.product.prodname_actions %} helps your team work faster at scale. When large repositories start using {% data variables.product.prodname_actions %}, teams merge significantly more pull requests per day, and the pull requests are merged significantly faster. For more information, see "[Writing and shipping code faster](https://octoverse.github.com/writing-code-faster/#scale-through-automation)" in the State of the Octoverse.

You can create your own unique automations, or you can use and adapt workflows from our ecosystem of over 10,000 actions built by industry leaders and the open source community. {% ifversion ghec %}For more information, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."{% else %}You can restrict your developers to using actions that exist on {% data variables.product.product_location %}, or you can allow your developers to access actions on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About using actions in your enterprise](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)."{% endif %}

{% data variables.product.prodname_actions %} is developer friendly, because it's integrated directly into the familiar {% data variables.product.product_name %} experience.

{% ifversion ghec %}You can enjoy the convenience of {% data variables.product.company_short %}-hosted runners, which are maintained and upgraded by {% data variables.product.company_short %}, or you{% else %}You{% endif %} can control your own private CI/CD infrastructure by using self-hosted runners. Self-hosted runners allow you to determine the exact environment and resources that complete your builds, testing, and deployments, without exposing your software development cycle to the internet. For more information, see {% ifversion ghec %}"[About {% data variables.product.company_short %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)" and{% endif %} "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% data variables.product.prodname_actions %} provides greater control over deployments. Por ejemplo, puedes utilizar ambientes para requerir aprobaciones para que un job pueda proceder, restringir qué ramas pueden activar un flujo de trabajo o limitar el acceso a los secretos.{% ifversion ghec or ghae-issue-4856 %} Si tus flujos de trabajo necesitan acceder a los recursos desde un proveedor de servicios en la nube que sea compatible con OpenID Conect (OIDC), puedes configurar tus flujos de trabajo para que se autentiquen directamente con dicho proveedor. OIDC provides security benefits such as eliminating the need to store credentials as long-lived secrets. For more information, see "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."{% endif %}

{% data variables.product.prodname_actions %} also includes tools to govern your enterprise's software development cycle and meet compliance obligations. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".

## About getting started with {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %}
{% data reusables.actions.ghes-actions-not-enabled-by-default %} After you finish planning, you can follow the instructions for enabling {% data variables.product.prodname_actions %}. For example, you may need to upgrade the CPU and memory resources for {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

{% else %}
After you finish planning, you can follow the instructions for getting started with {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección {% ifversion ghec %}"[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)".{% elsif ghae %}"[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".{% endif %}
{% endif %}


## Leer más

- "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)"{% ifversion ghec %}
- "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)"{% endif %}

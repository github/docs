---
title: About GitHub Actions for enterprises
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} can improve developer productivity by automating your enterprise''s software development cycle.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises
---


## About {% data variables.product.prodname_actions %} for enterprises

{% data reusables.actions.about-actions-for-enterprises %}

| Task | More information |
| ---- | ---------------- |
| Automatically test and build your application | [AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration) |
| Deploy your application | [AUTOTITLE](/actions/deployment/about-deployments/about-continuous-deployment) |
| Automatically and securely package code into artifacts and containers | [AUTOTITLE](/actions/publishing-packages/about-packaging-with-github-actions) |
| Automate your project management tasks | [AUTOTITLE](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management) |

{% data variables.product.prodname_actions %} helps your team work faster at scale. When large repositories start using {% data variables.product.prodname_actions %}, pull requests are typically merged faster, allowing teams to merge more pull requests per day.

You can create your own unique automations, or you can use and adapt workflows from our ecosystem of over 10,000 actions built by industry leaders and the open source community. {% ifversion ghec %}For more information, see [AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions).{% else %}You can restrict your developers to using actions that exist on {% data variables.location.product_location %}, or you can allow your developers to access actions on {% data variables.product.prodname_dotcom_the_website %}. For more information, see [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).{% endif %}

{% data variables.product.prodname_actions %} is developer friendly, because it's integrated directly into the familiar {% data variables.product.product_name %} experience.

{% ifversion ghec %}You can enjoy the convenience of {% data variables.product.company_short %}-hosted runners, which are maintained and upgraded by {% data variables.product.company_short %}, or you{% else %}You{% endif %} can control your own private CI/CD infrastructure by using self-hosted runners. Self-hosted runners allow you to determine the exact environment and resources that complete your builds, testing, and deployments, without exposing your software development cycle to the internet. For more information, see {% ifversion ghec %}[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners) and{% endif %} [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners).

{% data variables.product.prodname_actions %} provides greater control over deployments. For example, you can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets.{% ifversion ghec or ghes %} If your workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. OIDC provides security benefits such as eliminating the need to store credentials as long-lived secrets. For more information, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).{% endif %}

{% data variables.product.prodname_actions %} also includes tools to govern your enterprise's software development cycle and meet compliance obligations. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## About getting started with {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %}
{% data reusables.actions.ghes-actions-not-enabled-by-default %} After you finish planning, you can follow the instructions for enabling {% data variables.product.prodname_actions %}. For example, you may need to upgrade the CPU and memory resources for {% data variables.location.product_location %}. For more information, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

{% else %}
After you finish planning, you can follow the instructions for getting started with {% data variables.product.prodname_actions %}. For more information, see {% ifversion ghec %}[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud).{% endif %}
{% endif %}

## Further reading

* [AUTOTITLE](/actions/learn-github-actions/understanding-github-actions){% ifversion ghec %}
* [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions){% endif %}

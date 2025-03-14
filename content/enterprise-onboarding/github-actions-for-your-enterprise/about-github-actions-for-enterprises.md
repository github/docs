---
title: About GitHub Actions for enterprises
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} can improve developer productivity by automating your enterprise''s software development cycle.'
versions:
  ghec: '*'
type: overview
topics:
  - Actions
  - Enterprise
allowTitleToDifferFromFilename: true
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

You can create your own unique automations, or you can use and adapt workflows from our ecosystem of over 10,000 actions built by industry leaders and the open source community. For more information, see [AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions).

{% data variables.product.prodname_actions %} is developer friendly, because it's integrated directly into the familiar {% data variables.product.github %} experience.

You can enjoy the convenience of {% data variables.product.company_short %}-hosted runners, which are maintained and upgraded by {% data variables.product.company_short %}, or you can control your own private CI/CD infrastructure by using self-hosted runners. Self-hosted runners allow you to determine the exact environment and resources that complete your builds, testing, and deployments, without exposing your software development cycle to the internet. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners) and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners).

{% data variables.product.prodname_actions %} provides greater control over deployments. For example, you can use environments to require approval for a job to proceed, restrict which branches can trigger a workflow, or limit access to secrets.If your workflows need to access resources from a cloud provider that supports OpenID Connect (OIDC), you can configure your workflows to authenticate directly to the cloud provider. OIDC provides security benefits such as eliminating the need to store credentials as long-lived secrets. For more information, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).

{% data variables.product.prodname_actions %} also includes tools to govern your enterprise's software development cycle and meet compliance obligations. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## Next steps

1. To learn about {% data variables.product.prodname_actions %} basics, including core concepts and essential terminology, see [AUTOTITLE](/enterprise-onboarding/github-actions-for-your-enterprise/understanding-github-actions).
1. To get started planning a rollout of {% data variables.product.prodname_actions %} in your enterprise, see [AUTOTITLE](/enterprise-onboarding/github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).

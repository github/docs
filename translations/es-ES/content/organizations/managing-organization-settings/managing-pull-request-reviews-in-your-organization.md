---
title: Managing pull request reviews in your organization
intro: You can limit which users can approve or request changes to a pull requests in your organization.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Administrar las revisiones de las solicitudes de cambios
---

## Acerca de los límites de revisión de código

Predeterminadamente, en los repositorios públicos, cualquier usuario puede emitir revisiones que aprueben o soliciten cambios a una solicitud de cambios.

You can limit who is able to approve or request changes to pull requests in public repositories owned by your organization. After you enable code review limits, anyone can comment on pull requests in your public repositories, but only people with explicit access to a repository can approve a pull request or request changes.

You can also enable code review limits for individual repositories. If you enable or limits for your organization, you will override any limits for individual repositories owned by the organization. For more information, see "[Managing pull request reviews in your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)."

## Habilitar los límites de revisión de código

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "report" aria-label="The report icon" %} Moderation**.
1. Under "{% octicon "report" aria-label="The report icon" %} Moderation", click **Code review limits**. ![Screenshot of sidebar item for code review limits for organizations](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Review the information on screen. Click **Limit review on all repositories** to limit reviews to those with explicit access, or click **Remove review limits from all repositories** to remove the limits from every public repository in your organization. ![Screenshot of code review limits settings for organizations](/assets/images/help/organizations/code-review-limits-organizations-settings.png)

---
title: Disabling issues
intro: You may wish to turn issues off for your repository if you do not accept contributions or bug reports.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Customize and configure a repository
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features," deselect **Issues**.

If you decide to enable issues again in the future, any issues that were previously added will be available.

{% ifversion disable-restrict-issues %}

1. To restrict issues to collaborators only, in the dropdown under "Issues" select **Collaborators only**.

    In personal repositories, a collaborator is anyone who has been invited to the repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository#collaborator-access-for-a-repository-owned-by-a-personal-account).

    In organization repositories, a collaborator is a user who has been granted the write, maintain, or admin role for the repository. For more information about organization roles, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#repository-roles-for-organizations).

{% endif %}

{% ifversion fpt or ghec %}

> [!TIP]
> Please contact us through the {% data variables.contact.contact_support_portal %} if you want to turn off issues because of abuse from strangers. {% data reusables.policies.abuse %}

{% endif %}

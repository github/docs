---
title: Disabling pull requests
intro: You may wish to modify pull request access for your repository if you want to restrict contributions, or disable them entirely.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-pull-requests
  - /articles/disabling-pull-requests
  - /github/managing-your-work-on-github/disabling-pull-requests
  - /github/administering-a-repository/managing-repository-settings/disabling-pull-requests
versions:
  feature: disable-restrict-prs
topics:
  - Pull requests
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. To disable pull requests entirely, under "Features", deselect **Pull requests**.

If you decide to enable pull requests again in the future, any pull requests that were previously added will be available.

1. To restrict pull requests to collaborators only, in the dropdown under "Pull requests" select **Collaborators only**.

    In personal repositories, a collaborator is anyone who has been invited to the repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository#collaborator-access-for-a-repository-owned-by-a-personal-account).

    In organization repositories, a collaborator is a user who has been granted the write, maintain, or admin role for the repository. For more information about organization roles, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#repository-roles-for-organizations).

{% ifversion fpt or ghec %}

> [!TIP]
> Please contact us through the {% data variables.contact.contact_support_portal %} if you want to turn off pull requests because of abuse from strangers. {% data reusables.policies.abuse %}

{% endif %}

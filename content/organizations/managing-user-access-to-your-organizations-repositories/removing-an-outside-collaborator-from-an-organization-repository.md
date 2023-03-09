---
title: Removing an outside collaborator from an organization repository
intro: Owners and repository admins can remove an outside collaborator's access to a repository.
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove collaborator
---

{% ifversion fpt or ghec %}

{% warning %}

**Warning:**
- When removing an outside collaborator from a private repository, the paid license count does not automatically downgrade. To pay for fewer licenses after removing users from your organization, follow the steps in "[AUTOTITLE](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

- You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.

{% endwarning %}

{% endif %}

While forks of private repositories are deleted when a collaborator is removed, the person will still retain any local clones of your repository.

## Removing outside collaborators from all repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
1. Select the outside collaborator or outside collaborators you'd like to remove from the organization.

   ![Screenshot of the first two users in the list of outside collaborators. To the left of each user, a checkbox is checked and outlined in dark orange.](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
1. Above the list of outside collaborators, select the **X collaborators selected...** dropdown menu, and click **Remove from all repositories**.

   ![Screenshot of the list of outside collaborators. Above the list, a dropdown menu, labeled "2 collaborators selected..." is outlined in dark orange.](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
1. Review the outside collaborator or outside collaborators who will be removed from the organization, then click **Remove outside collaborators**.

## Removing an outside collaborator from a particular repository in an organization

If you only want to remove an outside collaborator from certain repositories in your organization, you can remove this person's access to one specific repository at a time.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. To the right of the username of the person you want to remove, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**.
  ![Manage access button](/assets/images/help/organizations/member-manage-access.png)
6. To the right of the repository that you want to remove the outside collaborator from, click **Manage access**.
![Select manage access button next to a repository the outside collaborator has access to](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. To completely remove the outside collaborator's access to the repository, in the upper right corner, click **Remove access to this repository**.
![Remove access to this repository button](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. To confirm, click **Remove access**.

You can also remove an outside collaborator from a repository in the access overview in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)."

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)"

---
title: Enforcing repository management policies in your enterprise account
intro: 'Enterprise owners can enforce certain repository management policies for all organizations owned by an enterprise account, or allow policies to be set in each organization.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

For more information, see "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

### Enforcing a policy on default repository permissions

Across all organizations owned by your enterprise account, you can set a default repository permission level (none, read, write, or admin) for organization members, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. On the **Repository policies** tab, under "Default permissions", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Default permissions", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository permissions policy options](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### Enforcing a policy on creating repositories

Across all organizations owned by your enterprise account, you can allow members to create repositories, restrict repository creation to organization owners, or allow owners to administer the setting on the organization level. If you allow members to create repositories, you can choose whether members can create any combination of public, private, and internal repositories. {% data reusables.repositories.internal-repo-default %} For more information about internal repositories, see "[Creating an internal repository](/articles/creating-an-internal-repository)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository creation", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. Click **Save**.

### Enforcing a policy on forking private or internal repositories

Across all organizations owned by your enterprise account, you can allow people with access to a private or internal repository to fork the repository, never allow forking of private or internal repositories, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository forking", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository forking", use the drop-down menu and choose a policy.
  ![Drop-down menu with repository forking policy options](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### Enforcing a policy on inviting outside collaborators to repositories

Across all organizations owned by your enterprise account, you can allow members to invite outside collaborators to repositories, restrict outside collaborator invitations to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository invitations", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository invitations", use the drop-down menu and choose a policy.
  ![Drop-down menu with outside collaborator invitation policy options](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### Enforcing a policy on changing repository visibility

Across all organizations owned by your enterprise account, you can allow members with admin permissions to change a repository's visibility, restrict repository visibility changes to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository visibility change", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Enforcing a policy on deleting or transferring repositories

Across all organizations owned by your enterprise account, you can allow members with admin permissions to delete or transfer a repository, restrict repository deletion and transfers to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository deletion and transfer", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Enforcing a policy on deleting issues

Across all organizations owned by your enterprise account, you can allow members with admin permissions to delete issues in a repository, restrict issue deletion to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Repository issue deletion", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository issue deletion", use the drop-down menu and choose a policy.
  ![Drop-down menu with issue deletion policy options](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### Enforcing a policy on the default branch name

Across all organizations owned by your enterprise account, you can set the default branch name for any new repositories that members create. You can choose to enforce that default branch name across all organizations or allow individual organizations to set a different one.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Default branch name", enter the default branch name that new repositories should use.
    ![Text box for entering default branch name](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**.
    ![Enforcement checkbox](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Click **Update**.
    ![Update button](/assets/images/help/business-accounts/default-branch-name-update.png)

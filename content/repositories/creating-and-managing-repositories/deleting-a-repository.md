---
title: Deleting a repository
intro: You can delete any repository or fork if you're either an organization owner or have admin permissions for the repository or fork. Deleting a forked repository does not delete the upstream repository.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---
{% data reusables.organizations.owners-and-admins-can %} delete an organization repository. If **Allow members to delete or transfer repositories for this organization** has been disabled, only organization owners can delete organization repositories. {% data reusables.organizations.new-repo-permissions-more-info %}

Deleting a public repository will not delete any forks of the repository.

{% warning %}

**Warnings**:

* Deleting a repository will **permanently** delete release attachments and team permissions. This action **cannot** be undone.
* Deleting a private{% ifversion ghes or ghec %} or internal{% endif %} repository will delete all forks of the repository.

{% endwarning %}

Some deleted repositories can be restored within 90 days of deletion. {% ifversion ghes %}Your site administrator may be able to restore a deleted repository for you. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)." {% else %}For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/restoring-a-deleted-repository)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. On the "General" settings page (which is selected by default), scroll down to the "Danger Zone" section and click **Delete this repository**.
1. Click **I want to delete this repository**.
1. Read the warnings and click **I have read and understand these effects**.
1. To verify that you're deleting the correct repository, in the text box, type the name of the repository you want to delete.
1. Click **Delete this repository**.

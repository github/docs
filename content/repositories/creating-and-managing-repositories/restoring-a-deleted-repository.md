---
title: Restoring a deleted repository
intro: '{% ifversion ghes or ghae %}An enterprise owner{% elsif fpt or ghec %}You{% endif %} can restore some deleted repositories to recover their contents.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
---

{% ifversion ghes or ghae %}

Usually, deleted repositories can be restored within 90 days by an enterprise owner{% ifversion ghes %} on {% data variables.location.product_location %}{% endif %}. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)."

{% else %}

## About repository restoration

A deleted repository can be restored within 90 days, unless the repository was part of a fork network that is not currently empty. A fork network consists of a parent repository, the repository's forks, and forks of the repository's forks. If your repository was part of a fork network, it cannot be restored unless every other repository in the network is deleted or has been detached from the network. For more information about forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

If you want to restore a repository that was part of a fork network that is not currently empty, you can contact {% data variables.contact.contact_support %}.

It can take up to an hour after a repository is deleted before that repository is available for restoration.

Restoring a repository will not restore release attachments or team permissions. Issues that are restored will not be labeled.

## Restoring a deleted repository that was owned by a personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.repo-tab %}
{% data reusables.user-settings.deleted-repos %}
{% data reusables.user-settings.restore-repo %}
{% data reusables.user-settings.restore-confirmation %}

## Restoring a deleted repository that was owned by an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user-settings.restore-repo %}
{% data reusables.user-settings.restore-confirmation %}

## Further reading

- "[AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository)"

{% endif %}

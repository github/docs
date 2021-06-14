---
title: Enabling improved container support
intro: 'To use {% data variables.product.prodname_github_container_registry %}, you must enable it for your user or organization account.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---
{% note %}

**Note:** {% data variables.product.prodname_github_container_registry %} is currently in public beta and subject to change. During the beta, storage and bandwidth are free. Weitere Informationen findest Du unter „[Informationen zu {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)“.

{% endnote %}

### Enabling {% data variables.product.prodname_github_container_registry %} for your personal account

Once {% data variables.product.prodname_github_container_registry %} is enabled for your personal user account, you can publish containers to {% data variables.product.prodname_github_container_registry %} owned by your user account.

To use {% data variables.product.prodname_github_container_registry %} within an organization, the organization owner must enable the feature for organization members.

{% data reusables.feature-preview.feature-preview-setting  %}
2. On the left, select "Improved container support", then click **Enable**. ![Improved container support](/assets/images/help/settings/improved-container-support.png)

### Enabling {% data variables.product.prodname_github_container_registry %} for your organization account

Before organization owners or members can publish container images to {% data variables.product.prodname_github_container_registry %}, an organization owner must enable the feature preview for the organization.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. On the left, click **Packages**.
5. Under "Improved container support", select "Enable improved container support" and click **Save**. ![Enable container registry support option and save button](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - To enable organization members to create public container images, click **Public**.
    - To enable organization members to create private container images that are only visible to other organization members, click **Private**. You can further customize the visibility of private container images. For more information, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

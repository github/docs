---
title: Enabling GitHub Container Registry for your organization
intro: 'In an organization, organization admins can allow organization members to publish public or private container images to {% data variables.product.prodname_github_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Before organization members can publish container images to {% data variables.product.prodname_github_container_registry %}, an organization admin must enable package creation. 

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Package creation", choose whether you want to enable the creation of public or private container images.
    - To enable organization members to create a public container image, click **Public**.
    - To enable organization members to create a private container image that is only visible to other organization members, click **Private**. You can further customize the visibility of a private container image. For more information, see "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

    ![Options to enable public or private packages ](/assets/images/help/package-registry/package-creation-org-settings.png)

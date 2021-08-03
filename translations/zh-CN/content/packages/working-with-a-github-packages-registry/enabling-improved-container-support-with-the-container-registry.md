---
title: Enabling improved container support with the Container registry
intro: 'To use the {% data variables.product.prodname_container_registry %}, you must enable it for your user or organization account.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** The {% data variables.product.prodname_container_registry %} is currently in public beta and subject to change. 在测试阶段，存储和带宽是免费的。 更多信息请参阅“[{% data variables.product.prodname_registry %} 简介](/packages/learn-github-packages/introduction-to-github-packages)”。

{% endnote %}

{% data reusables.package_registry.docker-vs-container-registry %}

### Enabling the {% data variables.product.prodname_container_registry %} for your personal account

Once the {% data variables.product.prodname_container_registry %} is enabled for your personal user account, you can publish containers to the {% data variables.product.prodname_container_registry %} owned by your user account.

To use the {% data variables.product.prodname_container_registry %} within an organization, the organization owner must enable the feature for organization members.

{% data reusables.feature-preview.feature-preview-setting  %}
2. 在左侧，选择“Improved container support（改进的容器支持）”，然后单击 **Enable（启用）**。 ![改进的容器支持](/assets/images/help/settings/improved-container-support.png)

### Enabling the {% data variables.product.prodname_container_registry %} for your organization account

Before organization owners or members can publish container images to the {% data variables.product.prodname_container_registry %}, an organization owner must enable the feature preview for the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. 在左侧，单击 **Packages（包）**。
5. 在“Improved container support（改进的容器支持）”下，选择“Enable improved container support（启用改进的容器支持）”，然后单击 **Save（保存）**。 ![启用容器注册表支持选项和保存按钮](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. 在“Container creation（容器创建）”下，选择是要启用公共、私有或内部容器映像。
    - To enable organization members to create public container images, select **Public**.
    - To enable organization members to create private container images that are only visible to other organization members, select **Private**. 您可以进一步自定义私有容器映像的可见性。 For more information, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, select **Internal**. ![组织成员发布的容器图像的可见性选项](/assets/images/help/package-registry/container-creation-org-settings.png)

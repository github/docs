---
title: 启用改进的容器支持
intro: '要使用 {% data variables.product.prodname_github_container_registry %}，您必须为您的用户或组织帐户启用它。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**注：**{% data variables.product.prodname_github_container_registry %} 目前处于公测阶段，可能会更改。 在测试阶段，存储和带宽是免费的。 更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”。

{% endnote %}

### 为您的个人帐户启用 {% data variables.product.prodname_github_container_registry %}

一旦您的个人用户帐户启用 {% data variables.product.prodname_github_container_registry %}，您就可以发布容器到您的用户帐户所拥有的 {% data variables.product.prodname_github_container_registry %}。

要在组织内使用 {% data variables.product.prodname_github_container_registry %}，组织所有者必须为组织成员启用该功能。

{% data reusables.feature-preview.feature-preview-setting  %}
2. 在左侧，选择“Improved container support（改进的容器支持）”，然后单击 **Enable（启用）**。 ![改进的容器支持](/assets/images/help/settings/improved-container-support.png)

### 为您的组织帐户启用 {% data variables.product.prodname_github_container_registry %}

在组织所有者或成员将容器映像发布到 {% data variables.product.prodname_github_container_registry %} 之前，组织管理员必须为组织启用功能预览。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在左侧，单击 **Packages（包）**。
5. 在“Improved container support（改进的容器支持）”下，选择“Enable improved container support（启用改进的容器支持）”，然后单击 **Save（保存）**。 ![启用容器注册表支持选项和保存按钮](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. 在“Container creation（容器创建）”下，选择是要启用公共、私有或内部容器映像。
    - 要让组织成员创建公共容器映像，请单击 **Public（公共）**。
    - 要让组织成员创建只对其他组织成员可见的私有容器映像，请单击 **Private（私有）**。 您可以进一步自定义私有容器映像的可见性。 更多信息请参阅“[配置容器映像的访问控制和可见性](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)”。
    - **仅适用于 {% data variables.product.prodname_ghe_cloud %} ：**要让组织成员创建仅供其他组织成员可见的内部容器映像，请单击 **Internal（内部）**。 ![组织成员发布的容器图像的可见性选项](/assets/images/help/package-registry/container-creation-org-settings.png)

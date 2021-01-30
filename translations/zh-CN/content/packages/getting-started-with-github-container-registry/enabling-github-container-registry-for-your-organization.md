---
title: 为组织启用 GitHub Container Registry
intro: '在组织中，组织管理员可以允许组织成员将公共或私有容器映像发布到 {% data variables.product.prodname_github_container_registry %}。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

在组织成员将容器映像发布到 {% data variables.product.prodname_github_container_registry %} 之前，组织管理员必须启用包创建。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Package creation（包创建）”下，选择是要启用公共容器映像还是私有容器映像。
    - 要让组织成员创建公共容器映像，请单击 **Public（公共）**。
    - 要让组织成员创建只对其他组织成员可见的私有容器映像，请单击 **Private（私有）**。 您可以进一步自定义私有容器映像的可见性。 更多信息请参阅“[配置容器映像的访问控制和可见性](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)”。

    ![用于启用公共或私有包的选项 ](/assets/images/help/package-registry/package-creation-org-settings.png)

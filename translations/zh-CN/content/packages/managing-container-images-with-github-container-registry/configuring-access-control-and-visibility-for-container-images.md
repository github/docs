---
title: 配置容器映像的访问控制和可见性
intro: '选择谁对容器映像具有读取、写入或管理员访问权限，以及容器映像在 {% data variables.product.prodname_dotcom %} 上的可见性。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### 为个人帐户配置对容器映像的访问

如果您对用户帐户拥有的容器映像具有管理员权限，您可以向其他用户分配读取、写入或管理员角色。 有关这些权限角色的更多信息，请参阅“[容器映像的可见性和访问权限](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)”。

{% data reusables.package_registry.package-settings-from-user-level %}
1. 在软件包设置页面上，单击 **Invite teams or people（邀请团队或人员）**，然后输入名称、用户名或您想要授予访问权限的人员的电子邮件地址。 不能授予团队访问用户帐户拥有的容器映像。 ![容器访问邀请按钮](/assets/images/help/package-registry/container-access-invite.png)
1. 在用户名或团队名称旁边，使用“Role（角色）”下拉菜单选择所需的权限级别。 ![容器访问选项](/assets/images/help/package-registry/container-access-control-options.png)

所选用户将自动被授予访问权限，不需要先接受邀请。

### 为企业配置对容器映像的访问

如果您对组织拥有的容器映像具有管理员权限，您可以向其他用户和团队分配读取、写入或管理员角色。 有关这些权限角色的更多信息，请参阅“[容器映像的可见性和访问权限](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)”。

如果您的软件包由组织和私人拥有，则您只能向其他组织成员或团队授予访问。

对于组织映像容器，组织管理员必须先启用包，然后才能将可见性设置为公共。 更多信息请参阅“[为组织启用 GitHub Container Registry](/packages/getting-started-with-github-container-registry/enabling-github-container-registry-for-your-organization)”。

{% data reusables.package_registry.package-settings-from-org-level %}
1. 在软件包设置页面上，单击 **Invite teams or people（邀请团队或人员）**，然后输入名称、用户名或您想要授予访问权限的人员的电子邮件地址。 您还可以从组织输入团队名称，以允许所有团队成员访问。 ![容器访问邀请按钮](/assets/images/help/package-registry/container-access-invite.png)
1. 在用户名或团队名称旁边，使用“Role（角色）”下拉菜单选择所需的权限级别。 ![容器访问选项](/assets/images/help/package-registry/container-access-control-options.png)

所选用户或团队将自动被授予访问权限，不需要先接受邀请。

### 为个人帐户配置容器映像的可见性

首次发布包时，默认可见性是私有的，只有您才能看到包。 您可以通过更改访问设置来修改私有或公共容器映像的访问权限。

公共包可以匿名访问，无需身份验证。 包一旦被设为公共，便无法再次将其设为私有。

{% data reusables.package_registry.package-settings-from-user-level %}
5. 在“Danger Zone（危险区域）”下，选择可见性设置：
    - 要使容器映像对任何人都可见，请单击“**Make public（设为公共）**”。
    {% warning %}

    **警告：**包一旦被设为公共，便无法再次将其设为私有。

    {% endwarning %}
    - 要使容器映像只对选择的人员可见，请单击“**Make private（设为私有）**”。 ![容器可见性选项](/assets/images/help/package-registry/container-visibility-option.png)

### 为组织配置容器映像的可见性

首次发布包时，默认可见性是私有的，只有您才能看到包。 您可以通过访问设置授予用户或团队对容器映像的不同访问角色。

公共包可以匿名访问，无需身份验证。 包一旦被设为公共，便无法再次将其设为私有。

对于组织映像容器，组织管理员必须先启用公共包，然后才能将可见性设置为公共。 更多信息请参阅“[为组织启用 GitHub Container Registry](/packages/getting-started-with-github-container-registry/enabling-github-container-registry-for-your-organization)”。

{% data reusables.package_registry.package-settings-from-org-level %}
5. 在“Danger Zone（危险区域）”下，选择可见性设置：
    - 要使容器映像对任何人都可见，请单击“**Make public（设为公共）**”。
    {% warning %}

    **警告：**包一旦被设为公共，便无法再次将其设为私有。

    {% endwarning %}
    - 要使容器映像只对选择的人员可见，请单击“**Make private（设为私有）**”。 ![容器可见性选项](/assets/images/help/package-registry/container-visibility-option.png)

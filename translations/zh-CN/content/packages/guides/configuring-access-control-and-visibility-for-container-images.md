---
title: 配置容器映像的访问控制和可见性
intro: '选择谁对容器映像具有读取、写入或管理员访问权限，以及容器映像在 {% data variables.product.prodname_dotcom %} 上的可见性。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
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

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

对于组织映像容器，组织管理员必须先启用包，然后才能将可见性设置为公共。 更多信息请参阅“[启用改进的容器支持](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)”。

{% data reusables.package_registry.package-settings-from-org-level %}
1. 在软件包设置页面上，单击 **Invite teams or people（邀请团队或人员）**，然后输入名称、用户名或您想要授予访问权限的人员的电子邮件地址。 您还可以从组织输入团队名称，以允许所有团队成员访问。 ![容器访问邀请按钮](/assets/images/help/package-registry/container-access-invite.png)
1. 在用户名或团队名称旁边，使用“Role（角色）”下拉菜单选择所需的权限级别。 ![容器访问选项](/assets/images/help/package-registry/container-access-control-options.png)

所选用户或团队将自动被授予访问权限，不需要先接受邀请。

### Inheriting access for a container image from a repository

To simplify package management through {% data variables.product.prodname_actions %} workflows, you can enable a container image to inherit the access permissions of a repository by default.

If you inherit the access permissions of the repository where your package's workflows are stored, then you can adjust access to your package through the repository's permissions.

Once a repository is synced, you can't access the package's granular access settings. To customize the package's permissions through the granular package access settings, you must remove the synced repository first.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Under "Repository source", select **Inherit access from repository (recommended)**. ![Inherit repo access checkbox](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### Ensuring workflow access to your package

To ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% note %}

**Note:** Syncing your container image with a repository through the **Actions access** menu option is different than connecting your container to a repository. For more information about linking a repository to your container, see "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

{% endnote %}

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like repository members to have to your container image. Outside collaborators will not be included. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization)."

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

### Container creation visibility for organization members

You can choose the visibility of containers that organization members can publish by default.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在左侧，单击 **Packages（包）**。
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - 要让组织成员创建公共容器映像，请单击 **Public（公共）**。
    - 要让组织成员创建只对其他组织成员可见的私有容器映像，请单击 **Private（私有）**。 您可以进一步自定义私有容器映像的可见性。
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

### 为组织配置容器映像的可见性

首次发布包时，默认可见性是私有的，只有您才能看到包。 您可以通过访问设置授予用户或团队对容器映像的不同访问角色。

公共包可以匿名访问，无需身份验证。 包一旦被设为公共，便无法再次将其设为私有。

对于组织映像容器，组织管理员必须先启用公共包，然后才能将可见性设置为公共。 更多信息请参阅“[启用改进的容器支持](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)”。

{% data reusables.package_registry.package-settings-from-org-level %}
5. 在“Danger Zone（危险区域）”下，选择可见性设置：
    - 要使容器映像对任何人都可见，请单击“**Make public（设为公共）**”。
    {% warning %}

    **警告：**包一旦被设为公共，便无法再次将其设为私有。

    {% endwarning %}
    - 要使容器映像只对选择的人员可见，请单击“**Make private（设为私有）**”。 ![容器可见性选项](/assets/images/help/package-registry/container-visibility-option.png)

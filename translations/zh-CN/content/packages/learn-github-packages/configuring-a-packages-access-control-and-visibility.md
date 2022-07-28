---
title: 配置包的访问控制和可见性
intro: '选择谁对容器映像具有读取、写入或管理员访问权限，以及容器映像在 {% data variables.product.prodname_dotcom %} 上的可见性。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: 访问控制和可见性
---

{% data reusables.package_registry.container-registry-ghes-beta %}

具有精细权限的包仅限于个人用户或组织帐户。 您可以从与包相连（或链接）的仓库分别更改包的访问控制和可见性。

目前，您只能对 {% data variables.product.prodname_container_registry %} 使用粒度权限。 我们的其他包注册表（如 npm 注册表）不支持粒度权限。{% ifversion docker-ghcr-enterprise-migration %} 有关迁移到 {% data variables.product.prodname_container_registry %} 的详细信息，请参阅“[从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)”。{% endif %}

有关仓库作用域的包、与包相关的 PAT 作用域或管理操作工作流程的权限的更多信息，请参阅“[关于 GitHub Packages 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”。

## 容器映像的可见性和访问权限

{% data reusables.package_registry.visibility-and-access-permissions %}

## 为个人帐户配置对容器映像的访问

如果您对个人帐户拥有的容器映像具有管理员权限，您可以向其他用户分配读取、写入或管理员角色。 有关这些权限角色的更多信息，请参阅“[容器映像的可见性和访问权限](#visibility-and-access-permissions-for-container-images)”。

如果您的软件包是私人或内部的并且由组织拥有，则您只能向其他组织成员或团队授予访问。

{% data reusables.package_registry.package-settings-option %}
1. 在软件包设置页面上，单击 **Invite teams or people（邀请团队或人员）**，然后输入名称、用户名或您想要授予访问权限的人员的电子邮件地址。 不能授予团队访问个人帐户拥有的容器映像。 ![容器访问邀请按钮](/assets/images/help/package-registry/container-access-invite.png)
1. 在用户名或团队名称旁边，使用“Role（角色）”下拉菜单选择所需的权限级别。 ![容器访问选项](/assets/images/help/package-registry/container-access-control-options.png)

所选用户将自动被授予访问权限，不需要先接受邀请。

## 为企业配置对容器映像的访问

如果您对组织拥有的容器映像具有管理员权限，您可以向其他用户和团队分配读取、写入或管理员角色。 有关这些权限角色的更多信息，请参阅“[容器映像的可见性和访问权限](#visibility-and-access-permissions-for-container-images)”。

如果您的软件包是私人或内部的并且由组织拥有，则您只能向其他组织成员或团队授予访问。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
1. 在软件包设置页面上，单击 **Invite teams or people（邀请团队或人员）**，然后输入名称、用户名或您想要授予访问权限的人员的电子邮件地址。 您还可以从组织输入团队名称，以允许所有团队成员访问。 ![容器访问邀请按钮](/assets/images/help/package-registry/container-access-invite.png)
1. 在用户名或团队名称旁边，使用“Role（角色）”下拉菜单选择所需的权限级别。 ![容器访问选项](/assets/images/help/package-registry/container-access-control-options.png)

所选用户或团队将自动被授予访问权限，不需要先接受邀请。

## 从仓库继承容器映像的访问权限

要通过 {% data variables.product.prodname_actions %} 工作流程简化包管理，您可以让容器映像默认继承仓库的访问权限。

如果您继承了存储包工作流程的仓库的访问权限，则可以通过仓库的权限调整对包的访问权限。

仓库一旦同步，您就无法访问包的精细访问设置。 要通过精细的包访问设置自定义包的权限，您必须先删除同步的仓库。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
2. 在“Repository source（仓库来源）”下，选择 **Inherit access from repository (recommended)（从仓库继承访问权限 [推荐]）**。 ![继承仓库访问权限复选框](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## 确保工作流程访问您的包

为确保 {% data variables.product.prodname_actions %} 工作流程能访问您的包，您必须授予存储工作流程的仓库以明确的访问权限。

指定的仓库不需要是保存包源代码的仓库。 您可以授予多个仓库工作流程对包的访问权限。

{% note %}

**注意：**通过 **Actions access（操作访问）**菜单选项同步容器映像与仓库不同于将容器连接到仓库。 有关将仓库链接到容器的更多信息，请参阅“[将仓库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。

{% endnote %}

### 用户帐户拥有的容器映像的 {% data variables.product.prodname_actions %} 访问权限

{% data reusables.package_registry.package-settings-option %}
1. 在左侧边栏中，单击 **Actions access（操作访问）**。 ![左侧菜单中的"Actions access（操作访问）"选项](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. 为确保工作流程有权访问容器包，您必须添加存储工作流程的仓库。 单击 **Add repository（添加仓库）**并搜索要添加的仓库。 !["添加仓库"按钮](/assets/images/help/package-registry/add-repository-button.png)
3. （使用“role（角色）”下拉菜单，选择您希望仓库访问您的容器映像所必须拥有的默认访问权限。 ![授予仓库的权限访问级别](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

要进一步自定义对容器映像的访问，请参阅“[配置对个人帐户的容器映像的访问](#configuring-access-to-container-images-for-your-personal-account)”。

### 组织拥有的容器映像的 {% data variables.product.prodname_actions %} 访问权限

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
1. 在左侧边栏中，单击 **Actions access（操作访问）**。 ![左侧菜单中的"Actions access（操作访问）"选项](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. 单击 **Add repository（添加仓库）**并搜索要添加的仓库。 !["添加仓库"按钮](/assets/images/help/package-registry/add-repository-button.png)
3. 使用“role（角色）”下拉菜单，选择您希望仓库成员访问您的容器映像所必须拥有的默认访问权限。 外部协作者将不包括在内。 ![授予仓库的权限访问级别](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

要进一步自定义对容器映像的访问，请参阅“[配置对组织的容器映像的访问](#configuring-access-to-container-images-for-an-organization)”。

{% ifversion fpt or ghec %}
## 确保 {% data variables.product.prodname_codespaces %} 访问您的软件包

默认情况下，代码空间可以无缝访问 {% data variables.product.prodname_dotcom %} 容器注册表中的某些包，例如在选中了 **Inherit access（继承访问）**选项的同一仓库中发布的包。 有关自动配置哪些访问权限的详细信息，请参阅“[访问存储在容器注册表 {% data variables.product.prodname_dotcom %} 中的映像](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry#accessing-images-stored-in-github-container-registry)”。

否则，为了确保代码空间能够访问您的软件包，必须授予对启动代码空间的仓库的访问权限。

指定的仓库不需要是保存包源代码的仓库。 您可以授予多个仓库中的代码空间对包的访问权限。

选择您想与仓库中的代码空间共享的包后，可以授予该仓库访问权限。

1. 在右侧边栏单击 **Package settings（包设置）**。

   ![右侧菜单中的"Package settings（包设置）"选项](/assets/images/help/package-registry/package-settings.png)

2. 在“Manage Codespaces access（管理 Codespaces 访问）”下，单击 **Add repository（添加仓库）**。

   !["添加仓库"按钮](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. 搜索要添加的仓库。

   !["添加仓库"按钮](/assets/images/help/package-registry/manage-codespaces-access-search.png)

4. 对要允许访问的任何其他仓库重复此步骤。

5. 如果仓库的代码空间不再需要访问映像，则可以删除访问权限。

   !["Remove repository（删除仓库）"按钮](/assets/images/help/package-registry/manage-codespaces-access-item.png)

{% endif %}
## 为个人帐户配置容器映像的可见性

首次发布包时，默认可见性是私有的，只有您才能看到包。 您可以通过更改访问设置来修改私有或公共容器映像的访问权限。

公共包可以匿名访问，无需身份验证。 包一旦被设为公共，便无法再次将其设为私有。

{% data reusables.package_registry.package-settings-option %}
5. 在“Danger Zone（危险区域）”下，选择可见性设置：
    - 要使容器映像对任何人都可见，请单击“**Make public（设为公共）**”。
    {% warning %}

    **警告：**包一旦被设为公共，便无法再次将其设为私有。

    {% endwarning %}
    - 要使容器映像只对选择的人员可见，请单击“**Make private（设为私有）**”。 ![容器可见性选项](/assets/images/help/package-registry/container-visibility-option.png)

## 组织成员的容器创建可见性

您可以选择组织成员默认可以发布的容器的可见性。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. 在左侧，单击 **Packages（包）**。
6. 在“Container creation（容器创建）”下，选择是要启用公共、私有或内部容器映像。
    - 要让组织成员创建公共容器映像，请单击 **Public（公共）**。
    - 要让组织成员创建只对其他组织成员可见的私有容器映像，请单击 **Private（私有）**。 您可以进一步自定义私有容器映像的可见性。
    - 要使组织成员能够创建对所有组织成员可见的内部容器映像，请单击 **Internal（内部）**。 如果组织属于企业，则容器映像将对所有企业成员可见。 ![组织成员发布的容器图像的可见性选项](/assets/images/help/package-registry/container-creation-org-settings.png)

## 为组织配置容器映像的可见性

首次发布包时，默认可见性是私有的，只有您才能看到包。 您可以通过访问设置授予用户或团队对容器映像的不同访问角色。

公共包可以匿名访问，无需身份验证。 包一旦被设为公共，便无法再次将其设为私有。

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. 在“Danger Zone（危险区域）”下，选择可见性设置：
    - 要使容器映像对任何人都可见，请单击“**Make public（设为公共）**”。
    {% warning %}

    **警告：**包一旦被设为公共，便无法再次将其设为私有。

    {% endwarning %}
    - 要使容器映像只对选择的人员可见，请单击“**Make private（设为私有）**”。 ![容器可见性选项](/assets/images/help/package-registry/container-visibility-option.png)

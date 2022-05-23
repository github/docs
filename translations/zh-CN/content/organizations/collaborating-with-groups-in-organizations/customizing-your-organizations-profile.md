---
title: 自定义组织的配置文件
intro: 您可以通过自定义组织的配置文件来共享有关组织的信息.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: 自定义组织配置文件
---

{% if org-profile-pin-private %}

## 关于组织的资料页面

您可以自定义组织的概述页面，以显示专用于公共用户或组织成员的内容。 已登录到 {% data variables.product.prodname_dotcom %} 的组织成员在访问组织的个人资料页面时，将显示成员视图。 非组织成员的用户将显示公共视图。

![组织配置文件页面的图像](/assets/images/help/organizations/new_organization_page.png)
{% endif %}

### 固定的仓库

通过为公共用户选择最多六个存储库以及为组织成员选择六个存储库，您可以让用户轻松访问重要或常用的存储库。 将存储库固定到组织配置文件后，“固定”部分将显示在配置文件页面的“存储库”部分上方。

只有组织所有者才能固定存储库。 更多信息请参阅“[将仓库固定到组织的资料](#pinning-repositories-to-your-organizations-profile)”。

### 组织资料 README

您可以通过为公共用户和组织成员创建组织资料 README 来共享有关如何与组织互动的信息。 {% data variables.product.prodname_dotcom %} 在组织的“Overview（概述）”选项卡中显示组织资料 README。

您可以选择要包含组织资料 README 的信息。 以下是一些可能有帮助的信息示例。

- “About（关于）”部分介绍您的组织
- 在组织中获取帮助的指南

您可以使用 {% data variables.product.company_short %} Flavored Markdown 在组织资料 README 中设置文本格式和包含表情符号、图像及 GIF。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”。

## 添加公共组织资料 README

1. 如果您的组织还没有公共 `.github` 存储库，请创建一个公共 `.github` 存储库。
2. 在组织的 `.github` 存储库中，在 `profile` 文件夹中创建 `README.md` 文件。
3. 将更改提交到 `README.md` 文件。 `README.md` 的内容将显示在组织的公共资料中。

   ![组织的公共 README 的图像](/assets/images/help/organizations/org_public_readme.png)

{% if org-profile-pin-private %}

## 添加成员专享组织资料 README

1. 如果您的组织还没有 `.github-private` 存储库，请创建一个名为 `.github-private` 的私有存储库。
2. 在组织的 `.github-private` 存储库中，在 `profile` 文件夹中创建 `README.md` 文件。
3. 将更改提交到 `README.md` 文件。 `README.md` 的内容将显示在组织资料的成员视图中。

   ![组织私有 README 的图像](/assets/images/help/organizations/org_member_readme.png)

## 将存储库固定到组织的资料

您可以将要展示的存储库（如经常使用的存储库）固定到组织的资料页面。 要选择要固定到组织资料的存储库，您必须是组织所有者或管理员。

1. 导航到组织的资料页面。
2. 在页面右侧边栏的 {% octicon "eye" aria-label="The eye octicon" %}“查看身份”链接中，从下拉菜单中选择**公共**或**成员**个人资料视图。

   ![组织资料视图下拉列表的图像](/assets/images/help/organizations/org_profile_view.png)

3. 在固定仓库部分，选择 **Customize pins（自定义固定）**。

   ![自定义固定链接的图像](/assets/images/help/organizations/customize_pins_link.png)

   - 如果尚未将任何存储库固定到组织的资料，则需要改为单击资料页面右侧边栏中的 **pin repositories（固定仓库）**。 ![右侧边栏中固定仓库链接的图像](/assets/images/help/organizations/pin_repositories_link.png)

4. 在“Edit pinned repositories（编辑固定存储库）”对话框中，选择要显示的最多六个公共、 {% ifversion not fpt %}私有或内部{% else %}或私有{% endif %} 存储库的组合。

   ![固定存储库对话框的图像](/assets/images/help/organizations/pinned_repo_dialog.png)

5. 单击 **Save pins（保存嵌入）**。

{% endif %}

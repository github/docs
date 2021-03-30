---
title: 管理个人资料自述文件
intro: '可以向您的 {% data variables.product.prodname_dotcom %} 个人资料添加自述文件以向其他人介绍自己。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
topics:
  - 个人资料
---

### 关于您的个人资料自述文件

通过创建个人资料自述文件，您可以与 {% data variables.product.prodname_dotcom %} 上的社区分享有关自己的信息。 {% data variables.product.prodname_dotcom %} 在个人资料页面的顶部显示您的个人资料自述文件。

您决定在个人资料自述文件中包含哪些信息，因此您可以完全控制如何在 {% data variables.product.prodname_dotcom %} 上展示自己。 以下是访客可能在您的个人资料自述文件中找到感兴趣、有趣或有用信息的一些示例。

- “About me（关于我）”部分介绍您的工作和兴趣。
- 您引以为豪的贡献以及这些贡献的背景信息
- 在您参与的社区获得帮助的指南

![个人资料上显示的个人资料自述文件](/assets/images/help/repository/profile-with-readme.png)

您可以使用 {% data variables.product.company_short %} Flavored Markdown 在个人资料自述文件中设置文本格式和包含表情符号、图像及 GIF。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”。

### 基本要求

如果满足以下所有条件，GitHub 将在您的个人资料页面显示您的个人资料自述文件。

- 您使用与您的 {% data variables.product.prodname_dotcom %} 用户名匹配的名称创建了仓库。
- 该仓库为公共仓库。
- 仓库的根目录中包含名为 README.md 的文件。
- README.md 文件包含任何内容。

{% note %}

**注**：如果您在 2020 年 7 月之前创建了一个与您的用户名同名的公共仓库，{% data variables.product.prodname_dotcom %} 不会自动在您的个人资料上显示该仓库的自述文件。 您可以转到 {% data variables.product.prodname_dotcom_the_website %} 上的仓库，然后单击 **Share to profile（分享到个人资料）**，从而手动将仓库的自述文件分享到您的个人资料。

![将自述文件分享到个人资料的按钮](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

### 添加个人资料自述文件

{% data reusables.repositories.create_new %}
2. 在“Repository name（仓库名称）”下，输入与您的 {% data variables.product.prodname_dotcom %} 用户名匹配的仓库名称。 例如，如果您的用户名是 "octocat"，则仓库名称必须为 "octocat"。 ![与用户名匹配的仓库名称字段](/assets/images/help/repository/repo-username-match.png)
3. （可选）添加仓库的说明。 例如，“My personal repository（我的个人仓库）”。 ![用于输入仓库说明的字段](/assets/images/help/repository/create-personal-repository-desc.png)
4. 选择 **Public（公共）**。 ![选择公共仓库可见性的单选按钮](/assets/images/help/repository/create-personal-repository-visibility.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. 在左边栏上，单击 **Edit README（编辑自述文件）**。 ![编辑自述文件的按钮](/assets/images/help/repository/personal-repository-edit-readme.png)

  生成的自述文件用模板预先填充，为您创建个人资料自述文件提供一些启发。 ![带有预填充模板的自述文件](/assets/images/help/repository/personal-repository-readme-template.png)

有关所有可用表情符号及其代码的摘要，请参阅“[表情符号备忘清单](http://www.emoji-cheat-sheet.com/)” 。

### 删除个人资料自述文件

如果以下任何一项适用，个人资料自述文件将从您的 {% data variables.product.prodname_dotcom %} 个人资料中被删除：

- 自述文件为空或不存在。
- 该仓库为私有仓库。
- 仓库名称不再与您的用户名匹配。

您选择的方法取决于您的需求，但如果您不确定，我们建议您将仓库设为私有。 有关如何将仓库设为私有的步骤，请参阅[“更改仓库的可见性”](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility)。

### 延伸阅读

- [关于自述文件](/github/creating-cloning-and-archiving-repositories/about-readmes)

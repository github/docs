---
title: 代表组织创建提交
intro: '通过在提交消息中添加尾行可代表组织创建提交。 归属于组织的提交应包含 {% data variables.product.product_name %} 上的 `on-behalf-of` 徽章。'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: 代表组织
---

{% note %}

**注：**代表组织创建提交的功能目前处于公开测试阶段，可能会有所变化。

{% endnote %}

要代表组织创建提交：

- 您必须是尾行所述组织的成员
- 您必须对提交签名
- 您的提交电子邮件地址和组织电子邮件地址必须位于经组织验证的域中
- 您的提交消息必须以尾行 `on-behalf-of: @org <name@organization.com>` 结尾。
  - `org` 是组织的登录名
  - `name@organization.com` 位于组织的域中

组织可使用 `name@organization.com` 电子邮件地址作为开源工作的公共联络点。

## 在命令行上使用 `on-behalf-of` 徽章创建提交

1. 输入提交消息以及简短、有意义的更改描述。 在提交描述后，不要加上右引号，而是添加两个空行。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **提示：** 如果您使用文本编辑器在命令行上输入提交消息，请确保在提交描述末尾与 `on-behalf-of:` 提交尾行之间有两个换行符。

  {% endtip %}

2. 在提交消息的下一行，键入 `on-behalf-of: @org <name@organization.com>`，然后键入右引号。

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

在下次推送时，新的提交、消息和徽章将显示在 {% data variables.product.product_location %} 上。 更多信息请参阅“[推送更改到远程仓库](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)”。

## 在 {% data variables.product.product_name %} 上使用 `on-behalf-of` 徽章创建提交

在 {% data variables.product.product_name %} 上使用 web 编辑器对文件进行更改后，您可以通过在提交消息中添加 `on-behalf-of:` 尾行来创建代表组织的提交。

1. 进行更改后，在页面底部键入简短、有意义的提交消息，以描述您所做的更改。 ![有关更改的提交消息](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. 在提交消息下方的文本框中，添加 `on-behalf-of: @org <name@organization.com>`。

  ![第二个提交消息文本框中的提交消息代表尾行示例](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. 单击 **Commit changes（提交更改）**或 **Propose changes（提议更改）**。

新的提交、消息和徽章将显示在 {% data variables.product.product_location %} 上。

## 延伸阅读

- "[在个人资料中查看贡献](/articles/viewing-contributions-on-your-profile)"
- “[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
- “[查看项目的贡献者](/articles/viewing-a-projects-contributors)”
- “[更改提交消息](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)”

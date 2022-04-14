---
title: 自定义组织的配置文件
intro: 您可以通过自定义组织的配置文件来共享有关组织的信息
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: 自定义组织配置文件
---

## 关于组织的资料 README

您可以通过创建组织配置文件 README 来共享有关如何与组织互动的信息。 {% data variables.product.prodname_dotcom %} 在组织的“Overview（概述）”选项卡中显示组织资料 README。

您可以选择要包含组织资料 README 的信息。 下面是一些信息示例，这些信息可能对组织的资料 README 有所帮助。

- “About（关于）”部分介绍您的组织
- 在组织中获取帮助的指南

您可以使用 {% data variables.product.company_short %} Flavored Markdown 在组织资料 README 中设置文本格式和包含表情符号、图像及 GIF。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”。

## 添加组织资料 README

1. 如果您的组织还没有公共 `.github` 存储库，请创建一个公共 `.github` 存储库。
2. 在组织的 `.github` 存储库中，在 `profile` 文件夹中创建 `README.md` 文件。
3. 将更改提交到 `README.md` 文件。 `README.md` 的内容将显示在组织的资料中。

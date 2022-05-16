---
title: 将您的个人资料设置为私密
intro: 私密个人资料仅显示有限的信息，并隐藏某些活动。
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: 将个人资料设置为私密
---

## 关于私密个人资料

{% note %}

**注意：**私密个人资料目前处于测试阶段，可能会有所变化。

{% endnote %}

要隐藏部分个人资料页面，您可以将个人资料设为私密。 这也会隐藏您在 {% data variables.product.prodname_dotcom_the_website %} 上的各种社交功能中的活动。 私密个人资料会隐藏所有用户的信息，并且当前没有允许指定用户查看您的活动的选项。

将个人资料设为私密后，您仍然可以在访问自己的个人资料时查看所有信息。

私密个人资料在 [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) 下不能获得赞助。 要获得 {% data variables.product.prodname_sponsors %} 资格，您的个人资料不能是私密的。

## 私密个人资料与公共个人资料之间的差异

当您的个人资料为私密时，您的个人资料页面中会隐藏以下内容：

- 成就和亮点。
- 活动概述和活动源。
- 贡献图。
- 关注者和关注数。
- 关注和赞助者按钮。
- 组织成员资格。
- 星标、项目、包和赞助标签。

{% note %}

**注意**：当您的个人资料为私密时，某些可选字段仍可公开显示，例如自述文件、传记和头像。

{% endnote %}

## 更改活动报告

通过将个人资料设为私密，您无法删除或隐藏过去的活动；此设置仅适用于启用私密设置时的活动。

当您的个人资料为私密时，您的 {% data variables.product.prodname_dotcom_the_website %} 活动将不会显示在以下位置：

- 其他用户的活动源。
- 讨论排行榜。
- [热门](https://github.com/trending)页面。

{% note %}

**注意**：您在公共仓库上的活动仍将对查看这些仓库的任何人公开可见，并且某些活动数据可能仍可通过 {% data variables.product.prodname_dotcom %} API 获得。

{% endnote %}

## 更改个人资料的隐私设置

{% data reusables.user-settings.access_settings %}
1. 在“Contributions & Activity（贡献和活动）”下，选中 **Make profile private and hide activity（将个人资料设为私密并隐藏活动）**旁边的复选框。
{% data reusables.user-settings.update-preferences %}

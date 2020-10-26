---
title: 在 GitHub 上导航代码
intro: '您可以直接在 {% data variables.product.product_name %} 中导航代码，来理解仓库内及仓库之间的关系。'
redirect_from:
  - /articles/navigating-code-on-github
versions:
  free-pro-team: '*'
---

### 关于在 {% data variables.product.prodname_dotcom %} 上导航代码

导航代码功能使用开源库 [`semantic`](https://github.com/github/semantic)。 支持以下语言：
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

{% note %}

**注**：代码导航适用于活动的分支。 如果为您启用了此功能，但您看不到功能和方法定义的链接，请推送至分支并重试。

{% endnote %}

### 跳至功能或方法的定义

您可以在文件中单击函数或方法调用，跳至同一仓库中该函数或方法的定义。

![跳至定义选项卡](/assets/images/help/repository/jump-to-definition-tab.png)

### 查找函数或方法的所有引用

您可以在文件中单击函数或方法调用，然后单击 **References（引用）**选项卡，查找同一仓库中该函数或方法的所有引用。

![查找所有引用选项卡](/assets/images/help/repository/find-all-references-tab.png)

### 延伸阅读
- “[搜索代码](/github/searching-for-information-on-github/searching-code)”

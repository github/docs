---
title: 配置作业仓库的默认设置
shortTitle: 配置作业仓库的默认值
intro: 您可以使用 Probot 设置应用程序为 {% data variables.product.prodname_classroom %} 创建用于作业的仓库配置默认设置。
permissions: 组织所有者可以通过为组织安装 {% data variables.product.prodname_github_app %} 来配置作业仓库的默认设置。
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/probot-settings
---

### 关于作业仓库的默认值配置

{% data variables.product.prodname_classroom %} 创建属于接受作业的每个学生或团队的仓库。 仓库属于您用于 {% data variables.product.prodname_classroom %} 的组织。 作业仓库可以是空的，也可以使用模板仓库。 更多信息请参阅“[从模板仓库创建作业](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)”。

{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}

使用 Probot 设置应用程序，您可以在包含仓库设置列表的仓库中创建名为 _.github/settings.yml_ 的文件，然后为组织安装自动将设置应用到仓库的 {% data variables.product.prodname_github_app %} 。

您可以在模板仓库中包含用于 {% data variables.product.prodname_classroom %} 中作业的 _.github/settings.yml_。 当个人或团队接受作业时，{% data variables.product.prodname_classroom %} 会创建作业仓库，并且设置应用程序自动从 _.github/settings.yml_ 应用设置。

Probot 是一个免费应用程序的项目、框架和集合，用于自动化 {% data variables.product.product_name %}。 Probot 应用程序可以侦听仓库事件，如创建新提交、注释和议题，并自动响应事件。

更多信息请参阅 [Probot 网站](https://probot.github.io)和[设置应用程序网站](https://probot.github.io/apps/settings/)。 有关 {% data variables.product.prodname_github_apps %} 的更多信息，请参阅“[关于应用程序](/developers/apps/about-apps)”。

### 将设置应用程序添加到组织

为组织安装 Probot 设置应用程序后，该应用程序将对组织中的任何仓库（包括 {% data variables.product.prodname_classroom %} 创建的新作业仓库）应用您在 _.github/settings.yml_ 中定义的设置。

1. 导航到[设置应用程序页面](https://github.com/apps/settings)。
1. 单击 **Install（安装）**，然后单击用于  {% data variables.product.prodname_classroom %} 的组织。 为应用程序提供对组织拥有的所有仓库的完全访问权限。 ![安装 Probot 设置应用程序](/assets/images/help/classroom/probot-settings.gif)

### 配置作业仓库的默认设置

1. 创建包含 _.github/settings.yml_ 文件的模板仓库。 有关设置的完整列表，请参阅 `probot/settings` 仓库的 [README](https://github.com/probot/settings#github-settings)。 有关对 {% data variables.product.prodname_classroom %} 中的起始代码使用模板仓库的更多信息，请参阅“[从模板仓库创建作业](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)”。

    {% warning %}

    **警告：**不要在模板仓库的 _.github/settings.yml_ 文件中定义`协作者`。 {% data variables.product.prodname_classroom %} 自动授予教师和教师助理访问作业仓库的权限。

    {% endwarning %}

1. 使用包含 _.github/settings.yml_ 作为起始代码的模板仓库创建作业。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

组织的 Probot 设置应用程序现在会将您在模板仓库的 _.github/settings.yml_ 中定义的设置应用到 {% data reusables.classroom.you-may-want-to-predefine-repository-settings %} 为学生或团队创建的每个作业仓库。

### 延伸阅读

- [Probot 应用程序](https://probot.github.io/apps/)
- [Probot 文档](https://probot.github.io/docs/)

---
title: 集成 GitHub Classroom 与 IDE
shortTitle: 与 IDE 集成
intro: '您可以为您在 {% data variables.product.prodname_classroom %} 中创建的作业预配置受支持的集成开发环境 (IDE)。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## 关于与 IDE 集成

{% data reusables.classroom.about-online-ides %}

学生接受具有 IDE 的作业后，学生作业仓库中的 README 文件将包含一个按钮，用于打开 IDE 中的作业。 学生可以立即开始工作，无需进行其他配置。

## 支持的 IDE

{% data variables.product.prodname_classroom %} 支持以下 IDE。 您可以详细了解每个 IDE 的学生体验。

| IDE                                                       | 更多信息                                                                                                                                                                                                                                                            |
|:--------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_github_codespaces %} | “[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_classroom %} 一起使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)” |
| Microsoft MakeCode Arcade                                 | "[关于结合使用 MakeCode Arcade 与 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)"                                                                              |
| {% data variables.product.prodname_vscode %}              | Visual Studio Marketplace 中的 [{% data variables.product.prodname_classroom %} 扩展](http://aka.ms/classroom-vscode-ext)                                                                                                                                           |

我们知道云 IDE 集成对您的课堂非常重要，正在努力提供更多选择。

## 为作业配置 IDE

创建作业时，您可以选择要用于作业的 IDE。 要了解如何创建使用 IDE 的新作业，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”或“[创建小组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”。

## 在新 IDE 中设置任务

首次使用其他 IDE 配置分配时，必须确保设置正确。

除非使用 {% data variables.product.prodname_codespaces %}，否则必须为组织的 IDE 授权 OAuth 应用程序。 对于所有仓库，授予应用程序**读取**元数据、管理和代码的权限，以及**写入**问管理和代码的权限。 更多信息请参阅“[授权 OAuth 应用程序](/github/authenticating-to-github/authorizing-oauth-apps)”。

{% data variables.product.prodname_codespaces %} 不需要 OAuth 应用程序，但需要启用 {% data variables.product.prodname_codespaces %}，以便组织能够使用 {% data variables.product.prodname_codespaces %} 配置作业。 更多信息请参阅“[将 {% data variables.product.prodname_codespaces %} 与 {% data variables.product.prodname_classroom %} 一起使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)”。

## 延伸阅读

- "[关于 README](/github/creating-cloning-and-archiving-repositories/about-readmes)"

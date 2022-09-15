---
title: 集成 GitHub Classroom 与 IDE
shortTitle: Integrate with an IDE
intro: '您可以为您在 {% data variables.product.prodname_classroom %} 中创建的作业预配置受支持的集成开发环境 (IDE)。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110504'
---
## 关于与 IDE 集成

{% data reusables.classroom.about-online-ides %} 

学生接受具有 IDE 的作业后，学生作业仓库中的 README 文件将包含一个按钮，用于打开 IDE 中的作业。 学生可以立即开始工作，无需进行其他配置。

## 支持的 IDE

{% data variables.product.prodname_classroom %} 支持以下 IDE。 您可以详细了解每个 IDE 的学生体验。

| IDE | 详细信息 |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | “[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) 配合使用” |
| Microsoft MakeCode Arcade | [关于将 MakeCode Arcade 与 {% data variables.product.prodname_classroom %} 配合使用](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom) |
| {% data variables.product.prodname_vscode %} | Visual Studio Marketplace 中的 [{% data variables.product.prodname_classroom %} 扩展](http://aka.ms/classroom-vscode-ext) |

我们知道云 IDE 集成对您的课堂非常重要，正在努力提供更多选择。 

## 为作业配置 IDE

创建作业时，您可以选择要用于作业的 IDE。 若要了解如何创建使用 IDE 的新作用，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”或“[创建小组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”。

## 在新 IDE 中设置分配

首次使用其他 IDE 配置分配时，必须确保对其进行正确设置。

除非使用 {% data variables.product.prodname_codespaces %}，否则必须为组织的 IDE 授权 OAuth 应用。 对于所有存储库，授予应用对元数据、管理和代码的读取权限，以及对管理和代码的写入权限 。 有关详细信息，请参阅“[授权 OAuth 应用](/github/authenticating-to-github/authorizing-oauth-apps)”。

{% data variables.product.prodname_codespaces %} 不需要 OAuth 应用，但你需要启用 {% data variables.product.prodname_codespaces %} 以便你的组织能够使用 {% data variables.product.prodname_codespaces %} 配置作业。 有关详细信息，请参阅“[将 {% data variables.product.prodname_codespaces %} 与 {% data variables.product.prodname_classroom %} 配合使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)”。

## 延伸阅读

- [关于自述文件](/github/creating-cloning-and-archiving-repositories/about-readmes)

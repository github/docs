---
title: 关于自述文件
intro: 您可以将自述文件添加到仓库，告知其他人您的项目为什么有用，他们可以对您的项目做什么，以及他们可以如何使用。
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163334'
---
## 关于自述文件

{% data reusables.repositories.about-READMEs %}

有关为项目提供指南的详细信息，请参阅{% ifversion fpt or ghec %}“[为项目添加行为准则](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)”和{% endif %}“[设置健康贡献的项目](/communities/setting-up-your-project-for-healthy-contributions)”。

自述文件通常是访问者在访问仓库时看到的第一个项目。 自述文件通常包含以下信息：
- 项目做什么
- 项目为什么有用
- 用户如何使用项目
- 用户能从何处获取项目的帮助
- 谁维护和参与项目

如果将自述文件放在存储库隐藏的 `.github` 目录、根目录或 `docs` 目录中，{% data variables.product.product_name %} 将识别自述文件并自动向存储库访问者显示。

如果存储库包含多个自述文件，则按以下顺序从各位置中选择显示的文件：`.github` 目录，然后是存储库的根目录，最后是 `docs` 目录。

![Github/scientist 仓库的主页面及其自述文件](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![用户名/用户名仓库上的自述文件](/assets/images/help/repository/username-repo-with-readme.png)

## 为 README 文件自动生成的目录

对于仓库中任何 Markdown 文件（包括 README 文件）的视图，{% data variables.product.product_name %} 将自动生成基于章节标题的目录。 您可以通过单击渲染页面左上侧的 {% octicon "list-unordered" aria-label="The unordered list icon" %}  菜单图标来查看 README 文件的目录。

![自动生成目录的自述文件](/assets/images/help/repository/readme-automatic-toc.png)

## 自述文件和 blob 页面中的章节链接

{% data reusables.repositories.section-links %}

## 自述文件中的相对链接和图像路径

{% data reusables.repositories.relative-links %}

## Wiki

自述文件应仅包含开发人员开始使用和参与项目的必要信息。 较长的文档最适合维基。 有关详细信息，请参阅“[关于 Wikis](/communities/documenting-your-project-with-wikis/about-wikis)”。

## 延伸阅读

- [添加文件到存储库](/articles/adding-a-file-to-a-repository)
- 18F 的“[将自述文件设为可读](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)”{%- ifversion fpt or ghec %} 
- “[添加‘在 GitHub Codespaces 中打开’锁屏提醒](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)”{%- endif %}   

---
title: 创建模板仓库
intro: 可以将某个现有存储库设置为模板，使你和其他人能够生成具有相同目录结构、分支和文件的新存储库。
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129383'
---
{% note %}

注意：你的模板存储库不能包含使用 {% data variables.large_files.product_name_short %} 存储的文件。

{% endnote %}

要创建模板仓库，必须先创建一个仓库，然后将该仓库设置为模板。 有关创建存储库的详细信息，请参阅“[新建存储库](/articles/creating-a-new-repository)”。

将存储库设置为模板后，任何对该存储库有访问权限的人都可以生成一个新存储库，该存储库具有与你的默认分支相同的目录结构和文件。 还可以选择在存储库中包含所有其他分支。 从模板创建的分支具有不相关的历史记录，因此无法创建拉取请求或在分支之间合并。 有关详细信息，请参阅“[通过模板创建存储库](/articles/creating-a-repository-from-a-template)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 选择“模板存储库”。
  ![将存储库设置为模板的复选框](/assets/images/help/repository/template-repository-checkbox.png)

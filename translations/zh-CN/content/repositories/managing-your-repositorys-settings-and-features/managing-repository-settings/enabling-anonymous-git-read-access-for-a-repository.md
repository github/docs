---
title: 启用仓库的匿名 Git 读取权限
intro: 作为仓库管理员，您可以启用或禁用满足特定要求的公共仓库的匿名 Git 读取权限。
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129323'
---
在以下情况下，仓库管理员可以更改特定仓库的匿名 Git 读取权限设置：
- 站点管理员已启用私有模式和匿名 Git 读取权限。
- 仓库在企业上是公共的，并且不是复刻。
- 站点管理员尚未禁用仓库的匿名 Git 读取权限。

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“启用匿名 Git 读取权限”旁边，单击“启用”。
![“匿名 Git 读取权限”下的“启用”按钮](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. 查看更改。 如需确认，请键入存储库名称，然后单击“我理解，启用匿名 Git 读取权限”。

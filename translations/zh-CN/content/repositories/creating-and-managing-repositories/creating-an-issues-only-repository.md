---
title: 创建仅含议题的仓库
intro: '{% data variables.product.product_name %} 不提供仅限议题的访问权限，但您可以通过仅含议题的第二仓库来实现此目的。'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129381'
---
1. 创建一个专用存储库来托管项目的源代码。
2. 使用所需权限创建第二仓库来托管议题跟踪器。
3. 向议题仓库添加自述文件以解释此仓库的用途并链接到议题部分。
4. 设置协作者或团队，根据需要授予适当的仓库权限。

对这两个仓库都有写入权限的用户可跨仓库来回引用和关闭议题，但没有所需权限的用户将会看到包含极少信息的引用。

例如，如果你通过读取 `Fixes organization/public-repo#12` 的消息将提交推送到专用存储库的默认分支，则该问题将被关闭，但只有具有适当权限的用户才会看到指示已关闭问题的提交的跨存储库引用。 没有权限的用户也会看到引用，但看不到详细信息。

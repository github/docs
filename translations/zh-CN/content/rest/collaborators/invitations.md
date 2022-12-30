---
title: 存储库邀请
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: 通过存储库邀请 API，可以查看和管理邀请以协作处理存储库。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065792'
---
## 关于存储库邀请 API

通过存储库邀请 API，可以查看和管理邀请以协作处理存储库。 受邀用户（或代表受邀用户的外部服务）可以选择接受或拒绝邀请。

若要将用户添加为协作者，请改用协作者 API。 有关详细信息，请参阅“[添加存储库协作者](/rest/collaborators/collaborators#add-a-repository-collaborator)”。

请注意，`repo:invite` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对邀请的目标访问权限，而不授予对存储库代码的访问权限，同时 `repo` 作用域授予对代码和邀请的权限。

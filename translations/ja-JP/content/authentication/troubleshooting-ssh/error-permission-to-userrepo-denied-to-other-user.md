---
title: 'Error: Permission to user/repo denied to other-user'
intro: このエラーは、プッシュしているキーが、リポジトリへのアクセス権を持たないアカウントに添付されていることを示します。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088206'
---
これを修正するには、リポジトリの所有者 (`user`) が、あなたのアカウント (`other-user`) をリポジトリのコラボレーターとして追加するか、リポジトリへの書き込みアクセスを持つチームに追加する必要があります。

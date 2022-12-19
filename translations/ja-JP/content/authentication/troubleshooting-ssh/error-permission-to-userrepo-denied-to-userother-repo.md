---
title: 'Error: Permission to user/repo denied to user/other-repo'
intro: このエラーは、プッシュに使用しているキーが、他のリポジトリにデプロイキーとして添付されており、プッシュ先のリポジトリへのアクセス権がないことを示しています。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088205'
---
これを修正するには、リポジトリからデプロイ キーを削除し、代わりに[個人アカウントにキーを追加](/articles/adding-a-new-ssh-key-to-your-github-account)します。

使用中のキーが、デプロイ キーとしての使用が意図されたものである場合は、[デプロイ キーのガイド](/guides/managing-deploy-keys)で詳細をご確認ください。

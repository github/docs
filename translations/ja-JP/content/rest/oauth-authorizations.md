---
title: OAuth 認証
intro: OAuth 承認を使うと、ユーザーのアカウントに対して OAuth アプリケーションが持つアクセス権を管理できます。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/oauth-authorizations
ms.openlocfilehash: 7a690b1e874179496c80c4a235e61727b5f72a91
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444670'
---
## OAuth 認証 API について

この API を使用すると、OAuth アプリケーションから自分のアカウントへのアクセスを管理することができます。 この API にアクセスできるのは、トークンではなく、ユーザー名とパスワードを使用した[基本認証](/rest/overview/other-authentication-methods#basic-authentication)のみです。

ご自分またはユーザーが 2 要素認証を有効にしている場合は、[2 要素認証の使用](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)方法を理解していることを確認してください。

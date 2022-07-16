---
title: OAuth認証
intro: OAuth認証を使用すると、OAuthアプリケーションが持つあなたのアカウントへのアクセスを管理できます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/oauth-authorizations
---

## OAuth authorizations APIについて

この API を使用すると、OAuth アプリケーションから自分のアカウントへのアクセスを管理することができます。 この API にアクセスするには、ユーザ名とパスワードを使用する [Basic 認証](/rest/overview/other-authentication-methods#basic-authentication) が必要であり、トークンは使用できません。

自分または自分のユーザが 2 要素認証を有効にしている場合は、必ず [2 要素認証の使用方法](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)を理解していることを確認してください。

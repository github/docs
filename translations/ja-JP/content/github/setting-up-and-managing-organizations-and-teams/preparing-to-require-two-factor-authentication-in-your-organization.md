---
title: Organization で 2 要素認証の義務化を準備する
intro: '2 要素認証を義務化する前に、予定されている変更についてユーザに通知し、どのユーザーが 2 要素認証をすでに使用しているかを確認することができます。'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

We recommend that you notify {% if currentVersion == "free-pro-team@latest" %}organization members, outside collaborators, and billing managers{% else %}organization members and outside collaborators{% endif %} at least one week before you require 2FA in your organization.

Organization で 2 要素認証を必須にすると、2 要素認証を使わないメンバー、外部コラボレーター、および支払いマネージャー (ボットアカウントを含む) は Organization から削除され、そのリポジトリにアクセスできなくなります。 Organization のプライベートリポジトリのフォークへのアクセスも失います。

組織で 2 要素認証を必須にする前に、次の準備をすることをおすすめします:
  - 個人アカウントで [2 要素認証を有効化する](/articles/securing-your-account-with-two-factor-authentication-2fa/)
  - Organization のユーザに、自分のアカウントで 2 要素認証をセットアップするよう指示する
  - [Organization でどのユーザが 2 要素認証を有効にしているか](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)を確認する
  - 2 要素認証が有効になると、2 要素認証を使っていないユーザは自動的に Organization から削除されることを告知する

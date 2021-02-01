---
title: Organization で 2 要素認証の義務化を準備する
intro: '2 要素認証を義務化する前に、予定されている変更についてユーザに通知し、どのユーザーが 2 要素認証をすでに使用しているかを確認することができます。'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Organization で 2 要素認証を義務付ける 1 週間以上前に、{% if currentVersion == "free-pro-team@latest" %}Organization のメンバー、外部コラボレーター、支払いマネージャー {% else %}Organization のメンバーと外部コラボレーター{% endif %}に通知することをおすすめします。

Organization で 2 要素認証を必須にすると、2 要素認証を使わないメンバー、外部コラボレーター、および支払いマネージャー (ボットアカウントを含む) は Organization から削除され、そのリポジトリにアクセスできなくなります。 Organization のプライベートリポジトリのフォークへのアクセスも失います。

組織で 2 要素認証を必須にする前に、次の準備をすることをおすすめします:
  - 個人アカウントで [2 要素認証を有効化する](/articles/securing-your-account-with-two-factor-authentication-2fa/)
  - Organization のユーザに、自分のアカウントで 2 要素認証をセットアップするよう指示する
  - [Organization でどのユーザが 2 要素認証を有効にしているか](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)を確認する
  - 2 要素認証が有効になると、2 要素認証を使っていないユーザは自動的に Organization から削除されることを告知する

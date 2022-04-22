---
title: アプリ
intro: GitHub Apps APIを使うと、インストールに関する情報や、GitHub Appに関する特定の情報を取得できます。
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.apps.general-apps-restrictions %}

このページには、GitHub App として認証されている場合にアクセスできるエンドポイントが一覧表示されています。 詳細については、「[GitHub App として認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してださい。

GitHub App として認証されると、GitHub Apps API を使用して、GitHub App に関する大まかな情報と、アプリケーションのインストールに関する具体的な情報を取得できます。

GitHub App として認証されている場合、REST API v3 エンドポイントにアクセスできます。 これらのエンドポイントには、「Works with GitHub Apps」という箇条書きを含む「注釈」セクションがあります。 ユーザとして認証されている場合、これらのエンドポイントにアクセスすることもできます。

REST API v3 エンドポイントのサブセットでは、GitHub App のインストールとして認証する必要があります。 これらのエンドポイントの一覧については、[Installations](/rest/reference/apps#installations) を参照してください。

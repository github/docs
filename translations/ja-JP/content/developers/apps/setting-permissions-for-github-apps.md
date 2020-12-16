---
title: GitHub Appの権限の設定
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

GitHub Appを作成する際に、そのアプリケーションがエンドユーザのデータにアクセスするために必要な権限を選択できます。 権限は、追加することも削除することもできます。 詳しい情報については「[GitHub Appの権限の編集](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

### メタデータ権限

デフォルトでは、GitHub Appはメタデータエンドポイントに`Read-only`のアクセスを持ちます。 メタデータは、読み取りのみのエンドポイントの集合で、認可されたインストールからアクセスできるリソースに関する一般的な情報を提供します。

{% data reusables.apps.metadata-permissions %} メタデータエンドポイントのリストについては、「[メタデータの権限](/rest/reference/permissions-required-for-github-apps#metadata-permissions)」を参照してください。

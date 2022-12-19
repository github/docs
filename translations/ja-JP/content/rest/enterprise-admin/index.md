---
title: GitHub Enterprise の管理
intro: これらのエンドポイントを使用して、企業を管理できます。
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
  - /rest/reference/enterprise-admin
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Enterprise administration
children:
  - /admin-stats
  - /announcement
  - /audit-log
  - /billing
  - /code-security-and-analysis
  - /global-webhooks
  - /ldap
  - /license
  - /management-console
  - /org-pre-receive-hooks
  - /orgs
  - /pre-receive-environments
  - /pre-receive-hooks
  - /repo-pre-receive-hooks
  - /users
  - /scim
ms.openlocfilehash: 19688f806101c8022b64dfc21806b79338917353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065594'
---
{% ifversion fpt or ghec %}

{% note %}

**注:** この記事は、{% data variables.product.prodname_ghe_cloud %} にのみ適用されます。 {% data variables.product.prodname_ghe_managed %} または {% data variables.product.prodname_ghe_server %} バージョンを見るには、 **[{% data ui.pages.article_version %}]** ドロップダウン メニューを使ってください。

{% endnote %}

{% endif %}

### エンドポイント URL

REST API エンドポイント{% ifversion ghes %} ([Management Console](#management-console) API エンドポイントを除く) {% endif %}の前には、次の URL が付けられます。

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}エンドポイントに `{enterprise}` が含まれる場合は、`{enterprise}` を Enterprise アカウントのハンドルに置き換えます。これは、Enterprise の設定の URL に含まれます。 たとえば、Enterprise アカウントが `https://github.com/enterprises/octo-enterprise` にある場合は、`{enterprise}` を `octo-enterprise` に置き換えます。
{% endif %}

{% ifversion ghes %}[管理コンソール](#management-console) API エンドポイントの前にはホスト名のみが付きます。

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### 認証

{% data variables.product.product_name %} のインストールの API エンドポイントは、GitHub.com API と[同じ認証方法](/rest/overview/resources-in-the-rest-api#authentication)を受け入れます。 **[OAuth トークン](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %} ([承認 API](/rest/reference/oauth-authorizations#create-a-new-authorization) を使って作成できます) {% endif %}または **[基本認証](/rest/overview/resources-in-the-rest-api#basic-authentication)** を使って、自分自身を認証できます。 {% ifversion ghes %}Enterprise 固有のエンドポイントで使う場合、OAuth トークンには `site_admin` [OAuth スコープ](/developers/apps/scopes-for-oauth-apps#available-scopes)が必要です。{% endif %}

Enterprise 管理 API エンドポイントには、認証された {% data variables.product.product_name %} サイト管理者のみがアクセスできます。{% ifversion ghes %}ただし、[Management Console のパスワード](/enterprise/admin/articles/accessing-the-management-console/)が必要な [Management Console](#management-console) API は除きます。{% endif %}

{% endif %}

{% ifversion ghae or ghes %}
### バージョン情報

Enterprise の現在のバージョンは、すべての API の応答ヘッダー `X-GitHub-Enterprise-Version: {{currentVersion}}.0` で返されます。
[メタ エンドポイント](/rest/reference/meta/)を呼び出すことで、現在のバージョンを読み取ることもできます。

{% endif %}

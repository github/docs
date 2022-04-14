{% ifversion fpt or ghec %}

{% note %}

**注釈:** この記事は {% data variables.product.prodname_ghe_cloud %} に適用されます。 {% data variables.product.prodname_ghe_managed %}あるいは{% data variables.product.prodname_ghe_server %}のバージョンを見るには、**{% data ui.pages.article_version %}**ドロップダウンメニューを使ってください。

{% endnote %}

{% endif %}

### エンドポイント URL

REST API エンドポイント{% ifversion ghes %}（[管理コンソール](#management-console) API エンドポイントを除く）{% endif %}の前には、次の URL が付けられます。

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %}
When endpoints include `{enterprise}`, replace `{enterprise}` with the handle for your enterprise account, which is included in the URL for your enterprise settings. For example, if your enterprise account is located at `https://github.com/enterprises/octo-enterprise`, replace `{enterprise}` with `octo-enterprise`.
{% endif %}

{% ifversion ghes %}
[管理コンソール](#management-console) API エンドポイントには、ホスト名のみがプレフィックスとして付加されます。

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### 認証

{% data variables.product.product_name %} のインストールの API エンドポイントは、GitHub.com APIと[同じ認証方法](/rest/overview/resources-in-the-rest-api#authentication)を受け入れます。 **[OAuth トークン](/apps/building-integrations/setting-up-and-registering-oauth-apps/)**{% ifversion ghes %}（[認証 API](/rest/reference/oauth-authorizations#create-a-new-authorization) を使用して作成可能）{% endif %}または **[Basic 認証](/rest/overview/resources-in-the-rest-api#basic-authentication)**で自分自身を認証できます。 {% ifversion ghes %} Enterprise 固有のエンドポイントで使用する場合、OAuthトークンには `site_admin` [OAuth スコープ](/developers/apps/scopes-for-oauth-apps#available-scopes)が必要です。{% endif %}

Enterprise 管理 API エンドポイントには、認証された {% data variables.product.product_name %} サイト管理者のみがアクセスできます。{% ifversion ghes %}ただし、[Management Console のパスワード](/enterprise/admin/articles/accessing-the-management-console/)が必要な [Management Console](#management-console) API は除きます。{% endif %}

{% endif %}

{% ifversion ghae or ghes %}
### バージョン情報

Enterprise の現在のバージョンは、すべての API のレスポンスヘッダで返されます: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` [メタエンドポイント](/rest/reference/meta/)を呼び出して、現在のバージョンを読み取ることもできます。

{% endif %}
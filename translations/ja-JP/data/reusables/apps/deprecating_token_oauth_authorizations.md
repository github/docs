{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% warning %}

**非推奨の通知:** 一部のOAuth Authorizations APIのレスポンスでは、`token`属性は非推奨です。
* 認可のリスト
* 単一の認可の取得
* 特定のアプリケーションのための認可の取得もしくは作成。依然として"create"に対しては`token`が返されます。
* 特定のアプリケーション及びフィンガープリントのための認可の取得もしくは作成。依然として"create"に対しては`token`が返されます。
* 既存の認証の更新

`token`値の削除のインパクトを引き下げるために、OAuth Authorizations APIは新しいリクエストの属性（`fingerprint`）、3つの新しいレスポンス属性（`token_last_eight`、`hashed_token`、`fingerprint`）及び[特定のアプリケーション及びフィンガープリントのための認可の取得もしくは作成](/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint)エンドポイントが含まれるようになりました。

この機能は、2015年4月20日にすべてのリクエストに対するデフォルトになりました。 完全な詳細については[ブログポスト](https://developer.github.com/changes/2015-04-20-authorizations-api-response-changes-are-now-in-effect/)を参照してください。

{% endwarning %}
{% endif %}
